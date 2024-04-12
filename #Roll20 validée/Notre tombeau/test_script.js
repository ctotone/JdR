on('clicked:roll_armes_1', (info) => {
    startRoll("&{template:tombeau} {{armes=oui}} {{title=@{arme_1}}}{{d1=[[d6]]}} {{d2=[[d6]]}} {{d3=[[d6]]}} {{d4=[[d6]]}} {{d1bis=[[d6 (Relance du D1)]]}} {{d2bis=[[d6 (Relance du D2)]]}} {{d3bis=[[d6 (Relance du D3)]]}} {{d4bis=[[d6 (Relance du D4)]]}} {{d1ter=[[d6 (Relance du D1)]]}} {{d2ter=[[d6 (Relance du D2)]]}} {{d3ter=[[d6 (Relance du D3)]]}} {{d4ter=[[d6 (Relance du D4)]]}} {{nombre_de=[[@{dgt_arme_1}]]}} {{relance=[[0[resultat]]]}}", (results) => {
             
        let d1 = parseInt(results.results.d1.dice);
        let d2 = parseInt(results.results.d2.dice);
        let d3 = parseInt(results.results.d3.dice);
        let d4 = parseInt(results.results.d4.dice);
        let nombre_de = parseInt(results.results.nombre_de.result);
        let reussite_1 = 0;
        let reussite_2 = 0;
        let reussite_3 = 0;
        let reussite_4 = 0;
        let computed_d1 = 0;
        let computed_d2 = 0;
        let computed_d3 = 0;
        let computed_d4 = 0;
        let d1bis = parseInt(results.results.d1bis.dice);
        let d2bis = parseInt(results.results.d2bis.dice);
        let d3bis = parseInt(results.results.d3bis.dice);
        let d4bis = parseInt(results.results.d4bis.dice);
        let reussite_1bis = 0;
        let reussite_2bis = 0;
        let reussite_3bis = 0;
        let reussite_4bis = 0;
        let computed_d1bis = 0;
        let computed_d2bis = 0;
        let computed_d3bis = 0;
        let computed_d4bis = 0;
        let d1ter = parseInt(results.results.d1ter.dice);
        let d2ter = parseInt(results.results.d2ter.dice);
        let d3ter = parseInt(results.results.d3ter.dice);
        let d4ter = parseInt(results.results.d4ter.dice);
        let reussite_1ter = 0;
        let reussite_2ter = 0;
        let reussite_3ter = 0;
        let reussite_4ter = 0;
        let computed_d1ter = 0;
        let computed_d2ter = 0;
        let computed_d3ter = 0;
        let computed_d4ter = 0;
        let d1quat = parseInt(results.results.d1quat.dice);
        let d2quat = parseInt(results.results.d2quat.dice);
        let d3quat = parseInt(results.results.d3quat.dice);
        let d4quat = parseInt(results.results.d4quat.dice);
        let reussite_1quat = 0;
        let reussite_2quat = 0;
        let reussite_3quat = 0;
        let reussite_4quat = 0;
        let computed_d1quat = 0;
        let computed_d2quat = 0;
        let computed_d3quat = 0;
        let computed_d4quat = 0;
        let computed_relance = 0;
        let relance = 0;

            if (d1 > 3) reussite_1 = 1, computed_d1 = d1;
            if (d2 > 3 && nombre_de >= 2) reussite_2 = 1, computed_d2 = d2;
            if (d3 > 3 && nombre_de >= 3) reussite_3 = 1, computed_d3 = d3;
            if (d4 > 3 && nombre_de >= 4) reussite_4 = 1, computed_d4 = d4;

            
            if (d1 > 5) computed_d1bis = d1bis, computed_relance = 1;
            if (d1 > 5 && computed_d1bis > 3) reussite_1bis = 1;
            if (d2 > 5 && nombre_de >= 2) computed_d2bis = d2bis, computed_relance = 1;
            if (d2 > 5 && computed_d2bis > 3 && nombre_de >= 2) reussite_2bis = 1;
            if (d3 > 5 && nombre_de >= 3) computed_d3bis = d3bis, computed_relance = 1;
            if (d4 > 5 && computed_d3bis > 3 && nombre_de >= 3) reussite_3bis = 1;
            if (d4 > 5 && nombre_de >= 4) computed_d4bis = d4bis, computed_relance = 1;
            if (d4 > 5 && computed_d4bis > 3 && nombre_de >= 4) reussite_4bis = 1;

            if (d1bis > 5) computed_d1ter = d1ter, computed_relance = 1;
            if (d1bis > 5 && computed_d1ter > 3) reussite_1ter = 1;
            if (d2bis > 5 && nombre_de >= 2) computed_d2ter = d2ter, computed_relance = 1;
            if (d2bis > 5 && computed_d2ter > 3 && nombre_de >= 2) reussite_2ter = 1;
            if (d3bis > 5 && nombre_de >= 3) computed_d3ter = d3ter, computed_relance = 1;
            if (d4bis > 5 && computed_d3ter > 3 && nombre_de >= 3) reussite_3ter = 1;
            if (d4bis > 5 && nombre_de >= 4) computed_d4ter = d4ter, computed_relance = 1;
            if (d4bis > 5 && computed_d4ter > 3 && nombre_de >= 4) reussite_4ter = 1;

            if (d1ter > 5) computed_d1quat = d1quat, computed_relance = 1;
            if (d1ter > 5 && computed_d1quat > 3) reussite_1quat = 1;
            if (d2ter > 5 && nombre_de >= 2) computed_d2quat = d2quat, computed_relance = 1;
            if (d2ter > 5 && computed_d2quat > 3 && nombre_de >= 2) reussite_2quat = 1;
            if (d3ter > 5 && nombre_de >= 3) computed_d3quat = d3quat, computed_relance = 1;
            if (d4ter > 5 && computed_d3quat > 3 && nombre_de >= 3) reussite_3quat = 1;
            if (d4ter > 5 && nombre_de >= 4) computed_d4quat = d4quat, computed_relance = 1;
            if (d4ter > 5 && computed_d4quat > 3 && nombre_de >= 4) reussite_4quat = 1;

        let reussite_totale = reussite_1 + reussite_2 + reussite_3 + reussite_4 + reussite_1bis + reussite_2bis + reussite_3bis + reussite_4bis + reussite_1ter + reussite_2ter + reussite_3ter + reussite_4ter + reussite_1quat + reussite_2quat + reussite_3quat + reussite_4quat;

            finishRoll(
                results.rollId,
                {
                    d1: computed_d1,
                    d2: computed_d2,
                    d3: computed_d3,
                    d4: computed_d4,
                    d1bis: computed_d1bis,
                    d2bis: computed_d2bis,
                    d3bis: computed_d3bis,
                    d4bis: computed_d4bis,
                    d1ter: computed_d1ter,
                    d2ter: computed_d2ter,
                    d3ter: computed_d3ter,
                    d4ter: computed_d4ter,
                    d1quat: computed_d1quat,
                    d2quat: computed_d2quat,
                    d3quat: computed_d3quat,
                    d4quat: computed_d4quat,
                    reussite: reussite_totale,
                    relance: computed_relance
                }
         );
    });
});