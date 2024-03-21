on('clicked:roll_courir', (info) => {
    startRoll("&{template:tombeau} {{title=COURIR}} {{d1=[[d6]]}} {{d2=[[d6]]}} {{d3=[[d6]]}} {{d4=[[d6]]}} {{d5=[[d6]]}} {{d6=[[d6]]}} {{nombre_de=[[@{courir}]]}} {{difficulte=[[?{Difficulté de l'action|2} -1]]}} {{difficulte_reel=[[?{Difficulté de l'action|2}]]}} {{reussite=[[0[resultat]]]}}", (results) => {
             
        let d1 = parseInt(results.results.d1.dice);
        let d2 = parseInt(results.results.d2.dice);
        let d3 = parseInt(results.results.d3.dice);
        let d4 = parseInt(results.results.d4.dice);
        let d5 = parseInt(results.results.d5.dice);
        let d6 = parseInt(results.results.d6.dice);
        let difficulte = parseInt(results.results.difficulte.result);
        let nombre_de = parseInt(results.results.nombre_de.result);
        let reussite_1 = 0;
        let reussite_2 = 0;
        let reussite_3 = 0;
        let reussite_4 = 0;
        let reussite_5 = 0;
        let reussite_6 = 0;
        let computed_d1 = 0;
        let computed_d2 = 0;
        let computed_d3 = 0;
        let computed_d4 = 0;
        let computed_d5 = 0;
        let computed_d6 = 0;

            if (d1 > 3) reussite_1 = 1, computed_d1 = d1;
            if (d2 > 3 && nombre_de >= 2) reussite_2 = 1, computed_d2 = d2;
            if (d3 > 3 && nombre_de >= 3) reussite_3 = 1, computed_d3 = d3;
            if (d4 > 3 && nombre_de >= 4) reussite_4 = 1, computed_d4 = d4;
            if (d5 > 3 && nombre_de >= 5) reussite_5 = 1, computed_d5 = d5;
            if (d6 > 3 && nombre_de >= 6) reussite_6 = 1, computed_d6 = d6; 

        let reussite_totale = reussite_1 + reussite_2 + reussite_3 + reussite_4 + reussite_5 + reussite_6;
            finishRoll(
                results.rollId,
                {
                    d1: computed_d1,
                    d2: computed_d2,
                    d3: computed_d3,
                    d4: computed_d4,
                    d5: computed_d5,
                    d6: computed_d6,
                    reussite: reussite_totale
                }
         );
    });
});

on('clicked:roll_encaisser', (info) => {
    startRoll("&{template:tombeau} {{title=ENCAISSER}} {{d1=[[d6]]}} {{d2=[[d6]]}} {{d3=[[d6]]}} {{d4=[[d6]]}} {{d5=[[d6]]}} {{d6=[[d6]]}} {{nombre_de=[[@{encaisser}]]}} {{difficulte=[[?{Difficulté de l'action|2} -1]]}} {{difficulte_reel=[[?{Difficulté de l'action|2}]]}} {{reussite=[[0[resultat]]]}}", (results) => {
             
        let d1 = parseInt(results.results.d1.dice);
        let d2 = parseInt(results.results.d2.dice);
        let d3 = parseInt(results.results.d3.dice);
        let d4 = parseInt(results.results.d4.dice);
        let d5 = parseInt(results.results.d5.dice);
        let d6 = parseInt(results.results.d6.dice);
        let difficulte = parseInt(results.results.difficulte.result);
        let nombre_de = parseInt(results.results.nombre_de.result);
        let reussite_1 = 0;
        let reussite_2 = 0;
        let reussite_3 = 0;
        let reussite_4 = 0;
        let reussite_5 = 0;
        let reussite_6 = 0;
        let computed_d1 = 0;
        let computed_d2 = 0;
        let computed_d3 = 0;
        let computed_d4 = 0;
        let computed_d5 = 0;
        let computed_d6 = 0;

            if (d1 > 3) reussite_1 = 1, computed_d1 = d1;
            if (d2 > 3 && nombre_de >= 2) reussite_2 = 1, computed_d2 = d2;
            if (d3 > 3 && nombre_de >= 3) reussite_3 = 1, computed_d3 = d3;
            if (d4 > 3 && nombre_de >= 4) reussite_4 = 1, computed_d4 = d4;
            if (d5 > 3 && nombre_de >= 5) reussite_5 = 1, computed_d5 = d5;
            if (d6 > 3 && nombre_de >= 6) reussite_6 = 1, computed_d6 = d6; 

        let reussite_totale = reussite_1 + reussite_2 + reussite_3 + reussite_4 + reussite_5 + reussite_6;
            finishRoll(
                results.rollId,
                {
                    d1: computed_d1,
                    d2: computed_d2,
                    d3: computed_d3,
                    d4: computed_d4,
                    d5: computed_d5,
                    d6: computed_d6,
                    reussite: reussite_totale
                }
         );
    });
});

