&{template:sawo} {{name=@{selected|comp_nom}}}{{perso=@{selected|character_name_court}}}







[[1D@{selected|perception_de}]]
@{selected|perception_bonus}
@{selected|secoue}
@{selected|malusblessures}
@{selected|malusblessures}
@{selected|malusfatigue}

/r (floor(({1D@{selected|perception_de}!!+@{selected|perception_bonus}-@{selected|secoue}-@{selected|malusblessures}-@{selected|malusfatigue},@{selected|joker_de}!!+@{selected|perception_bonus}-@{selected|secoue}-@{selected|malusblessures}-@{selected|malusfatigue}}kh1)/4)-1)

/r {floor(({1D@{selected|perception_de}!!+@{selected|perception_bonus}-@{selected|secoue}-@{selected|malusblessures}-@{selected|malusfatigue},@{selected|joker_de}!!+@{selected|perception_bonus}-@{selected|secoue}-@{selected|malusblessures}-@{selected|malusfatigue}}kh1)/4)-1)





FONCTIONNE 


/w gm &{template:sawo} {{etat=[[@{selected|templateetat}]]}} {{name=@{selected|text_perception}}} {{perso=@{selected|character_name_court}}} {{secoue=[[@{selected|secoue}]]}} {{relances=[[ floor(({1D@{selected|perception_de}!!+@{selected|perception_bonus}-@{selected|secoue}-@{selected|malusblessures}-@{selected|malusfatigue},@{selected|joker_de}!!+@{selected|perception_bonus}-@{selected|secoue}-@{selected|malusblessures}-@{selected|malusfatigue}}kh1)/4)-1]]}} {{blessures=[[@{selected|blessures}]]}} {{fatigue=[[@{selected|fatigue}]]}}





FONCTIONNE EN MACCRO

