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