on('clicked:roll_escalader', (info) => {
    startRoll("&{template:tombeau} {{title=ESCALADER}} {{d1=[[d6]]}} {{d2=[[d6]]}} {{d3=[[d6]]}} {{d4=[[d6]]}} {{d5=[[d6]]}} {{d6=[[d6]]}} {{nombre_de=[[@{escalader}]]}} {{difficulte=[[?{Difficulté de l'action|2} -1]]}} {{difficulte_reel=[[?{Difficulté de l'action|2}]]}} {{reussite=[[0[resultat]]]}}", (results) => {
             
        let d1 = parseInt(results.results.d1.dice);
        let d2 = parseInt(results.results.d2.dice);
        let d3 = parseInt(results.results.d3.dice);
        let d4 = parseInt(results.results.d4.dice);
        let d5 = parseInt(results.results.d5.dice);
        let d6 = parseInt(results.results.d6.dice);
        let difficulte = parseInt(results.results.difficulte.result);
        let nombre_de = parseInt(results.results.nombre_de.result);
        let reussite_1 = 0;
        let reussite_2 = 0;
        let reussite_3 = 0;
        let reussite_4 = 0;
        let reussite_5 = 0;
        let reussite_6 = 0;
        let computed_d1 = 0;
        let computed_d2 = 0;
        let computed_d3 = 0;
        let computed_d4 = 0;
        let computed_d5 = 0;
        let computed_d6 = 0;

            if (d1 > 3) reussite_1 = 1, computed_d1 = d1;
            if (d2 > 3 && nombre_de >= 2) reussite_2 = 1, computed_d2 = d2;
            if (d3 > 3 && nombre_de >= 3) reussite_3 = 1, computed_d3 = d3;
            if (d4 > 3 && nombre_de >= 4) reussite_4 = 1, computed_d4 = d4;
            if (d5 > 3 && nombre_de >= 5) reussite_5 = 1, computed_d5 = d5;
            if (d6 > 3 && nombre_de >= 6) reussite_6 = 1, computed_d6 = d6; 

        let reussite_totale = reussite_1 + reussite_2 + reussite_3 + reussite_4 + reussite_5 + reussite_6;
            finishRoll(
                results.rollId,
                {
                    d1: computed_d1,
                    d2: computed_d2,
                    d3: computed_d3,
                    d4: computed_d4,
                    d5: computed_d5,
                    d6: computed_d6,
                    reussite: reussite_totale
                }
         );
    });
});



