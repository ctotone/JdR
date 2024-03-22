on('clicked:roll_courir', (info) => {
    startRoll("&{template:tombeau} {{title=COURIR}} {{d1=[[d6]]}} {{d2=[[d6]]}} {{d3=[[d6]]}} {{d4=[[d6]]}} {{d5=[[d6]]}} {{d6=[[d6]]}} {{d1bis=[[d6]]}} {{d2bis=[[d6]]}} {{d3bis=[[d6]]}} {{d4bis=[[d6]]}} {{d5bis=[[d6]]}} {{d6bis=[[d6]]}} {{nombre_de=[[@{courir}]]}} {{difficulte=[[?{Difficulté de l'action|2} -1]]}} {{difficulte_reel=[[?{Difficulté de l'action|2}]]}} {{reussite=[[0[resultat]]]}}", (results) => {
             
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
        let d1bis = parseInt(results.results.d1bis.dice);
        let d2bis = parseInt(results.results.d2bis.dice);
        let d3bis = parseInt(results.results.d3bis.dice);
        let d4bis = parseInt(results.results.d4bis.dice);
        let d5bis = parseInt(results.results.d5bis.dice);
        let d6bis = parseInt(results.results.d6bis.dice);
        let computed_d1bis = 0;
        let computed_d2bis = 0;
        let computed_d3bis = 0;
        let computed_d4bis = 0;
        let computed_d5bis = 0;
        let computed_d6bis = 0;
        let reussite_1bis = 0;
        let reussite_2bis = 0;
        let reussite_3bis = 0;
        let reussite_4bis = 0;
        let reussite_5bis = 0;
        let reussite_6bis = 0;

            if (d1 > 3) reussite_1 = 1, computed_d1 = d1;
            if (d2 > 3 && nombre_de >= 2) reussite_2 = 1, computed_d2 = d2;
            if (d3 > 3 && nombre_de >= 3) reussite_3 = 1, computed_d3 = d3;
            if (d4 > 3 && nombre_de >= 4) reussite_4 = 1, computed_d4 = d4;
            if (d5 > 3 && nombre_de >= 5) reussite_5 = 1, computed_d5 = d5;
            if (d6 > 3 && nombre_de >= 6) reussite_6 = 1, computed_d6 = d6; 

            console.log("d1");  
            console.log("d1bis");  
            console.log("computed_d1bis"); 
            console.log("reussite_1bis");             
            if (d1 > 5) computed_d1bis = d1bis;
            if (computed_d1bis > 4) reussite_1bis = 1;
            if (d2 > 5) computed_d2bis = d2bis;
            if (computed_d2bis > 4) reussite_2bis = 1;
            if (d3 > 5) computed_d3bis = d3bis;
            if (computed_d3bis > 4) reussite_3bis = 1;
            if (d4 > 5) computed_d4bis = d4bis;
            if (computed_d4bis > 4) reussite_4bis = 1;
            if (d5 > 5) computed_d5bis = d5bis;
            if (computed_d5bis > 4) reussite_5bis = 1;
            if (d6 > 5) computed_d6bis = d6bis;
            if (computed_d6bis > 4) reussite_6bis = 1;




        let reussite_totale = reussite_1 + reussite_2 + reussite_3 + reussite_4 + reussite_5 + reussite_6 + reussite_1bis + reussite_2bis + reussite_3bis + reussite_4bis + reussite_5bis + reussite_6bis;
            finishRoll(
                results.rollId,
                {
                    d1: computed_d1,
                    d2: computed_d2,
                    d3: computed_d3,
                    d4: computed_d4,
                    d5: computed_d5,
                    d6: computed_d6,
                    d1bis: computed_d1bis,
                    d2bis: computed_d2bis,
                    d3bis: computed_d3bis,
                    d4bis: computed_d4bis,
                    d5bis: computed_d5bis,
                    d6bis: computed_d6bis,
                    reussite: reussite_totale
                }
         );
    });
});