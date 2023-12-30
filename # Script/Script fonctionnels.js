// Script de calcul malus total

<script type="text/worker">
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
</script>


// Script de calcul de valeur en fonction de la valeur d'une autre

<script type="text/worker">
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
</script>

// Script d'attribut en fonction d'une checkbox ou radio

<script type="text/worker">
const dot_jambe_gaucheValues = ["1","2","3","4","5","6","7"];
	  dot_jambe_gaucheValues.forEach(function(value) {
		on(`clicked:dot_jambe_gauche_${value}`, function() {
		  setAttrs({
			"dot_jambe_gauche": value
		  });
		});
	  });
</script>