on('clicked:roll_forcer', (info) => {
    startRoll("&{template:tombeau} {{title=FORCER}} {{d1=[[d6]]}} {{d2=[[d6]]}} {{d3=[[d6]]}} {{d4=[[d6]]}} {{d5=[[d6]]}} {{d6=[[d6]]}} {{nombre_de=[[@{forcer}]]}} {{difficulte=[[?{Difficulté de l'action|2} -1]]}} {{difficulte_reel=[[?{Difficulté de l'action|2}]]}} {{reussite=[[0[resultat]]]}}", (results) => {
             
        let d1 = parseInt(results.results.d1.dice);
        let d2 = parseInt(results.results.d2.dice);
        let d3 = parseInt(results.results.d3.dice);
        let d4 = parseInt(results.results.d4.dice);
        let d5 = parseInt(results.results.d5.dice);
        let d6 = parseInt(results.results.d6.dice);
        let difficulte = parseInt(results.results.difficulte.result);
        let nombre_de = parseInt(results.results.nombre_de.result);
        let reussite_1 = 0;
        let reussite_2 = 0;
        let reussite_3 = 0;
        let reussite_4 = 0;
        let reussite_5 = 0;
        let reussite_6 = 0;
        let computed_d1 = 0;
        let computed_d2 = 0;
        let computed_d3 = 0;
        let computed_d4 = 0;
        let computed_d5 = 0;
        let computed_d6 = 0;

            if (d1 > 3) reussite_1 = 1, computed_d1 = d1;
            if (d2 > 3 && nombre_de >= 2) reussite_2 = 1, computed_d2 = d2;
            if (d3 > 3 && nombre_de >= 3) reussite_3 = 1, computed_d3 = d3;
            if (d4 > 3 && nombre_de >= 4) reussite_4 = 1, computed_d4 = d4;
            if (d5 > 3 && nombre_de >= 5) reussite_5 = 1, computed_d5 = d5;
            if (d6 > 3 && nombre_de >= 6) reussite_6 = 1, computed_d6 = d6; 

        let reussite_totale = reussite_1 + reussite_2 + reussite_3 + reussite_4 + reussite_5 + reussite_6;
            finishRoll(
                results.rollId,
                {
                    d1: computed_d1,
                    d2: computed_d2,
                    d3: computed_d3,
                    d4: computed_d4,
                    d5: computed_d5,
                    d6: computed_d6,
                    reussite: reussite_totale
                }
         );
    });
});

on('clicked:roll_reagir', (info) => {
    startRoll("&{template:tombeau} {{title=RÉAGIR}} {{d1=[[d6]]}} {{d2=[[d6]]}} {{d3=[[d6]]}} {{d4=[[d6]]}} {{d5=[[d6]]}} {{d6=[[d6]]}} {{nombre_de=[[@{reagir}]]}} {{difficulte=[[?{Difficulté de l'action|2} -1]]}} {{difficulte_reel=[[?{Difficulté de l'action|2}]]}} {{reussite=[[0[resultat]]]}}", (results) => {
             
        let d1 = parseInt(results.results.d1.dice);
        let d2 = parseInt(results.results.d2.dice);
        let d3 = parseInt(results.results.d3.dice);
        let d4 = parseInt(results.results.d4.dice);
        let d5 = parseInt(results.results.d5.dice);
        let d6 = parseInt(results.results.d6.dice);
        let difficulte = parseInt(results.results.difficulte.result);
        let nombre_de = parseInt(results.results.nombre_de.result);
        let reussite_1 = 0;
        let reussite_2 = 0;
        let reussite_3 = 0;
        let reussite_4 = 0;
        let reussite_5 = 0;
        let reussite_6 = 0;
        let computed_d1 = 0;
        let computed_d2 = 0;
        let computed_d3 = 0;
        let computed_d4 = 0;
        let computed_d5 = 0;
        let computed_d6 = 0;

            if (d1 > 3) reussite_1 = 1, computed_d1 = d1;
            if (d2 > 3 && nombre_de >= 2) reussite_2 = 1, computed_d2 = d2;
            if (d3 > 3 && nombre_de >= 3) reussite_3 = 1, computed_d3 = d3;
            if (d4 > 3 && nombre_de >= 4) reussite_4 = 1, computed_d4 = d4;
            if (d5 > 3 && nombre_de >= 5) reussite_5 = 1, computed_d5 = d5;
            if (d6 > 3 && nombre_de >= 6) reussite_6 = 1, computed_d6 = d6; 

        let reussite_totale = reussite_1 + reussite_2 + reussite_3 + reussite_4 + reussite_5 + reussite_6;
            finishRoll(
                results.rollId,
                {
                    d1: computed_d1,
                    d2: computed_d2,
                    d3: computed_d3,
                    d4: computed_d4,
                    d5: computed_d5,
                    d6: computed_d6,
                    reussite: reussite_totale
                }
         );
    });
});

