on('change:courir', function() {
    getAttrs(["courir"], function(values) {
        let courir = parseInt(values["courir"]) || 0;
        
        if (courir == 1) courir_roll = "{{d1 = [[d6]]}}";
        else if (courir == 2) courir_roll = "{{d1 = [[d6]]}} {{d2 = [[d6]]}}";
        else if (courir == 3) courir_roll = "{{d1 = [[d6]]}} {{d2 = [[d6]]}} {{d3 = [[d6]]}}";
        else if (courir == 4) courir_roll = "{{d1 = [[d6]]}} {{d2 = [[d6]]}} {{d3 = [[d6]]}} {{d4 = [[d6]]}}";
        else if (courir == 5) courir_roll = "{{d1 = [[d6]]}} {{d2 = [[d6]]}} {{d3 = [[d6]]}} {{d4 = [[d6]]}} {{d5 = [[d6]]}}";
        else if (courir == 6) courir_roll = "{{d1 = [[d6]]}} {{d2 = [[d6]]}} {{d3 = [[d6]]}} {{d4 = [[d6]]}} {{d5 = [[d6]]}} {{d6 = [[d6]]}}";
        else courir_roll = "{{d1 = [[d6]]}}";

        setAttrs({
        "courir_roll" : courir_roll
        });
    });
});