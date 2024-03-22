on('clicked:relancer_de', (info) => {
    startRoll("&{template:relance} {{relancer=oui}} {{title=RELANCE}} {{d1=[[d6]]}} {{d1bis=[[d6 (Relance du dé)]]}} {{relance=[[0[resultat]]]}}", (results) => {
             
        let d1 = parseInt(results.results.d1.dice);
        let reussite_1 = 0;
        let d1bis = parseInt(results.results.d1bis.dice);
        let computed_d1bis = 0;
        let reussite_1bis = 0;
        let computed_relance = 0;
        let relance = 0;

            if (d1 > 3) reussite_1 = 1, computed_d1 = d1;
            
                       
            if (reussite_1 > 1) computed_d1bis = d1bis, computed_relance = 1;

            finishRoll(
                results.rollId,
                {
                    d1: computed_d1,
                    d1bis: computed_d1bis,
                    relance: computed_relance

                }
         );
         
                
         console.log(d1);
         console.log(d1bis);
         console.log(relance);
         console.log(computed_relance);
    });
});