on('clicked:roll_remarquer', (info) => {
    startRoll("&{template:tombeau} {{title=REMARQUER}} {{d1=[[d6]]}} {{d2=[[d6]]}} {{d3=[[d6]]}} {{d4=[[d6]]}} {{d5=[[d6]]}} {{d6=[[d6]]}} {{nombre_de=[[@{remarquer}]]}} {{difficulte=[[?{Difficulté de l'action|2} -1]]}} {{difficulte_reel=[[?{Difficulté de l'action|2}]]}} {{reussite=[[0[resultat]]]}}", (results) => {
             
        let d1 = parseInt(results.results.d1.dice);
        let d2 = parseInt(results.results.d2.dice);
        let d3 = parseInt(results.results.d3.dice);
        let d4 = parseInt(results.results.d4.dice);
        let d5 = parseInt(results.results.d5.dice);
        let d6 = parseInt(results.results.d6.dice);
        let difficulte = parseInt(results.results.difficulte.result);
        let nombre_de = parseInt(results.results.nombre_de.result);
        let reussite_1 = 0;
        let reussite_2 = 0;
        let reussite_3 = 0;
        let reussite_4 = 0;
        let reussite_5 = 0;
        let reussite_6 = 0;
        let computed_d1 = 0;
        let computed_d2 = 0;
        let computed_d3 = 0;
        let computed_d4 = 0;
        let computed_d5 = 0;
        let computed_d6 = 0;

            if (d1 > 3) reussite_1 = 1, computed_d1 = d1;
            if (d2 > 3 && nombre_de >= 2) reussite_2 = 1, computed_d2 = d2;
            if (d3 > 3 && nombre_de >= 3) reussite_3 = 1, computed_d3 = d3;
            if (d4 > 3 && nombre_de >= 4) reussite_4 = 1, computed_d4 = d4;
            if (d5 > 3 && nombre_de >= 5) reussite_5 = 1, computed_d5 = d5;
            if (d6 > 3 && nombre_de >= 6) reussite_6 = 1, computed_d6 = d6; 

        let reussite_totale = reussite_1 + reussite_2 + reussite_3 + reussite_4 + reussite_5 + reussite_6;
            finishRoll(
                results.rollId,
                {
                    d1: computed_d1,
                    d2: computed_d2,
                    d3: computed_d3,
                    d4: computed_d4,
                    d5: computed_d5,
                    d6: computed_d6,
                    reussite: reussite_totale
                }
         );
    });
});

on('clicked:roll_imposer', (info) => {
    startRoll("&{template:tombeau} {{title=IMPOSER}} {{d1=[[d6]]}} {{d2=[[d6]]}} {{d3=[[d6]]}} {{d4=[[d6]]}} {{d5=[[d6]]}} {{d6=[[d6]]}} {{nombre_de=[[@{imposer}]]}} {{difficulte=[[?{Difficulté de l'action|2} -1]]}} {{difficulte_reel=[[?{Difficulté de l'action|2}]]}} {{reussite=[[0[resultat]]]}}", (results) => {
             
        let d1 = parseInt(results.results.d1.dice);
        let d2 = parseInt(results.results.d2.dice);
        let d3 = parseInt(results.results.d3.dice);
        let d4 = parseInt(results.results.d4.dice);
        let d5 = parseInt(results.results.d5.dice);
        let d6 = parseInt(results.results.d6.dice);
        let difficulte = parseInt(results.results.difficulte.result);
        let nombre_de = parseInt(results.results.nombre_de.result);
        let reussite_1 = 0;
        let reussite_2 = 0;
        let reussite_3 = 0;
        let reussite_4 = 0;
        let reussite_5 = 0;
        let reussite_6 = 0;
        let computed_d1 = 0;
        let computed_d2 = 0;
        let computed_d3 = 0;
        let computed_d4 = 0;
        let computed_d5 = 0;
        let computed_d6 = 0;

            if (d1 > 3) reussite_1 = 1, computed_d1 = d1;
            if (d2 > 3 && nombre_de >= 2) reussite_2 = 1, computed_d2 = d2;
            if (d3 > 3 && nombre_de >= 3) reussite_3 = 1, computed_d3 = d3;
            if (d4 > 3 && nombre_de >= 4) reussite_4 = 1, computed_d4 = d4;
            if (d5 > 3 && nombre_de >= 5) reussite_5 = 1, computed_d5 = d5;
            if (d6 > 3 && nombre_de >= 6) reussite_6 = 1, computed_d6 = d6; 

        let reussite_totale = reussite_1 + reussite_2 + reussite_3 + reussite_4 + reussite_5 + reussite_6;
            finishRoll(
                results.rollId,
                {
                    d1: computed_d1,
                    d2: computed_d2,
                    d3: computed_d3,
                    d4: computed_d4,
                    d5: computed_d5,
                    d6: computed_d6,
                    reussite: reussite_totale
                }
         );
    });
});

