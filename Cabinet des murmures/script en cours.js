on("change:esprit_spell_1_1 change:esprit_spell_1_2 change:esprit_spell_1_3 change:esprit_spell_1_4 change:esprit_spell_1_5 change:esprit_spell_1_6 change:esprit_spell_1_7 change:esprit_spell_1_8 change:esprit_spell_1_9 change:esprit_spell_1_10 change:esprit_spell_1_11 change:esprit_spell_1_12 ", function() {
    getAttrs(["esprit_spell_1_1", "esprit_spell_1_2", "esprit_spell_1_3", "esprit_spell_1_4", "esprit_spell_1_5", "esprit_spell_1_6", "esprit_spell_1_7", "esprit_spell_1_8", "esprit_spell_1_9", "esprit_spell_1_10", "esprit_spell_1_11", "esprit_spell_1_12"], function(values) {
         let esprit_spell_1_1 = parseInt(values["esprit_spell_1_1"]) || 0;
            if (esprit_spell_1_1 == 0 ) outil_pouvoir_lvl_1_1 = "0";
            else outil_pouvoir_lvl_1_1 = "1";

        let esprit_spell_1_2 = parseInt(values["esprit_spell_1_2"]) || 0;
            if (esprit_spell_1_2 == 0 ) outil_pouvoir_lvl_1_2 = "0";
            else outil_pouvoir_lvl_1_2 = "1";

        let esprit_spell_1_3 = parseInt(values["esprit_spell_1_3"]) || 0;
            if (esprit_spell_1_3 == 0 ) outil_pouvoir_lvl_1_3 = "0";
            else outil_pouvoir_lvl_1_3 = "1";

        let esprit_spell_1_4 = parseInt(values["esprit_spell_1_4"]) || 0;
            if (esprit_spell_1_4 == 0 ) outil_pouvoir_lvl_1_4 = "0";
            else outil_pouvoir_lvl_1_4 = "1";

        let esprit_spell_1_5 = parseInt(values["esprit_spell_1_5"]) || 0;
            if (esprit_spell_1_5 == 0 ) outil_pouvoir_lvl_1_5 = "0";
            else outil_pouvoir_lvl_1_5 = "1";

        let esprit_spell_1_6 = parseInt(values["esprit_spell_1_6"]) || 0;
            if (esprit_spell_1_6 == 0 ) outil_pouvoir_lvl_1_6 = "0";
            else outil_pouvoir_lvl_1_6 = "1";

        let esprit_spell_1_7 = parseInt(values["esprit_spell_1_7"]) || 0;
            if (esprit_spell_1_7 == 0 ) outil_pouvoir_lvl_1_7 = "0";
            else outil_pouvoir_lvl_1_7 = "1";

        let esprit_spell_1_8 = parseInt(values["esprit_spell_1_8"]) || 0;
            if (esprit_spell_1_8 == 0 ) outil_pouvoir_lvl_1_8 = "0";
            else outil_pouvoir_lvl_1_8 = "1";

        let esprit_spell_1_9 = parseInt(values["esprit_spell_1_9"]) || 0;
            if (esprit_spell_1_9 == 0 ) outil_pouvoir_lvl_1_9 = "0";
            else outil_pouvoir_lvl_1_9 = "1";

        let esprit_spell_1_10 = parseInt(values["esprit_spell_1_10"]) || 0;
            if (esprit_spell_1_10 == 0 ) outil_pouvoir_lvl_1_10 = "0";
            else outil_pouvoir_lvl_1_10 = "1";

        let esprit_spell_1_11 = parseInt(values["esprit_spell_1_11"]) || 0;
            if (esprit_spell_1_11 == 0 ) outil_pouvoir_lvl_1_11 = "0";
            else outil_pouvoir_lvl_1_11 = "1";

        let esprit_spell_1_12 = parseInt(values["esprit_spell_1_12"]) || 0;
            if (esprit_spell_1_12 == 0 ) outil_pouvoir_lvl_1_12 = "0";
            else outil_pouvoir_lvl_1_12 = "1";
			
			setAttrs({
            "outil_pouvoir_lvl_1_1-1": outil_pouvoir_lvl_1_1,
            "outil_pouvoir_lvl_1_1-2": outil_pouvoir_lvl_1_2,
            "outil_pouvoir_lvl_1_2-1": outil_pouvoir_lvl_1_3,
            "outil_pouvoir_lvl_1_2-2": outil_pouvoir_lvl_1_4,
            "outil_pouvoir_lvl_1_3-1": outil_pouvoir_lvl_1_5,
            "outil_pouvoir_lvl_1_3-2": outil_pouvoir_lvl_1_6,
            "outil_pouvoir_lvl_1_4-1": outil_pouvoir_lvl_1_7,
            "outil_pouvoir_lvl_1_4-2": outil_pouvoir_lvl_1_8,
            "outil_pouvoir_lvl_1_5-1": outil_pouvoir_lvl_1_9,
            "outil_pouvoir_lvl_1_5-2": outil_pouvoir_lvl_1_10,
            "outil_pouvoir_lvl_1_6-1": outil_pouvoir_lvl_1_11,
            "outil_pouvoir_lvl_1_6-2": outil_pouvoir_lvl_1_12
        });
    });
});