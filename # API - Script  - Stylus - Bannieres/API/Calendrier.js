/*
Calendar for Eberron, Faerun, Greyhawk, Modern and Tal'Dorei Settings
Created by Kirsty (https://app.roll20.net/users/1165285/kirsty)

Many thanks to Aaron (https://app.roll20.net/users/104025/the-aaron) for his NoteLog script, parts of which I "borrowed"

API Commands:
!cal (as Player) - Shows world, date, time, moon, weather and counted days 
!cal (as GM) - Same as player but includes options to advance the date/time, alter the weather, add a note or view the settings menu.
!calSet (GM only) - Allows the GM to change the world, date, time display, show/hide days until full moon, adjust day counter or set the start date

Red Colour: #7E2D40
*/

var Calendar = Calendar || (function() {
    'use strict';
    
    var version = '6.2.0',
        handoutName = 'Faits marquants calendrier',
    
    setDefaults = function() {
        state.Calendar = {
            now: {
                version: '6.2.0',
				world: 1,
                ordinal: 1,
                year: 1486,
                down: 0,
                divider: 0,
                weather: "It is a cool but sunny day.",
                timetype: "OFF",
                time: "Noon",
                mooncount: "OFF",
                startdate: "1,Hammer,1486",
                events: ""
            },
        };
    },
    
    checkDefaults = function() {
        if( state.Calendar.now.version != version ){
            state.Calendar.now.version = version;
        }
        if( ! state.Calendar.now.world){state.Calendar.now.world = 1};
        if( ! state.Calendar.now.ordinal){state.Calendar.now.ordinal = 1};
        if( ! state.Calendar.now.year){state.Calendar.now.year = 1486};
        if( ! state.Calendar.now.down){state.Calendar.now.down = '0'};
        if( ! state.Calendar.now.divider){state.Calendar.now.divider = '0'};
        if( ! state.Calendar.now.weather){state.Calendar.now.weather = "It is a cool but sunny day."};
        if( ! state.Calendar.now.timetype){state.Calendar.now.timetype = "OFF"};
        if( ! state.Calendar.now.time){state.Calendar.now.time = "Noon"};
        if( ! state.Calendar.now.time){state.Calendar.now.mooncount = "OFF"};
        if( ! state.Calendar.now.startdate){state.Calendar.now.startdate = "1,Hammer,1486"};
        if( ! state.Calendar.now.startdate){state.Calendar.now.events = ""};
    },
    
    handleInput = function(msg) {
        var args = msg.content.split(",");
        
        if (msg.type !== "api") {
			return;
		}
		
		if(playerIsGM(msg.playerid)){
		    switch(args[0]) {
		        case '!cal':
                    calmain();
                    break;
                case '!settings':
                    calmenu();
                    break;
                case '!setworld':
                    state.Calendar.now.world=args[1];
                    calmenu();
                    break;
                case '!startdate':
                    state.Calendar.now.startdate=args[1]+','+args[2]+','+args[3];
                    calmenu();
                    break;
                case '!setday':
                    switch(Number(state.Calendar.now.world)) {
                        case 1:
                            getFaerunOrdinal(msg);
                            break;
                        case 2:
                            getGreyhawkOrdinal(msg);
                            break;
                        case 3:
                            getModernOrdinal(msg);
                            break;
                        case 4:
                            getEberronOrdinal(msg);
                            break;
                        case 5:
                            getTalOrdinal(msg);
                            break;
                    }
                    weather();
                    calmenu();
                    break;
                case '!setmonth':
                    switch(Number(state.Calendar.now.world)) {
                        case 1:
                            getFaerunOrdinal(msg);
                            break;
                        case 2:
                            getGreyhawkOrdinal(msg);
                            break;
                        case 3:
                            getModernOrdinal(msg);
                            break;
                        case 4:
                            getEberronOrdinal(msg);
                            break;
                        case 5:
                            getTalOrdinal(msg);
                            break;
                    }
                    weather();
                    calmenu();
                    break;
                case '!setyear':
                    state.Calendar.now.year=args[1];
                    calmenu();
                    break;
                case '!setordinal':
                    state.Calendar.now.ordinal=args[1];
                    calmenu();
                    break;
                case '!settimetype':
                    var type = args[1];
                    state.Calendar.now.timetype=type; 
                    if (type == 'OFF') { state.Calendar.now.time = 'OFF' };
                    if (type == 'General') { state.Calendar.now.time = 'Morning (dawn)' };
                    if (type == '24 Hour') { state.Calendar.now.time = '00:00' };
                    calmenu();
                    break;
                case '!settime':
                    var type = state.Calendar.now.timetype;
                    if (type == 'General'){
                        state.Calendar.now.time = args[1];
                    } else if (type == '24 Hour') {
                        state.Calendar.now.time = args[1]+args[2];
                    }
                    calmain();
                    break;
                case '!setdown':
                    var down = Number(args[1]);
                    state.Calendar.now.down = down;
                    getdown(down);
                    calmain();
                    break;
                case '!setdiv':
                    state.Calendar.now.divider=Number(args[1]);
                    calmenu();
                    break;
                case '!mooncounter':
                    state.Calendar.now.mooncount=args[1];
                    calmenu();
                    break;
                case '!addday':
                    addday(args[1]);
                    weather();
                    calmain();
                    break;
                case '!addtime':
                    addtime(args[1], args[2]);
                    calmain();
                    break;
                case '!weather':
                    if(args[1]=='Roll}'){
                        weather();
                    }else{
                        var string = args[1];
                        for (var i = 2; i < args.length; i++) {
                            string = string + ", " + args[i];
                        }
                        state.Calendar.now.weather = string;
                    }
                    calmain();
                    break;
                case '!log':
                    log(msg);
                    break;    
                case '!playercal':
                    showcal(msg);
                    break;
    	    }
		}else if(args[0]=='!cal'){
		    showcal(msg);
		}
    },
    
    calstyle = function() {
        var colour = '#682b07';
        var divstyle = 'style="width: 250px; border: 1px solid black; background-color: #ffffff; padding: 5px; font-size: 12px;"'
        var astyle1 = 'style="text-align:center; border: 1px solid black; margin: 1px; padding: 2px; background-color: ' + colour + '; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 100px;';
        var astyle2 = 'style="text-align:center; border: 1px solid black; margin: 1px; padding: 2px; background-color: ' + colour + '; border-radius: 4px;  box-shadow: 1px 1px 1px #707070; width: 150px;';
        var tablestyle = 'style="border: none;"';
        var arrowstyle = 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 250px solid ' + colour + '; margin-bottom: 2px; margin-top: 2px;"';
        var headstyle = 'style="color: ' + colour + '; font-family: Helvetica Neue; font-size: 18px; text-align: left; font-variant: small-caps; font-family: Times, serif;"';
        var substyle = 'style="font-size: 11px; line-height: 13px; margin-top: -3px; font-style: italic;"';
        var tdstyle = 'style="padding: 2px; padding-left: 5px; border: none;"';
        
        var styles = colour + '|' + divstyle + '|' + astyle1 + '|' + astyle2 + '|' + tablestyle + '|' + arrowstyle + '|' + headstyle + '|' + substyle + '|' + tdstyle;
        return styles;
    },
    
    calmain = function() {
        var styles = calstyle().split("|");
        var colour = styles[0];
        var divstyle = styles[1];
        var astyle1 = styles[2];
        var astyle2 = styles[3];
        var tablestyle = styles[4];
        var arrowstyle = styles[5];
        var headstyle = styles[6];
        var substyle = styles[7];
        var tdstyle = styles[8];
        
        var world = getworld();
        var down = Number(state.Calendar.now.down);
        down = getdown(down);
        var moMenu = getMoMenu();
        var ordinal = state.Calendar.now.ordinal;
        
        var nowdate;
        
        switch(Number(state.Calendar.now.world)) {
            case 1:
                nowdate = getFaerunDate(ordinal).split(',');
                break;
            case 2:
                nowdate = getGreyhawkDate(ordinal).split(',');
                break;
            case 3:
                nowdate = getModernDate(ordinal).split(',');
                break;
            case 4:
                nowdate = getEberronDate(ordinal).split(',');
                break;
            case 5:
                nowdate = getTalDate(ordinal).split(',');
                break;
        }
        
        var month = nowdate[0];
        var day = nowdate[1];
        var suffix = getsuffix(day);
        
        var moon;
        
        if (state.Calendar.now.world==1){
            moon = getFaerunMoon();
        }else if(state.Calendar.now.world==2){
            moon = getGreyhawkMoon();
        }else{
            moon = '';
        }
        
        var start = state.Calendar.now.startdate.split(',');
        var startdate = start[0]+getsuffix(start[0])+' '+start[1]+', '+start[2];
        var timeselect = timemenu();
        
        sendChat('Calendar', '/w gm <div ' + divstyle + '>' + //--
            '<div ' + headstyle + '>Calendar</div>' + //--
            '<div ' + substyle + '>Menu (v.' + state.Calendar.now.version + ')</div>' + //--
            '<div ' + arrowstyle + '></div>' + //--
            '<table ' + tablestyle + '>' + //--
            '<tr><td ' + tdstyle + '>World: </td><td ' + tdstyle + '>' + world + '</td></tr>' + //--
            '<tr><td ' + tdstyle + '>Date: </td><td ' + tdstyle + '>'+ month + ' ' + day + suffix + ', ' + state.Calendar.now.year + '</td></tr>' + //--
            '<tr><td ' + tdstyle + '>Jour: </td><td ' + tdstyle + '><a ' + astyle1 + '"href="!setdown,?{Down Days}">' + down + '</a></td></tr>' + //--
            '<tr><td ' + tdstyle + '>Heure: </td><td ' + tdstyle + '><a ' + astyle1 + '" href="!settime,'+ timeselect + '">' + state.Calendar.now.time + '</a></td></tr>' + //--
            '<tr><td ' + tdstyle + '>Lune: </td><td ' + tdstyle + '>' + moon + //--
            '</table>' + //--
            'Weather: ' + state.Calendar.now.weather + //--
            '<br><br><div style="text-align:center;"><a ' + astyle2 + '" href="!addday,?{Days to add?|1}">Advance the Date</a></div>' + //--
            '<div style="text-align:center;"><a ' + astyle2 + '" href="!addtime,?{Advance how many hours?|0},?{Advance how many minutes?|0}">Advance the Time</a></div>' + //--
            '<div style="text-align:center;"><a ' + astyle2 + '" href="!weather,?{Weather|Roll|Edit,?{Edit Weather}}">Change Weather</a></div>' + //--
            '<div style="text-align:center;"><a ' + astyle2 + '" href="!log,?{Include time?|Yes|No},?{Notes}">Log Day</a></div>' + //--
            '<div style="text-align:center;"><a ' + astyle2 + '" href="!playercal">Show to Players</a></div>' + //--
            '<div style="text-align:center;"><a ' + astyle2 + '" href="!settings">Settings</a></div>' + //--
            '</div>'
        );
    },
    
    calmenu = function() {
        
        var styles = calstyle().split("|");
        var colour = styles[0];
        var divstyle = styles[1];
        var astyle1 = styles[2];
        var astyle2 = styles[3];
        var tablestyle = styles[4];
        var arrowstyle = styles[5];
        var headstyle = styles[6];
        var substyle = styles[7];
        var tdstyle = styles[8];
        
        var world = getworld();
        var down = Number(state.Calendar.now.down);
        down = getdown(down);
        var moMenu = getMoMenu();
        var ordinal = state.Calendar.now.ordinal;
        
        var nowdate;
        
        switch(Number(state.Calendar.now.world)) {
            case 1:
                nowdate = getFaerunDate(ordinal).split(',');
                break;
            case 2:
                nowdate = getGreyhawkDate(ordinal).split(',');
                break;
            case 3:
                nowdate = getModernDate(ordinal).split(',');
                break;
            case 4:
                nowdate = getEberronDate(ordinal).split(',');
                break;
            case 5:
                nowdate = getTalDate(ordinal).split(',');
                break;
        }
        
        var month = nowdate[0];
        var day = nowdate[1];
        
        var start = state.Calendar.now.startdate.split(',');
        var startdate = start[0]+getsuffix(start[0])+' '+start[1]+', '+start[2];
        var timeselect = timemenu();
        
        sendChat('Calendar', '/w gm <div ' + divstyle + '>' + //--
            '<div ' + headstyle + '>Calendar</div>' + //--
            '<div ' + substyle + '>Menu (v.' + state.Calendar.now.version + ')</div>' + //--
            '<div ' + arrowstyle + '></div>' + //--
            '<table ' + tablestyle + '>' + //--
            '<tr><td ' + tdstyle + '>World: </td><td ' + tdstyle + '><a ' + astyle1 + '" href="!setworld,?{World?|Deadlands,1|Greyhawk,2|Modern,3|Eberron,4|Tal\'Dorei,5}">' + world + '</a></td></tr>' + //--
            '<tr><td ' + tdstyle + '>Start Date: </td><td ' + tdstyle + '><a ' + astyle1 + '" href="!startdate,?{Day},?{Month},?{Year}">' + startdate + '</a></td></tr>' + //--
            '<tr><td ' + tdstyle + '>Day: </td><td ' + tdstyle + '><a ' + astyle1 + '" href="!setday,?{Day?|1},' + month +'">' + day + '</a></td></tr>' + //--
            '<tr><td ' + tdstyle + '>Month: </td><td ' + tdstyle + '><a ' + astyle1 + '" href="!setmonth,' + day + moMenu + month + '</a></td></tr>' + //--
            '<tr><td ' + tdstyle + '>Year: </td><td ' + tdstyle + '><a ' + astyle1 + '" href="!setyear,?{Year?|1486}">' + state.Calendar.now.year + '</a></td></tr>' + //--
            //'<tr><td ' + tdstyle + '>Ordinal: </td><td ' + tdstyle + '><a ' + astyle1 + '" href="!setordinal,?{Ordinal?|1}">' + ordinal + '</a></td></tr>' + //-
            '<tr><td ' + tdstyle + '>Time type: </td><td ' + tdstyle + '><a ' + astyle1 + '" href="!settimetype,?{Time?|OFF|24 Hour|General}">' + state.Calendar.now.timetype + '</a></td></tr>' + //-
            '<tr><td ' + tdstyle + '>Time: </td><td ' + tdstyle + '><a ' + astyle1 + '" href="!settime,'+ timeselect + '">' + state.Calendar.now.time + '</a></td></tr>' + //--
            '<tr><td ' + tdstyle + '>Down Day<br>Divider: </td><td ' + tdstyle + '><a ' + astyle1 + '" href="!setdiv,?{Down Day Divider?|1}">' + state.Calendar.now.divider + '</a></td></tr>' + //--
            '<tr><td ' + tdstyle + '>Moon Counter: </td><td ' + tdstyle + '><a ' + astyle1 + '" href="!mooncounter,?{Moon Counter|OFF|ON}">' + state.Calendar.now.mooncount + '</a></td></tr>' + //--
            '</table>' + //--
            '<div style="text-align:center;"><a ' + astyle2 + '" href="!cal">Main Menu</a></div>' + //--
            '</div>'
        );
    },
    
    showcal = function(msg) {
        var nowdate;
        var ordinal = state.Calendar.now.ordinal;
        
        switch(Number(state.Calendar.now.world)) {
            case 1:
                nowdate = getFaerunDate(ordinal).split(',');
                break;
            case 2:
                nowdate = getGreyhawkDate(ordinal).split(',');
                break;
            case 3:
                nowdate = getModernDate(ordinal).split(',');
                break;
            case 4:
                nowdate = getEberronDate(ordinal).split(',');
                break;
            case 5:
                nowdate = getTalDate(ordinal).split(',');
                break;
        }
        
        var month = nowdate[0];
        var day = nowdate[1];
        var down = state.Calendar.now.down;
            down = getdown(down);
        var suffix = getsuffix(day);
        var world = getworld();
        var colour = '#682b07';
        var divstyle = 'style="width: 250px; border: 1px solid black; background-image: url(\'https://imgsrv.roll20.net/?src=https%3A//i.imgur.com/zRSY255.jpeg\'); background-color: #ffffff; padding: 5px;"'
        var tablestyle = 'style="text-align:center;"';
        var arrowstyle = 'style="border: none; border-top: 3px solid transparent; border-bottom: 3px solid transparent; border-left: 250px solid ' + colour + '; margin-bottom: 2px; margin-top: 2px;"';
        var headstyle = 'style="color: ' + colour + '; font-size: 18px; font-family: "helvetica neue" ;text-align: left; font-variant: small-caps; font-family: Times, serif;"';
        var substyle = 'style="font-size: 11px; line-height: 13px; margin-top: -3px; font-style: italic;"';
        var moon; 
        
        if (state.Calendar.now.world==1){
            moon = '<table style = "border: none;"><tr><td style="border: none; padding: 2px; padding-left: 5px;">Moon:</td><td style="border: none; padding: 2px; padding-left: 5px;">'+getFaerunMoon()+'</table>';
        }else if(state.Calendar.now.world==2){
            moon = '<table style = "border: none;"><tr><td style="border: none; padding: 2px; padding-left: 5px;">Moon:</td><td style="border: none; padding: 2px; padding-left: 5px;">'+getGreyhawkMoon()+'</table>';
        }else{
            moon = '';
        }
        
        var timestr;
        var downstr;
        
        if(state.Calendar.now.time!="OFF"){
            timestr = '<br>'+state.Calendar.now.time;
        }else{
            timestr = '';
        }
        
        if(down!=0){
            downstr = '<br>' + down + ' jours restants.';
        }else{
            downstr = '';
        }
        
        sendChat(msg.who, '<div ' + divstyle + '>' + //--
            '<div ' + headstyle + '>Calendrier</div>' + //--
            '<div ' + arrowstyle + '></div>' + //--
            '<br>' + day + ' ' + month + ' ' +  state.Calendar.now.year + //--
            timestr + //--
            downstr + //--
            moon + //--
			'<br><br><u>Météo:</u><br>' + state.Calendar.now.weather
            
        );
    },
    
    getworld = function() {
        var num = Number(state.Calendar.now.world);
        var world;
        
        switch(num) {
            case 1:
                world = 'Deadlands';
                break;
            case 2:
                world = 'Greyhawk';
                break;
            case 3:
                world = 'Modern';
                break;
            case 4:
                world = 'Eberron';
                break;
            case 5:
                world = 'Tal\'Dorei';
                break;
        }
        
        return world;
    },
    
    getdown = function(days) {
        var down = Number(days);
        var div = Number(state.Calendar.now.divider);
        
        if(div!=0){
            down = down/div;
        }
        
        return down;
    },
    
    getMoMenu = function() {
        var world = Number(state.Calendar.now.world);
        var leap = checkLeap();
        var moMenu;
        
        switch(world){
            case 1:
                if(leap==0){
                    moMenu = ',?{Month|Hammer|Midwinter|Alturiak|Ches|Tarsakh|Greengrass|Mirtul|Kythorn|Flamerule|Midsummer|Eleasias|Eleint|Highharvestide|Marpenoth|Uktar|Feast of the Moon|Nightal}">';
                }else{
                    moMenu = ',?{Month|Hammer|Midwinter|Alturiak|Ches|Tarsakh|Greengrass|Mirtul|Kythorn|Flamerule|Midsummer|Sheildmeet|Eleasias|Eleint|Highharvestide|Marpenoth|Uktar|Feast of the Moon|Nightal}">';
                }
                break;
            case 2:
                moMenu = ',?{Month|Needfest|Fire Seek|Readying|Coldeven|Growfest|Planting|Flocktime|Wealsun|Richfest|Reaping|Goodmonth|Harvester|Brewfest|Patchwall|Ready\'reat|Sunsebb}">';
                break;
            case 3:
                moMenu = ',?{Month|Janvier|Fevrier|Mars|Avril|Mai|Juin|Juillet|Aout|Septembre|Octobre|Novembre|Décembre}">';
                break;
            case 4:
                moMenu = ',?{Month|Zarantyr|Olarune|Therendor|Eyre|Dravago|Nymm|Lharvion|Barrakas|Rhaan|Sypheros|Aryth|Vult}">';
                break;
            case 5:
                moMenu = ',?{Month|Horisal|Misuthar|Dualahei|Thunsheer|Unndilar|Brussendar|Sydenstar|Fessuran|Quen\'pillar|Cuersaar|Duscar}">';
        }
        
        return moMenu;
    },
    
    checkLeap = function(){
        
        var leap;
        var remainder;
        var world = Number(state.Calendar.now.world);
        var year = Number(state.Calendar.now.year);
        
        switch(world){
            case 1:
                remainder = year % 4;
                if(remainder==0){
                    leap = 1;
                }else{
                    leap = 0;
                }
                break;
            case 2:
                leap = 0;
                break;
            case 3:
                if(year % 4 != 0){
                    leap = 0;
                }else if(year % 100 != 0){
                    leap = 1;
                }else if(year % 400 != 0){
                    leap = 0;
                }else{
                    leap = 1;
                }
                break;
            case 4:
                leap = 0;
                break;
            case 5:
                leap = 0;
                break;
        }
        
        return leap;
    },
    
    getFaerunDate = function(options){
        var day = Number(options);
        var date;
        var month;
        
        if(day>0 && day<=30){
            month=" Janvier "; 
            date=day;
        }else if(day>31 && day<=61){
            month=" Fevrier "; 
            date=day-31;
        }else if(day>61 && day<=91){
            month=" Mars ";
            date=day-61;
        }else if(day>91 && day<=121){
            month=" Avril ";
            date=day-91;
       
        }else if(day>122 && day<=152){
            month=" Mai ";
            date=day-122;
        }else if(day>152 && day<=182){
            month=" Juin ";
            date=day-152;
        }else if(day>182 && day<=212){
            month=" Juillet ";
            date=day-182;
         }else if(day>214 && day<=244){
            month=" Aout "
            date=day-214;
        }else if(day>244 && day<=274){
            month=" Septembre ";
            date=day-244;
        }else if(day>275 && day<=305){
            month=" Octobre ";
            date=day-275;
        }else if(day>305 && day<=335){
            month=" Novembre ";
            date=day-305;
        }else if(day>336 && day<=366){
            month=" Decembre ";
            date=day-336;
        }else{
            month=" Janvier ";
            date='1';
        }
            
        var array=month+','+String(date);
        return array;    
    },
    
    getGreyhawkDate = function(options){
        var day = Number(options);
        var date;
        var month;
        
        if(day>0 && day<=7){
            month="Needfest"; 
            date=day;
        }else if(day>7 && day<=35){
            month="Fire Seek"; 
            date=day-7;
        }else if(day>35 && day<=63){
            month="Readying"; 
            date=day-35;
        }else if(day>63 && day<=91){
            month="Coldeven";
            date=day-63;
        }else if(day>91 && day<=98){
            month="Growfest";
            date=day-91;
        }else if(day>98 && day<=126){
            month="Planting";
            date=day-98;
        }else if(day>126 && day<=154){
            month="Flocktime";
            date=day-126;
        }else if(day>154 && day<=182){
            month="Wealsun";
            date=day-154;
        }else if(day>182 && day<=189){
            month="Richfest";
            date=day-182;
        }else if(day>189 && day<=217){
            month="Reaping";
            date=day-189;
        }else if(day>217 && day<=245){
            month="Goodmonth"
            date=day-217;
        }else if(day>245 && day<=273){
            month="Harvester";
            date=day-245;
        }else if(day>273 && day<=280){
            month="Brewfest";
            date=day-273;
        }else if(day>280 && day<=308){
            month="Patchwall";
            date=day-280;
        }else if(day>308 && day<=336){
            month="Ready\'reat";
            date=day-308;
        }else if(day>336 && day<=364){
            month="Sunsebb";
            date=day-336;
        }else{
            month="Needfest";
            date='1';
        }
    
        var array=month+','+String(date);
        return array;    
    },
    
    getModernDate = function(options){
        var day = Number(options);
        var date;
        var month;
        
        if(day>0 && day<=31){
            month="Janvier"; 
            date=day;
        }else if(day>31 && day<=59){
            month="Fevrier"; 
            date=day-31;
        }else if(day>59 && day<=90){
            month="Mars"; 
            date=day-59;
        }else if(day>90 && day<=120){
            month="Avril";
            date=day-90;
        }else if(day>120 && day<=151){
            month="Mai";
            date=day-120;
        }else if(day>151 && day<=181){
            month="Juin";
            date=day-151;
        }else if(day>181 && day<=212){
            month="Juillet";
            date=day-181;
        }else if(day>212 && day<=243){
            month="Aout";
            date=day-212;
        }else if(day>243 && day<=273){
            month="Septembre";
            date=day-243;
        }else if(day>273 && day<=304){
            month="Octobre";
            date=day-273;
        }else if(day>304 && day<=334){
            month="Novembre"
            date=day-304;
        }else if(day>334 && day<=365){
            month="Décembre";
            date=day-334;
        }else{
            month="Janvier";
            date='1';
        }
            
        var array=month+','+String(date);
        return array;    
    },
    
    getEberronDate = function(options){
        var day = Number(options);
        var date;
        var month;
        
        if(day<=28){
            month = 'Zarantyr';
            date = day;
        }else if(day<=56){
            month = 'Olarune';
            date = day-28;
        }else if(day<=84){
            month = 'Therendor';
            date = day-56;
        }else if(day<=112){
            month = 'Eyre';
            date = day-84;
        }else if(day<=140){
            month = 'Dravago';
            date = day-112;
        }else if(day<=168){
            month = 'Nymm';
            date = day-140;
        }else if(day<=196){
            month = 'Lharvion';
            date = day-168;
        }else if(day<=224){
            month = 'Rhaan';
            date = day-196;
        }else if(day<=252){
            month = 'Sypheros';
            date = day-224;
        }else if(day<=280){
            month = 'Aryth';
            date = day-252;
        }else if(day<=308){
            month = 'Vult';
            date = day-280;
        }else{
            month = 'Zarantyr';
            date = 1;
        }
        
        var array=month+','+String(date);
        return array;
    },
    
    getTalDate = function(options){
        var day = Number(options);
        var date;
        var month;
        
        if(day>0 && day<=29){
            month="Horisal"; 
            date=day;
        }else if(day>29 && day<=59){
            month="Misuthar"; 
            date=day-29;
        }else if(day>59 && day<=89){
            month="Dualahei"; 
            date=day-59;
        }else if(day>89 && day<=120){
            month="Thunsheer";
            date=day-89;
        }else if(day>120 && day<=148){
            month="Unndilar";
            date=day-120;
        }else if(day>148 && day<=179){
            month="Brusendar";
            date=day-148;
        }else if(day>179 && day<=211){
            month="Sydenstar";
            date=day-179;
        }else if(day>211 && day<=240){
            month="Fessuran";
            date=day-211;
        }else if(day>240 && day<=267){
            month="Quen\'pillar";
            date=day-240;
        }else if(day>267 && day<=296){
            month="Cuersaar";
            date=day-267;
        }else if(day>296 && day<=328){
            month="Duscar"
            date=day-296;
        }else{
            month="Horisal";
            date='1';
        }
            
        var array=month+','+String(date);
        return array;    
    },
    
    getFaerunOrdinal = function(options){
        var args = options.content.split(",");
        var date = args[1];
        var month = args[2];
        var ordinal = state.Calendar.now.ordinal;
        
        if(date == 'festival'){
            date = 1;
        }else{
            date = Number(args[1]);
        }
        
        switch(month) {
            case 'Hammer':
                ordinal = date;
                break;
            case 'Midwinter':
                ordinal = 31;
                break;
            case 'Alturiak':
                ordinal = 31+date;
                break;
            case 'Ches':
                ordinal = 61+date;
                break;
            case 'Tarsakh':
                ordinal = 91+date;
                break;
            case 'Greengrass':
                ordinal = 122;
                break;
            case 'Mirtul':
                ordinal = 122+date;
                break;
            case 'Kythorn':
                ordinal = 152+date;
                break;
            case 'Flamerule':
                ordinal = 182+date;
                break;
            case 'Midsummer':
                ordinal = 213;
                break;
            case 'Sheildmeet':
                ordinal = 214;
                break;
            case 'Eleasias':
                ordinal = 214+date;
                break;
            case 'Eleint':
                ordinal = 244+date;
                break;
            case 'Highharvestide':
                ordinal = 275;
                break;
            case 'Marpenoth':
                ordinal = 275+date;
                break;
            case 'Uktar':
                ordinal = 305+date;
                break;
            case 'Feast of the Moon':
                ordinal = 335+date;
                break;
            case 'Nightal':
                ordinal = 336+date;
                break;
            }
        state.Calendar.now.ordinal = ordinal;
    },
    
    getGreyhawkOrdinal = function(options){
        var args = options.content.split(",");
        var date = args[1];
        var month = args[2];
        var ordinal = state.Calendar.now.ordinal;
        
        if(date == 'festival'){
            date = 1;
        }else{
            date = Number(args[1]);
        }
        
        switch(month) {
            case 'Needfest':
                ordinal = date;
                break;
            case 'Fire Seek':
                ordinal = 7+date;
                break;
            case 'Readying':
                ordinal = 35+date;
                break;
            case 'Coldeven':
                ordinal = 63+date;
                break;
            case 'Growfest':
                ordinal = 91+date;
                break;
            case 'Planting':
                ordinal = 98+date;
                break;
            case 'Flocktime':
                ordinal = 126+date;
                break;
            case 'Wealsun':
                ordinal = 154+date;
                break;
            case 'Richfest': 
                ordinal = 182+date;
                break;
            case 'Reaping':
                ordinal = 189+date;
                break;
            case 'Goodmonth':
                ordinal = 217+date;
                break;
            case 'Harvester':
                ordinal = 245+date;
                break;
            case 'Brewfest':
                ordinal = 273+date;
                break;
            case 'Patchwall':
                ordinal = 280+date;
                break;
            case 'Ready\'reat':
                ordinal = 308+date;
                break;
            case 'Sunsebb':
                ordinal = 336+date;
                break;
            }
        state.Calendar.now.ordinal = ordinal;
    },
    
    getModernOrdinal = function(options){
        var args = options.content.split(",");
        var date = Number(args[1]);
        var month = args[2];
        var ordinal = state.Calendar.now.ordinal;
        
        switch(month) {
            case 'Janvier':
                ordinal = date;
                break;
            case 'Fevrier':
                ordinal = 31+date;
                break;
            case 'Mars':
                ordinal = 60+date;
                break;
            case 'Avril':
                ordinal = 91+date;
                break;
            case 'Mai':
                ordinal = 121+date;
                break;
            case 'Juin':
                ordinal = 152+date;
                break;
            case 'Juillet':
                ordinal = 182+date;
                break;
            case 'Aout':
                ordinal = 213+date;
                break;
            case 'Septembre':
                ordinal = 244+date;
                break;
            case 'Octobre':
                ordinal = 274+date;
                break;
            case 'Novembre':
                ordinal = 305+date;
                break;
            case 'Décembre':
                ordinal = 366+date;
                break;
            }
        state.Calendar.now.ordinal = ordinal;
    },
    
    getEberronOrdinal = function(options){
        var args = options.content.split(",");
        var date = Number(args[1]);
        var month = args[2];
        var ordinal = state.Calendar.now.ordinal;
        
        switch(month) {
            case 'Zarantyr':
                ordinal = date;
                break;
            case 'Olarune':
                ordinal = 28+date;
                break;
            case 'Therendor':
                ordinal = 56+date;
                break;
            case 'Eyre':
                ordinal = 84+date;
                break;
            case 'Dravago':
                ordinal = 112+date;
                break;
            case 'Nymm':
                ordinal = 140+date;
                break;
            case 'Lharvion':
                ordinal = 168+date;
                break;
            case 'Barrakas':
                ordinal = 196+date;
                break;
            case 'Rhaan':
                ordinal = 224+date;
                break;
            case 'Sypheros':
                ordinal = 252+date;
                break;
            case 'Aryth':
                ordinal = 280+date;
                break;
            case 'Vult':
                ordinal = 308+date;
                break;
            }
        state.Calendar.now.ordinal = ordinal;
    },
    
    getTalOrdinal = function(options){
        var args = options.content.split(",");
        var date = Number(args[1]);
        var month = args[2];
        var ordinal = state.Calendar.now.ordinal;
        
        switch(month) {
            case 'Horisal':
                ordinal = date;
                break;
            case 'Misuthar':
                ordinal = 29+date;
                break;
            case 'Dualahei':
                ordinal = 59+date;
                break;
            case 'Thunsheer':
                ordinal = 89+date;
                break;
            case 'Unndilar':
                ordinal = 120+date;
                break;
            case 'Brussendar':
                ordinal = 148+date;
                break;
            case 'Sydenstar':
                ordinal = 179+date;
                break;
            case 'Fessuran':
                ordinal = 211+date;
                break;
            case 'Quen\'pillar':
                ordinal = 240+date;
                break;
            case 'Cuersaar':
                ordinal = 267+date;
                break;
            case 'Duscar':
                ordinal = 296+date;
                break;
            }
        state.Calendar.now.ordinal = ordinal;
    },
    
    addday = function(no){
        var leap = checkLeap();
        var days = Number(no);
        var ordinal = Number(state.Calendar.now.ordinal);
        var world = Number(state.Calendar.now.world);
        var div = state.Calendar.now.divider;
        
        if(div!=0){
            state.Calendar.now.down = Number(state.Calendar.now.down)+days;
        }
        
        var newordinal = ordinal+days;
        
        switch(world){
            case 1:
                if(leap==0 && ordinal <= 214 && newordinal >= 214){
                    state.Calendar.now.ordinal = newordinal+1;
                }else{
                    state.Calendar.now.ordinal = newordinal;
                }
                
                if(newordinal>366){
                    state.Calendar.now.ordinal=newordinal-366;
                    state.Calendar.now.year = Number(state.Calendar.now.year)+1;
                }
                break;
            case 2:
                if(newordinal>364){
                    state.Calendar.now.ordinal=newordinal-364;
                    state.Calendar.now.year = Number(state.Calendar.now.year)+1;
                }else{
                    state.Calendar.now.ordinal = newordinal;
                }
                break;
            case 3:
                if(leap==0 && ordinal <= 60 && newordinal >= 60){
                    state.Calendar.now.ordinal = newordinal+1;
                }else{
                    state.Calendar.now.ordinal = newordinal;
                }
                
                if(newordinal>366){
                    state.Calendar.now.ordinal=newordinal-366;
                    state.Calendar.now.year = Number(state.Calendar.now.year)+1;
                }
            case 4:
                if(newordinal>336){
                    state.Calendar.now.ordinal=newordinal-336;
                    state.Calendar.now.year = Number(state.Calendar.now.year)+1;
                }else{
                    state.Calendar.now.ordinal = newordinal;
                }
                break;
            case 5:
                if(newordinal>328){
                    state.Calendar.now.ordinal=newordinal-328;
                    state.Calendar.now.year = Number(state.Calendar.now.year)+1;
                }else{
                    state.Calendar.now.ordinal = newordinal;
                }
                break;
        }
    },
    
    addtime = function(addhours,addminutes){
        if (state.Calendar.now.timetype === "OFF" || state.Calendar.now.timetype === "General"){
            sendChat("Calendar","/w gm You must select the 24 hour clock to use the advance time function.");
            return;
        }
        
        var timecheck = state.Calendar.now.time;
        var currtime = state.Calendar.now.time.split(":");
        var hour = currtime[0];
        var minute = currtime[1];
        
        var newminute = Number(minute) + Number(addminutes);
        var minhour = 0;
        
        while (newminute > 60) {
            
            newminute = newminute - 60;
            minhour ++;
            
        }
        
        if (newminute < 10) {
            newminute = '0' + newminute;
        }
        
        var newhour = Number(hour) + Number(addhours) + minhour;
        var day = 0;
        
        while (newhour > 24) {
            
            newhour = newhour - 24;
            day ++;
            
        }
        
        if (newhour < 10) {
            newhour = '0' + newhour;
        }
        
        if (day > 0) {
            addday(day);
            weather();
        }
        
        state.Calendar.now.time = newhour + ":" + newminute;
    },
    
    
    getsuffix = function(day) {
        
        var date = day;
        var suffix;
        
        if (date == 'festival'){
            suffix = '';
        }else if (date == 1 || date == 21 ){
            suffix = 'st';
        }else if (date == 2 || date == 22){
            suffix = 'nd';
        }else if (date == 3 || date == 23){
            suffix = 'rd';
        }else{
            suffix = 'th';
        }
        
        return suffix;
    },
    
    weather = function() {
        var roll;
        var temperature;
        var wind;
        var precipitation;
        var season;
        var ordinal = state.Calendar.now.ordinal;
        
        if(ordinal > 349 || ordinal <= 75){
            season = 'Winter'
        }else if(ordinal <= 166){
            season = 'Spring'
        }else if(ordinal <=257 ){
            season = 'Summer'
        }else if(ordinal <=349 ){
            season = 'Fall'
        }
        
        roll = Math.floor(Math.random()*(20-1+1)+1);
        if(roll>=15 && roll<=17){
            switch(season) {
                case 'Winter':
                    temperature = 'C\'est une journée d\'hiver glaciale. ';
                    break;
                case 'Spring':
                    temperature = 'C\'est une froide journée de printemps. ';
                    break;
                case 'Summer':
                    temperature = 'C\'est une fraîche journée d\'été. ';
                    break;
                case 'Fall':
                    temperature = 'C\'est une froide journée d\'automne. ';
                    break;
            }
        }else if(roll>=18 && roll<=20){
            switch(season) {
                case 'Winter':
                    temperature = 'C\'est une chaude journée d\'hiver. ';
                    break;
                case 'Spring':
                    temperature = 'C\'est une chaude journée de printemps. ';
                    break;
                case 'Summer':
                    temperature = 'C\'est une chaude journée d\'été. ';
                    break;
                case 'Fall':
                    temperature = 'C\'est une chaude journée d\'automne. ';
                    break;
            }
        }else{
            switch(season) {
                case 'Winter':
                    temperature = 'C\'est une froide journée d\'hiver. ';
                    break;
                case 'Spring':
                    temperature = 'C\'est une douce journée de printemps. ';
                    break;
                case 'Summer':
                    temperature = 'C\'est une chaude journée d\'été. ';
                    break;
                case 'Fall':
                    temperature = 'C\'est une douce journée d\'automne. ';
                    break;
            }
            
        }
        
        roll = Math.floor(Math.random()*(20-1+1)+1);
        if(roll>=15 && roll<=17){
            wind='Il y a une légère brise et ';
        }else if(roll>=18 && roll<=20){
            wind='Il y a un vent hurlant et ';
        }else{
            wind='L\'air est calme et ';
        }
        
        roll = Math.floor(Math.random()*(20-1+1)+1);
        if(roll>=15 && roll<=17){
            precipitation="Pluie légère ou neige.";
            if(season=='Winter'){
                precipitation = 'la neige tombe doucement sur le sol.';
            }else{
                precipitation = 'une pluie légère tombe du ciel.';
            }
        }else if(roll>=18 && roll<=20){
            if(season=='Winter'){
                precipitation = 'la neige tombe épaisse et rapide du ciel.';
            }else{
                precipitation = 'une pluie torrentielle commence à tomber.';
            }
        }else{
            roll = randomInteger(2);
            if(roll==1){
                precipitation = 'le ciel est couvert.';
            }else{
                precipitation = 'le ciel est clair.';
            }
        }
        
        var forecast=temperature+wind+precipitation;
        state.Calendar.now.weather = forecast;
    },
    
    getFaerunMoon = function() {
        var year = state.Calendar.now.year;
        var ordinal = state.Calendar.now.ordinal;
        var array;
        var moon;
        
        var remainder = year/4 - Math.floor(year/4);
        if(remainder==0.25) {
            array='array2';
        }else if (remainder==0.5) {
            array='array3';
        }else if (remainder==0.75) {
            array='array4';
        }else if (remainder==0) {
            array='array1';
        }
        
        var moonArray = getFaerunArray(array);
        
        var moonNO = moonArray.split(",");
        var moonImg = moonNO[ordinal];
        var countStatement = '';
        
        var full = moonNO[ordinal];
        var counter = 0;
        
        var nextDay = Number(ordinal)+1;
        
        if (state.Calendar.now.mooncount == "ON") {
            
            while(full != 1){
                if (nextDay > 366){
                    nextDay-=366;
                    
                    if(array=='array1'){array='array2'};
                    if(array=='array2'){array='array3'};
                    if(array=='array3'){array='array4'};
                    if(array=='array4'){array='array1'};
                    
                    moonArray = getFaerunArray(array);
                }
                
                moonNO = moonArray.split(",");
                full = moonNO[nextDay];
                counter++;
                nextDay++;
            }
            
            countStatement = '<tr><td colspan="2" style = "border:none; padding: 5px;">Days until full moon: '+counter+'</td></tr>';
            
        }
        
        moon = '<img src="'+getMoon(moonImg)+'" style="width:30px;height:30px;"></td></tr>'+countStatement;
        
        return moon;
    },
    
    getFaerunArray = function(array) {
        
        var moonArray;
        
        switch(array) {
            case 'array1':
                moonArray = '0,1,2,2,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,12,12,13,14,14,14,15,15,16,16,16,1,2,2,3,3,4,4,5,6,6,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,16,16,1,2,2,3,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,12,12,13,14,14,15,15,15,16,16,1,2,2,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,15,16,16,1,2,2,3,3,4,4,5,6,6,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,15,16,16,1,2,2,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,16,16,1,2,2,3,3,4,4,4,5,6,6,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,14,15,15,16,16,16,1,2,2,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,12,12,13,14,14,15,15,15,16,16,1,2,2,3,3,3,4,4,5,6,6,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,16,16,1,2,2,3,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,12,12,13,14,14,15,15,15,16,16,1,2,2,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,16,16,1,2,2,2,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,12,12,13,14,14,15,15,15,16,16,1';
                break;
            case 'array2':
                moonArray = '0,2,2,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,16,16,1,2,2,3,3,3,4,4,5,6,6,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,15,16,16,1,2,2,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,12,12,13,14,14,15,15,15,16,16,1,2,2,3,3,3,4,4,5,6,6,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,14,15,15,16,16,16,1,2,2,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,12,12,13,14,14,15,15,15,16,16,1,2,2,3,3,3,4,4,5,6,6,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,16,16,1,2,2,3,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,12,12,13,14,14,14,15,15,16,16,16,0,1,2,2,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,16,16,1,2,2,3,3,3,4,4,5,6,6,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,14,15,15,16,16,16,1,2,2,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,16,16,1,2,2,3,3,3,4,4,5,6,6,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,14,15,15,16,16,16,1,2,2,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,12,12,13,14,14,15,15,15,16,16,1';
                break;
            case 'array3':
                moonArray = '0,2,2,3,3,3,4,4,5,6,6,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,16,16,1,2,2,3,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,12,12,13,14,14,15,15,15,16,16,1,2,2,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,16,16,1,2,2,3,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,12,12,13,14,14,14,15,15,16,16,16,1,2,2,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,16,16,1,2,2,3,3,3,4,4,5,6,6,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,15,16,16,1,2,2,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,12,12,13,14,14,14,15,15,16,16,16,0,1,2,2,3,3,4,4,5,6,6,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,15,16,16,1,2,2,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,12,12,13,14,14,14,15,15,16,16,16,1,2,2,3,3,4,4,5,6,6,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,16,16,1,2,2,3,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,12,12,13,14,14,14,15,15,16,16,16,1,2,2,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,16,16,1';
                break;
            case 'array4':
                moonArray = '0,2,2,3,3,3,4,4,5,6,6,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,14,15,15,16,16,16,1,2,2,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,16,16,1,2,2,3,3,3,4,4,5,6,6,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,15,16,16,1,2,2,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,12,12,13,14,14,14,15,15,16,16,16,1,2,2,3,3,4,4,5,6,6,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,16,16,1,2,2,2,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,12,12,13,14,14,15,15,15,16,16,1,2,2,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,15,16,16,0,1,2,2,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,12,12,13,14,14,15,15,15,16,16,1,2,2,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,15,16,16,1,2,2,3,3,4,4,5,6,6,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,15,16,16,1,2,2,3,3,4,4,5,6,6,7,7,7,8,8,9,10,10,11,11,12,12,13,14,14,14,15,15,16,16,16,1,2,2,3,3,4,4,5,6,6,7,7,8,8,9,10,10,11,11,11,12,12,13,14,14,15,15,15,16,16';
                break;
        }
        
        return moonArray;
        
    },
    
    getGreyhawkMoon = function() {
        var ordinal = Number(state.Calendar.now.ordinal);
        var lunaArray = '0,7,8,8,9,10,10,11,12,12,13,13,14,14,15,15,16,16,1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,10,10,11,12,12,13,13,14,14,15,15,16,16,1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,10,10,11,12,12,13,13,14,14,15,15,16,16,1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,10,10,11,12,12,13,13,14,14,15,15,16,16,1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,10,10,11,12,12,13,13,14,14,15,15,16,16,1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,10,10,11,12,12,13,13,14,14,15,15,16,16,1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,10,10,11,12,12,13,13,14,14,15,15,16,16,1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,10,10,11,12,12,13,13,14,14,15,15,16,16,1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,10,10,11,12,12,13,13,14,14,15,15,16,16,1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,10,10,11,12,12,13,13,14,14,15,15,16,16,1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,10,10,11,12,12,13,13,14,14,15,15,16,16,1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,10,10,11,12,12,13,13,14,14,15,15,16,16,1,2,2,3,4,4,5,5,6,6,7,7,8,8,9,10,10,11,12,12,13,13,14,14,15,15,16,16,1,2,2,3,4,4,5,5,6,6,7';
        var celeneArray = '0,16,16,16,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,10,10,10,10,10,10,10,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,13,14,14,14,14,14,14,14,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,10,10,10,10,10,10,10,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,13,14,14,14,14,14,14,14,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,10,10,10,10,10,10,10,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,13,14,14,14,14,14,14,14,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,4,4,4,4,4,4,4,5,6,6,6,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,10,10,10,10,10,10,10,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,13,14,14,14,14,14,14,14,15,15,15,15,15,15,15,16,16,16,16,16';
        
        var lunaNO = lunaArray.split(",");
        var lunaImg = lunaNO[ordinal];
        var Luna = getMoon(lunaImg);
        
        var celeneNO = celeneArray.split(",");
        var celeneImg = celeneNO[ordinal];
        var Celene = getMoon(celeneImg);
        
        var moon = '<img src="'+Luna+'" style="width:40px;height:40px;"><img src="'+Celene+'" style="width:30px;height:30px;"></td></tr>';
        
        return moon;
    },
    
    getMoon = function(moonNo) {
        var args  = moonNo;
        var moon;
        
        switch(args) {
            case '1':
                // moon = 'Full Moon';
                moon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Twemoji_1f315.svg/512px-Twemoji_1f315.svg.png';
                break;
            case '2':
                // moon = 'Waning Gibbous';
                moon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Twemoji_1f316.svg/512px-Twemoji_1f316.svg.png';
                break;
            case '3':
                // moon = 'Waning Gibbous';
                moon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Twemoji_1f316.svg/512px-Twemoji_1f316.svg.png';
                break;
            case '4':
                // moon = 'Waning Gibbous';
                moon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Twemoji_1f316.svg/512px-Twemoji_1f316.svg.png';
                break;
            case '5':
                // moon = 'Last Quarter';
            moon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Twemoji_1f317.svg/512px-Twemoji_1f317.svg.png';
                break;
            case '6':
                // moon = 'Waning Crescent';
            moon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Twemoji_1f318.svg/512px-Twemoji_1f318.svg.png';
                break;
            case '7':
                // moon = 'Waning Crescent';
            moon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Twemoji_1f318.svg/512px-Twemoji_1f318.svg.png';
                break;
            case '8':
                // moon = 'Waning Crescent';
            moon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Twemoji_1f318.svg/512px-Twemoji_1f318.svg.png';
                break;
            case '9':
                // moon = 'New Moon';
            moon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Twemoji_1f311.svg/512px-Twemoji_1f311.svg.png';
                break;
            case '10':
                // moon = 'Waxing Crescent';
            moon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Twemoji_1f312.svg/512px-Twemoji_1f312.svg.png';
                break;
            case '11':
                // moon = 'Waxing Crescent';
            moon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Twemoji_1f312.svg/512px-Twemoji_1f312.svg.png';
                break;
            case '12':
                // moon = 'Waxing Crescent';
            moon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Twemoji_1f312.svg/512px-Twemoji_1f312.svg.png';
                break;
            case '13':
                // moon = 'First Quarter';
                moon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Twemoji_1f313.svg/512px-Twemoji_1f313.svg.png';
                break;
            case '14':
                // moon = 'Waxing Gibbous';
            moon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Twemoji_1f314.svg/512px-Twemoji_1f314.svg.png';
                break;
            case '15':
                // moon = 'Waxing Gibbous';
            moon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Twemoji_1f314.svg/512px-Twemoji_1f314.svg.png';
                break;
            case '16':
                // moon = 'Waxing Gibbous';
            moon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Twemoji_1f314.svg/512px-Twemoji_1f314.svg.png';
                break;
        }
        
        return moon;
    },
    
    timemenu = function() {
        var timetype = state.Calendar.now.timetype;
        var timeselect = 'OFF';
        
        switch(timetype) {
            case 'General':
                timeselect = '?{Time?|Matin (Aube)|Début de matinée|Fin de matinée|Midi|Après-midi|Début d\'aprés-midi|Début de soirée|Fin de soirée|Minuit|Milieu de la nuit}';
                break;
            case '24 Hour':
                timeselect = '?{Hour|01|02|03|04|05|06|07|08|09|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24},?{Minute|00,:00|15,:15|30,:30|45,:45}';
                break;
        }
        
        return timeselect;
    },
    
    createHandout = function() {
    	var handout = createObj('handout',{
			name: handoutName
		});
        return handout;
	},

    getHandout = function() {
		var handout = filterObjs(function(o){
			return ( 'handout' === o.get('type') && handoutName === o.get('name') && false === o.get('archived'));
		})[0];
		
		if(handout) {
			return handout;
		} 
		
        return createHandout();
    },

    log = function(msg) {
        var args = msg.content.split(",");
        var text = args[2];
        var addTime = args[1];
        var handout = getHandout();
        var nowdate;
        var ordinal = state.Calendar.now.ordinal;
        
        switch(Number(state.Calendar.now.world)) {
            case 1:
                nowdate = getFaerunDate(ordinal).split(',');
                break;
            case 2:
                nowdate = getGreyhawkDate(ordinal).split(',');
                break;
            case 3:
                nowdate = getModernDate(ordinal).split(',');
                break;
            case 4:
                nowdate = getEberronDate(ordinal).split(',');
                break;
            case 5:
                nowdate = getTalDate(ordinal).split(',');
                break;
        }
        
        var month = nowdate[0];
        var day = nowdate[1];
        var suffix = getsuffix(day);
        var year = state.Calendar.now.year;
        var date = day + suffix + " " + month + ", " + year;
        
        handout.get('notes', function(nts) {
            
            if(!_.isNull(nts)){
                setTimeout(function(){
                    var newtext;
                    if (addTime === "Yes"){
                        newtext = nts + "<br>" + date + " " + state.Calendar.now.time + " - " + text;
                    } else {
                         newtext = nts + "<br>" + date + " - " + text;
                    }
                    
                    handout.set('notes', newtext);                      
                },0);
            }
            
            setTimeout(function(){},0);
        });
        
        sendChat('Calendar','/w gm A new note has been added to the Events Log handout.');
    },
    
    checkInstall = function() {
        if(typeof state.Calendar == "undefined"){
            setDefaults();
        }
        
        if ( state.Calendar.now.version != version ){
            checkDefaults();
        }
    },
    
    registerEventHandlers = function() {
        on('chat:message', handleInput);
	};

	return {
	    CheckInstall: checkInstall,
		RegisterEventHandlers: registerEventHandlers
	};
	
}());

on("ready",function(){
	'use strict';
	Calendar.CheckInstall();
	Calendar.RegisterEventHandlers();
});