on('clicked:roll_sauter', (info) => {
    startRoll("&{template:tombeau} {{title=SAUTER}} {{d1=[[d6]]}} {{d2=[[d6]]}} {{d3=[[d6]]}} {{d4=[[d6]]}} {{d5=[[d6]]}} {{d6=[[d6]]}} {{nombre_de=[[@{sauter}]]}} {{difficulte=[[?{Difficulté de l'action|2} -1]]}} {{difficulte_reel=[[?{Difficulté de l'action|2}]]}} {{reussite=[[0[resultat]]]}}", (results) => {
             
        let d1 = parseInt(results.results.d1.dice);
        let d2 = parseInt(results.results.d2.dice);
        let d3 = parseInt(results.results.d3.dice);
        let d4 = parseInt(results.results.d4.dice);
        let d5 = parseInt(results.results.d5.dice);
        let d6 = parseInt(results.results.d6.dice);
        let difficulte = parseInt(results.results.difficulte.result);
        let nombre_de = parseInt(results.results.nombre_de.result);
        let reussite_1 = 0;
        let reussite_2 = 0;
        let reussite_3 = 0;
        let reussite_4 = 0;
        let reussite_5 = 0;
        let reussite_6 = 0;
        let computed_d1 = 0;
        let computed_d2 = 0;
        let computed_d3 = 0;
        let computed_d4 = 0;
        let computed_d5 = 0;
        let computed_d6 = 0;

            if (d1 > 3) reussite_1 = 1, computed_d1 = d1;
            if (d2 > 3 && nombre_de >= 2) reussite_2 = 1, computed_d2 = d2;
            if (d3 > 3 && nombre_de >= 3) reussite_3 = 1, computed_d3 = d3;
            if (d4 > 3 && nombre_de >= 4) reussite_4 = 1, computed_d4 = d4;
            if (d5 > 3 && nombre_de >= 5) reussite_5 = 1, computed_d5 = d5;
            if (d6 > 3 && nombre_de >= 6) reussite_6 = 1, computed_d6 = d6; 

        let reussite_totale = reussite_1 + reussite_2 + reussite_3 + reussite_4 + reussite_5 + reussite_6;
            finishRoll(
                results.rollId,
                {
                    d1: computed_d1,
                    d2: computed_d2,
                    d3: computed_d3,
                    d4: computed_d4,
                    d5: computed_d5,
                    d6: computed_d6,
                    reussite: reussite_totale
                }
         );
    });
});

on('clicked:roll_savoir_faire', (info) => {
    startRoll("&{template:tombeau} {{title=SAVOIR-FAIRE}} {{d1=[[d6]]}} {{d2=[[d6]]}} {{d3=[[d6]]}} {{d4=[[d6]]}} {{d5=[[d6]]}} {{d6=[[d6]]}} {{nombre_de=[[@{savoir_faire}]]}} {{difficulte=[[?{Difficulté de l'action|2} -1]]}} {{difficulte_reel=[[?{Difficulté de l'action|2}]]}} {{reussite=[[0[resultat]]]}}", (results) => {
             
        let d1 = parseInt(results.results.d1.dice);
        let d2 = parseInt(results.results.d2.dice);
        let d3 = parseInt(results.results.d3.dice);
        let d4 = parseInt(results.results.d4.dice);
        let d5 = parseInt(results.results.d5.dice);
        let d6 = parseInt(results.results.d6.dice);
        let difficulte = parseInt(results.results.difficulte.result);
        let nombre_de = parseInt(results.results.nombre_de.result);
        let reussite_1 = 0;
        let reussite_2 = 0;
        let reussite_3 = 0;
        let reussite_4 = 0;
        let reussite_5 = 0;
        let reussite_6 = 0;
        let computed_d1 = 0;
        let computed_d2 = 0;
        let computed_d3 = 0;
        let computed_d4 = 0;
        let computed_d5 = 0;
        let computed_d6 = 0;

            if (d1 > 3) reussite_1 = 1, computed_d1 = d1;
            if (d2 > 3 && nombre_de >= 2) reussite_2 = 1, computed_d2 = d2;
            if (d3 > 3 && nombre_de >= 3) reussite_3 = 1, computed_d3 = d3;
            if (d4 > 3 && nombre_de >= 4) reussite_4 = 1, computed_d4 = d4;
            if (d5 > 3 && nombre_de >= 5) reussite_5 = 1, computed_d5 = d5;
            if (d6 > 3 && nombre_de >= 6) reussite_6 = 1, computed_d6 = d6; 

        let reussite_totale = reussite_1 + reussite_2 + reussite_3 + reussite_4 + reussite_5 + reussite_6;
            finishRoll(
                results.rollId,
                {
                    d1: computed_d1,
                    d2: computed_d2,
                    d3: computed_d3,
                    d4: computed_d4,
                    d5: computed_d5,
                    d6: computed_d6,
                    reussite: reussite_totale
                }
         );
    });
});

