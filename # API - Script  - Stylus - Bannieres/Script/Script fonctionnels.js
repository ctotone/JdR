// Script de calcul malus total

// On defini quand le sscript s'execute
on("sheet:opened change:tete_malus change:bras_droit_malus change:bras_gauche_malus change:torse_malus change:jambe_droite_malus change:jambe_gauche_malus", function() {
	// On récupère les valeur que l'on souhaite
    getAttrs(["tete_malus", "bras_droit_malus", "bras_gauche_malus", "torse_malus", "jambe_droite_malus", "jambe_gauche_malus"], function(values) {
		// let / parseInt permet de "numeriser" les valeurs que l'on recupere et d'attribuer une variable qu'on utilise apres
         let tete_malus = parseInt(values.tete_malus) || 0;
		 let bras_droit_malus = parseInt(values.bras_droit_malus) || 0;
		 let bras_gauche_malus = parseInt(values.bras_gauche_malus) || 0;
		 let torse_malus = parseInt(values.torse_malus) || 0;
		 let jambe_droite_malus = parseInt(values.jambe_droite_malus) || 0;
		 let jambe_gauche_malus = parseInt(values.jambe_gauche_malus) || 0;
		 let malus_total = tete_malus + bras_droit_malus + bras_gauche_malus + torse_malus + jambe_droite_malus + jambe_gauche_malus;
			// On update la valeur que l'on veut apres les operation
			setAttrs({
            "malus_total": malus_total
        });
    });
});


// Script de calcul de valeur en fonction de la valeur d'une autre


on("sheet:opened change:dot_jambe_gauche", function() {
    getAttrs(["dot_jambe_gauche"], function(values) {
         let dot_jambe_gauche = parseInt(values["dot_jambe_gauche"]) || 0;
            if (dot_jambe_gauche <= 3 ) stat_mod = "0";
            else if (dot_jambe_gauche <= 4) stat_mod = "-1";
            else if (dot_jambe_gauche <= 5) stat_mod = "-2";
            else stat_mod = "0";
			
			setAttrs({
            "jambe_gauche_malus": stat_mod
        });
    });
});

// Script d'attribut en fonction d'une checkbox ou radio


const dot_jambe_gaucheValues = ["1","2","3","4","5","6","7"];
	  dot_jambe_gaucheValues.forEach(function(value) {
		on(`clicked:dot_jambe_gauche_${value}`, function() {
		  setAttrs({
			"dot_jambe_gauche": value
		  });
		});
	  });

// Script d'un boutton mettant à jour un attribut
// HTML ==> <button type="action" name="act_intro-cabinet">Médium</button>

   on('clicked:intro-cabinet', function() {

  console.log("Activate button clicked");
	getAttrs(["sheet_version"], function(values) {
		setAttrs({
			sheet_version: "cabinet",
			character_name: "Médium"
		});
	});
});

// Script avec integration du fichier de tad


on("sheet:opened change:data", function() {
    getAttrs(["data"], function(values) {
			let data = parseInt(values["data"]) || 0;
			
			if (data == '1') 	nom_pouvoir = getTranslationByKey('chant_lancinant'); 
			else 				nom_pouvoir = "";
						
			setAttrs({
			"nom_pouvoir" : nom_pouvoir
        });
    });
});


// Script pour utiliser une value dans un act_


const aptitude_Values = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    aptitude_Values.forEach(function(value) {
    on(`clicked:aptitude_${value}`, (info) => {
        startRoll("&{template:relance} {{test=oui}} {{titre=[[0[resultat]]]}} {{d1=[[d6]]}} {{relance=[[0[resultat]]]}}", (results) => {
             
            let d1 = parseInt(results.results.d1.dice);
            let d1bis = parseInt(results.results.d1bis.dice);
            let computed_d1bis = 0;
            let computed_relance = 0;
    
                if (d1 > 3) reussite_1 = 1, computed_d1 = d1;
                else reussite_1 = 0, computed_d1 = d1;
                if (d1 > 5) computed_d1bis = d1bis, computed_relance = 1;
                else computed_d1bis = d1bis, computed_relance = 0;


                finishRoll(
                    results.rollId,
                    {
                        titre: value,
                        d1: computed_d1,
                        d1bis: computed_d1bis,
                        relance: computed_relance

                    }
             );
        }); 
    });
});