?{Choix de la compétence|
,|
--------- STATISTIQUES ----,
|
Persuasion,/w gm &{template:sawo&#125; {{etat=[[@{selected|templateetat}]]&#125;&#125; {{name=@{selected|text_perception}&#125;&#125; {{perso=@{selected|character_name_court}&#125;&#125; {{secoue=[[@{selected|secoue}]]&#125;&#125; {{relances=[[ floor(({1D@{selected|perception_de}!!+@{selected|perception_bonus}-@{selected|secoue}-@{selected|malusblessures}-@{selected|malusfatigue}&#44;@{selected|joker_de}!!+@{selected|perception_bonus}-@{selected|secoue}-@{selected|malusblessures}-@{selected|malusfatigue}&#125;kh1)/4)-1]]&#125;&#125; {{blessures=[[@{selected|blessures}]]&#125;&#125; {{fatigue=[[@{selected|fatigue}]]&#125;&#125;
}


FONCTIONNE EN MACCRO TYPE JET

?{Choix de la compétence|
,|
--------- ATTRIBUTS ----,
|
--------- COMPÉTENCES ----,
|
Persuasion,/w gm &{template:sawo&#125; {{etat=[[@{selected|templateetat}]]&#125;&#125; {{name=@{selected|text_perception}&#125;&#125; {{perso=@{selected|character_name_court}&#125;&#125; {{secoue=[[@{selected|secoue}]]&#125;&#125; {{jet=[[ floor(({1D@{selected|perception_de}!!&#44;@{selected|joker_de}!![@{selected|text_joker}]&#125;kh1 + @{selected|perception_bonus}[@{selected|text_bonus}] - @{selected|malusblessures}[@{selected|text_blessures}] - @{selected|malusfatigue}[@{selected|text_fatigue}] )/4)-1]]&#125;&#125; {{blessures=[[@{selected|blessures}]]&#125;&#125; {{fatigue=[[@{selected|fatigue}]]&#125;&#125;
}






FONCTIONNE EN MACCRO JET

?{Choix de la compétence|
,|
--------- ATTRIBUTS ----,
|
Agilité (1D@{selected|agilite_de} + @{selected|agilite_bonus}),
/w gm &{template:sawo&#125; {{etat=[[@{selected|templateetat}]]&#125;&#125; {{name=@{selected|text_agilite}&#125;&#125; {{perso=@{selected|character_name_court}&#125;&#125; {{secoue=[[@{selected|secoue}]]&#125;&#125; {{jet=[[{1D@{selected|agilite_de}!!&#44;@{selected|joker_de}!![@{selected|text_joker}]&#125;kh1 + @{selected|agilite_bonus}[@{selected|text_bonus}] - @{selected|malusblessures}[@{selected|text_blessures}] - @{selected|malusfatigue}[@{selected|text_fatigue}] - @{selected|encombrement}[@{selected|text_encombrement}]]]&#125;&#125; {{blessures=[[@{selected|blessures}]]&#125;&#125; {{fatigue=[[@{selected|fatigue}]]&#125;&#125; {{encombrement=[[@{selected|encombrement}]]&#125;&#125;
|
Âme (1D@{selected|ame_de} + @{selected|ame_bonus}),
/w gm &{template:sawo&#125; {{etat=[[@{selected|templateetat}]]&#125;&#125; {{name=@{selected|text_ame}&#125;&#125; {{perso=@{selected|character_name_court}&#125;&#125; {{secoue=[[@{selected|secoue}]]&#125;&#125; {{jet=[[{1D@{selected|ame_de}!!&#44;@{selected|joker_de}!![@{selected|text_joker}]&#125;kh1 + @{selected|ame_bonus}[@{selected|text_bonus}] - @{selected|malusblessures}[@{selected|text_blessures}] - @{selected|malusfatigue}[@{selected|text_fatigue}]]]&#125;&#125; {{blessures=[[@{selected|blessures}]]&#125;&#125; {{fatigue=[[@{selected|fatigue}]]&#125;&#125;
|
Force (1D@{selected|force_de} + @{selected|force_bonus}),
/w gm &{template:sawo&#125; {{etat=[[@{selected|templateetat}]]&#125;&#125; {{name=@{selected|text_force}&#125;&#125; {{perso=@{selected|character_name_court}&#125;&#125; {{secoue=[[@{selected|secoue}]]&#125;&#125; {{jet=[[{1D@{selected|force_de}!!&#44;@{selected|joker_de}!![@{selected|text_joker}]&#125;kh1 + @{selected|force_bonus}[@{selected|text_bonus}] - @{selected|malusblessures}[@{selected|text_blessures}] - @{selected|malusfatigue}[@{selected|text_fatigue}] - @{selected|encombrement}[@{selected|text_encombrement}]]]&#125;&#125; {{blessures=[[@{selected|blessures}]]&#125;&#125; {{fatigue=[[@{selected|fatigue}]]&#125;&#125; {{encombrement=[[@{selected|encombrement}]]&#125;&#125;
|
Intelligence (1D@{selected|intellect_de} + @{selected|ame_bonus}),
/w gm &{template:sawo&#125; {{etat=[[@{selected|templateetat}]]&#125;&#125; {{name=@{selected|text_intellect}&#125;&#125; {{perso=@{selected|character_name_court}&#125;&#125; {{secoue=[[@{selected|secoue}]]&#125;&#125; {{jet=[[{1D@{selected|intellect_de}!!&#44;@{selected|joker_de}!![@{selected|text_joker}]&#125;kh1 + @{selected|intellect_bonus}[@{selected|text_bonus}] - @{selected|malusblessures}[@{selected|text_blessures}] - @{selected|malusfatigue}[@{selected|text_fatigue}]]]&#125;&#125; {{blessures=[[@{selected|blessures}]]&#125;&#125; {{fatigue=[[@{selected|fatigue}]]&#125;&#125;
|
--------- COMPÉTENCES ----,
|
Persuasion (1D@{selected|perception_de} + @{selected|perception_bonus}),
/w gm &{template:sawo&#125; {{etat=[[@{selected|templateetat}]]&#125;&#125; {{name=@{selected|text_perception}&#125;&#125; {{perso=@{selected|character_name_court}&#125;&#125; {{secoue=[[@{selected|secoue}]]&#125;&#125; {{jet=[[{1D@{selected|perception_de}!!&#44;@{selected|joker_de}!![@{selected|text_joker}]&#125;kh1 + @{selected|perception_bonus}[@{selected|text_bonus}] - @{selected|malusblessures}[@{selected|text_blessures}] - @{selected|malusfatigue}[@{selected|text_fatigue}]]]&#125;&#125; {{blessures=[[@{selected|blessures}]]&#125;&#125; {{fatigue=[[@{selected|fatigue}]]&#125;&#125;
}