on('clicked:roll_se_battre', (info) => {
    startRoll("&{template:tombeau} {{title=SE BATTRE}} {{d1=[[d6]]}} {{d2=[[d6]]}} {{d3=[[d6]]}} {{d4=[[d6]]}} {{d5=[[d6]]}} {{d6=[[d6]]}} {{nombre_de=[[@{se_battre}]]}} {{difficulte=[[?{Difficulté de l'action|2} -1]]}} {{difficulte_reel=[[?{Difficulté de l'action|2}]]}} {{reussite=[[0[resultat]]]}}", (results) => {
             
        let d1 = parseInt(results.results.d1.dice);
        let d2 = parseInt(results.results.d2.dice);
        let d3 = parseInt(results.results.d3.dice);
        let d4 = parseInt(results.results.d4.dice);
        let d5 = parseInt(results.results.d5.dice);
        let d6 = parseInt(results.results.d6.dice);
        let difficulte = parseInt(results.results.difficulte.result);
        let nombre_de = parseInt(results.results.nombre_de.result);
        let reussite_1 = 0;
        let reussite_2 = 0;
        let reussite_3 = 0;
        let reussite_4 = 0;
        let reussite_5 = 0;
        let reussite_6 = 0;
        let computed_d1 = 0;
        let computed_d2 = 0;
        let computed_d3 = 0;
        let computed_d4 = 0;
        let computed_d5 = 0;
        let computed_d6 = 0;

            if (d1 > 3) reussite_1 = 1, computed_d1 = d1;
            if (d2 > 3 && nombre_de >= 2) reussite_2 = 1, computed_d2 = d2;
            if (d3 > 3 && nombre_de >= 3) reussite_3 = 1, computed_d3 = d3;
            if (d4 > 3 && nombre_de >= 4) reussite_4 = 1, computed_d4 = d4;
            if (d5 > 3 && nombre_de >= 5) reussite_5 = 1, computed_d5 = d5;
            if (d6 > 3 && nombre_de >= 6) reussite_6 = 1, computed_d6 = d6; 

        let reussite_totale = reussite_1 + reussite_2 + reussite_3 + reussite_4 + reussite_5 + reussite_6;
            finishRoll(
                results.rollId,
                {
                    d1: computed_d1,
                    d2: computed_d2,
                    d3: computed_d3,
                    d4: computed_d4,
                    d5: computed_d5,
                    d6: computed_d6,
                    reussite: reussite_totale
                }
         );
    });
});

on('clicked:roll_se_calmer', (info) => {
    startRoll("&{template:tombeau} {{title=SE CALMER}} {{d1=[[d6]]}} {{d2=[[d6]]}} {{d3=[[d6]]}} {{d4=[[d6]]}} {{d5=[[d6]]}} {{d6=[[d6]]}} {{nombre_de=[[@{se_calmer}]]}} {{difficulte=[[?{Difficulté de l'action|2} -1]]}} {{difficulte_reel=[[?{Difficulté de l'action|2}]]}} {{reussite=[[0[resultat]]]}}", (results) => {
             
        let d1 = parseInt(results.results.d1.dice);
        let d2 = parseInt(results.results.d2.dice);
        let d3 = parseInt(results.results.d3.dice);
        let d4 = parseInt(results.results.d4.dice);
        let d5 = parseInt(results.results.d5.dice);
        let d6 = parseInt(results.results.d6.dice);
        let difficulte = parseInt(results.results.difficulte.result);
        let nombre_de = parseInt(results.results.nombre_de.result);
        let reussite_1 = 0;
        let reussite_2 = 0;
        let reussite_3 = 0;
        let reussite_4 = 0;
        let reussite_5 = 0;
        let reussite_6 = 0;
        let computed_d1 = 0;
        let computed_d2 = 0;
        let computed_d3 = 0;
        let computed_d4 = 0;
        let computed_d5 = 0;
        let computed_d6 = 0;

            if (d1 > 3) reussite_1 = 1, computed_d1 = d1;
            if (d2 > 3 && nombre_de >= 2) reussite_2 = 1, computed_d2 = d2;
            if (d3 > 3 && nombre_de >= 3) reussite_3 = 1, computed_d3 = d3;
            if (d4 > 3 && nombre_de >= 4) reussite_4 = 1, computed_d4 = d4;
            if (d5 > 3 && nombre_de >= 5) reussite_5 = 1, computed_d5 = d5;
            if (d6 > 3 && nombre_de >= 6) reussite_6 = 1, computed_d6 = d6; 

        let reussite_totale = reussite_1 + reussite_2 + reussite_3 + reussite_4 + reussite_5 + reussite_6;
            finishRoll(
                results.rollId,
                {
                    d1: computed_d1,
                    d2: computed_d2,
                    d3: computed_d3,
                    d4: computed_d4,
                    d5: computed_d5,
                    d6: computed_d6,
                    reussite: reussite_totale
                }
         );
    });
});

on('clicked:roll_viser', (info) => {
    startRoll("&{template:tombeau} {{title=VISER}} {{d1=[[d6]]}} {{d2=[[d6]]}} {{d3=[[d6]]}} {{d4=[[d6]]}} {{d5=[[d6]]}} {{d6=[[d6]]}} {{nombre_de=[[@{viser}]]}} {{difficulte=[[?{Difficulté de l'action|2} -1]]}} {{difficulte_reel=[[?{Difficulté de l'action|2}]]}} {{reussite=[[0[resultat]]]}}", (results) => {
             
        let d1 = parseInt(results.results.d1.dice);
        let d2 = parseInt(results.results.d2.dice);
        let d3 = parseInt(results.results.d3.dice);
        let d4 = parseInt(results.results.d4.dice);
        let d5 = parseInt(results.results.d5.dice);
        let d6 = parseInt(results.results.d6.dice);
        let difficulte = parseInt(results.results.difficulte.result);
        let nombre_de = parseInt(results.results.nombre_de.result);
        let reussite_1 = 0;
        let reussite_2 = 0;
        let reussite_3 = 0;
        let reussite_4 = 0;
        let reussite_5 = 0;
        let reussite_6 = 0;
        let computed_d1 = 0;
        let computed_d2 = 0;
        let computed_d3 = 0;
        let computed_d4 = 0;
        let computed_d5 = 0;
        let computed_d6 = 0;

            if (d1 > 3) reussite_1 = 1, computed_d1 = d1;
            if (d2 > 3 && nombre_de >= 2) reussite_2 = 1, computed_d2 = d2;
            if (d3 > 3 && nombre_de >= 3) reussite_3 = 1, computed_d3 = d3;
            if (d4 > 3 && nombre_de >= 4) reussite_4 = 1, computed_d4 = d4;
            if (d5 > 3 && nombre_de >= 5) reussite_5 = 1, computed_d5 = d5;
            if (d6 > 3 && nombre_de >= 6) reussite_6 = 1, computed_d6 = d6; 

        let reussite_totale = reussite_1 + reussite_2 + reussite_3 + reussite_4 + reussite_5 + reussite_6;
            finishRoll(
                results.rollId,
                {
                    d1: computed_d1,
                    d2: computed_d2,
                    d3: computed_d3,
                    d4: computed_d4,
                    d5: computed_d5,
                    d6: computed_d6,
                    reussite: reussite_totale
                }
         );
    });
});