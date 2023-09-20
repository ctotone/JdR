?{Type d'arme|

Arme de mélée (@{selected|total_melee}), &{template:skill&#125; {{critroll=[[@{selected|total_melee}+10+1d10]]&#125;&#125; {{failroll=[[@{selected|total_melee}+1-1d10]]&#125;&#125; {{rollname=Arme de mélée
@{selected|character_name}&#125;&#125;  {{roll=[[@{selected|total_melee}+1d10]]&#125;&#125;
!roll20AM --audio&#44;play&#44;nomenu&#124;FX - Coup de poing
&{template:custom&#125;{{title=&#125;&#125;{{color=red&#125;&#125;{{SD = Jet d'Esquive de la cible&#125;&#125;{{desc=L'attaque de mêlée ignore la moitié de l'armure de la cible en cas de réussite&#125;&#125;{{Type arme de mêlée=  &#125;&#125;{{ Légère = [1D6](! #1D6) (CAD 2)&#125;&#125;{{Intermédiaire = [2D6](! #2D6) (CAD 2)&#125;&#125;{{Lourde = [3D6](! #3D6) (CAD 2)&#125;&#125;{{Trés lourde = [4D6](! #4D6)&#125;&#125;
&{template:custom&#125;{{title=&#125;&#125;{{color=noir&#125;&#125;{{desc=Si le jet dépasse le SD x2&#44; l'attaque touche un point faible de la cible. Les dégâts sont doublés (aprés réduction de l'armure). En cas de coup critique à la tête&#44; les dégâts sont triplés.&#125;&#125;
!power {{
--whisper&#124;GM
--format&#124;cyber
--orowbg&#124;#FFFFFF
--orowtx&#124;#000000
--erowbg&#124;#FFFFFF
--erowtx&#124;#000000
--bodyfontsize&#124;12px
--border&#124;1px solid #f00
--@{target|second|Character_name}&#124;
--PA :&#124;Corps (@{target|second|BodySP}) Tête (@{target|second|HeadSP})
--HP :&#124;@{target|second|HP}
&#125;&#125;
|

Arme lourde : Lance-grenade (@{selected|Total_HeavyArms}), 
!measure @{selected|token_id} @{target|second|token_id}
&{template:skill&#125; {{critroll=[[@{selected|Total_HeavyArms}+10+1d10]]&#125;&#125; {{failroll=[[@{selected|Total_HeavyArms}+1-1d10]]&#125;&#125; {{rollname=Arme lourde : Lance grenade
@{selected|character_name}&#125;&#125;  {{roll=[[@{selected|Total_HeavyArms}+1d10]]&#125;&#125;
!roll20AM --audio&#44;play&#44;nomenu&#124;FX - Explosion
!setattr --sel --silent --charid @{selected|character_id} --ammunition&#124;[[@{selected|ammunition}-1]]
&{template:custom&#125;{{title=&#125;&#125;{{color=red&#125;&#125;{{0 à 6m = SD 16&#125;&#125;{{7 à 12m = SD 15&#125;&#125;{{13 à 25m = SD 15&#125;&#125;{{26 à 50m = SD 17&#125;&#125;{{51 à 100m = SD 20&#125;&#125;{{101 à 200m = SD 22&#125;&#125;{{201 à 400m = SD 25&#125;&#125;{{Au dela de 400m = Impossible&#125;&#125;{{Dégâts identique pour toutes les cibles à portée= [6D6](! #6D6) &#125;&#125;{{Zone de dégâts = 10m sur 10m &#125;&#125;
&{template:custom&#125;{{title=&#125;&#125;{{color=noir&#125;&#125;{{desc=Si le jet dépasse le SD x2&#44; l'attaque touche un point faible de la cible. Les dégâts sont doublés (aprés réduction de l'armure). En cas de coup critique à la tête&#44; les dégâts sont triplés.&#125;&#125;
!power {{
--whisper&#124;GM
--format&#124;cyber
--orowbg&#124;#FFFFFF
--orowtx&#124;#000000
--erowbg&#124;#FFFFFF
--erowtx&#124;#000000
--bodyfontsize&#124;12px
--border&#124;1px solid #f00
--@{target|second|Character_name}&#124;
--PA :&#124;Corps (@{target|second|BodySP}) Tête (@{target|second|HeadSP})
--HP :&#124;@{target|second|HP}
&#125;&#125;
|

Arme lourde : Lance roquette (@{selected|Total_HeavyArms}), 
!measure @{selected|token_id} @{target|second|token_id}
&{template:skill&#125; {{critroll=[[@{selected|Total_HeavyArms}+10+1d10]]&#125;&#125; {{failroll=[[@{selected|Total_HeavyArms}+1-1d10]]&#125;&#125; {{rollname=Arme lourde : Lance roquette
@{selected|character_name}&#125;&#125;  {{roll=[[@{selected|Total_HeavyArms}+1d10]]&#125;&#125;
!roll20AM --audio&#44;play&#44;nomenu&#124;FX - Explosion
&{template:custom&#125;{{title=&#125;&#125;{{color=red&#125;&#125;{{0 à 6m = SD 17&#125;&#125;{{7 à 12m = SD 16&#125;&#125;{{13 à 25m = SD 15&#125;&#125;{{26 à 50m = SD 17&#125;&#125;{{51 à 100m = SD 20&#125;&#125;{{101 à 200m = SD 22&#125;&#125;{{201 à 400m = SD 25&#125;&#125;{{401 à 800m = SD 30&#125;&#125;{{Dégâts identique pour toutes les cibles à portée= [8D6](! #8D6) &#125;&#125;{{Zone de dégâtse = 10m sur 10m &#125;&#125;
&{template:custom&#125;{{title=&#125;&#125;{{color=noir&#125;&#125;{{desc=Si le jet dépasse le SD x2&#44; l'attaque touche un point faible de la cible. Les dégâts sont doublés (aprés réduction de l'armure). En cas de coup critique à la tête&#44; les dégâts sont triplés.&#125;&#125;
!power {{
--whisper&#124;GM
--format&#124;cyber
--orowbg&#124;#FFFFFF
--orowtx&#124;#000000
--erowbg&#124;#FFFFFF
--erowtx&#124;#000000
--bodyfontsize&#124;12px
--border&#124;1px solid #f00
--@{target|second|Character_name}&#124;
--PA :&#124;Corps (@{target|second|BodySP}) Tête (@{target|second|HeadSP})
--HP :&#124;@{target|second|HP}
&#125;&#125;
|

Art martial (@{selected|Total_Martial}), &{template:skill&#125; {{critroll=[[@{selected|Total_Martial}+10+1d10]]&#125;&#125; {{failroll=[[@{selected|Total_Martial}+1-1d10]]&#125;&#125; {{rollname=Art martial
@{selected|character_name}&#125;&#125;  {{roll=[[@{selected|Total_Martial}+1d10]]&#125;&#125;
!roll20AM --audio&#44;play&#44;nomenu&#124;FX - Coup de poing
&{template:custom&#125;{{title=&#125;&#125;{{color=red&#125;&#125;{{SD = Jet d'Esquive de la cible&#125;&#125;{{Dégâts  =  basés sur COR de l'attaquant  &#125;&#125;{{COR de @{selected|character_name} = [[@{selected|Body}]] &#125;&#125;{{4 ou moins = [1D6](! #1D6)&#125;&#125;{{5 ou 6 = [2D6](! #2D6)&#125;&#125;{{7 à 10 = [3D6](! #3D6)&#125;&#125;{{11 ou plus = [4D6](! #4D6)&#125;&#125;{{desc=Les dégâts prennent en compte l'armure de la cible.&#125;&#125;
&{template:custom&#125;{{title=&#125;&#125;{{color=noir&#125;&#125;{{desc=Si le jet dépasse le SD x2&#44; l'attaque touche un point faible de la cible. Les dégâts sont doublés (aprés réduction de l'armure). En cas de coup critique à la tête&#44; les dégâts sont triplés.&#125;&#125;
!power {{
--whisper&#124;GM
--format&#124;cyber
--orowbg&#124;#FFFFFF
--orowtx&#124;#000000
--erowbg&#124;#FFFFFF
--erowtx&#124;#000000
--bodyfontsize&#124;12px
--border&#124;1px solid #f00
--@{target|second|Character_name}&#124;
--PA :&#124;Corps (@{target|second|BodySP}) Tête (@{target|second|HeadSP})
--HP :&#124;@{target|second|HP}
&#125;&#125;
|

Fusil à pompe (@{selected|Total_ShoulderArms}), 
!measure @{selected|token_id} @{target|second|token_id}
&{template:skill&#125; {{critroll=[[@{selected|Total_ShoulderArms}+10+1d10]]&#125;&#125; {{failroll=[[@{selected|Total_ShoulderArms}+1-1d10]]&#125;&#125; {{rollname=Fusil à pompe
@{selected|character_name}&#125;&#125;  {{roll=[[@{selected|Total_ShoulderArms}+1d10]]&#125;&#125;
!roll20AM --audio&#44;play&#44;nomenu&#124;GUN-Pompe
!setattr --sel --silent --charid @{selected|character_id} --ammunition&#124;[[@{selected|ammunition}-1]]
&{template:custom&#125;{{title=&#125;&#125;{{color=red&#125;&#125;{{0 à 6m = SD 13&#125;&#125;{{7 à 12m = SD 15&#125;&#125;{{13 à 25m = SD 20&#125;&#125;{{26 à 50m = SD 25&#125;&#125;{{51 à 100m = SD 30&#125;&#125;{{101 à 200m = SD 35&#125;&#125;{{Au dela de 200m = Impossible&#125;&#125;{{Dégâts = [5D6](! #5D6) &#125;&#125;
&{template:custom&#125;{{title=&#125;&#125;{{color=noir&#125;&#125;{{desc=Si le jet dépasse le SD x2&#44; l'attaque touche un point faible de la cible. Les dégâts sont doublés (aprés réduction de l'armure). En cas de coup critique à la tête&#44; les dégâts sont triplés.&#125;&#125;
!power {{
--whisper&#124;GM
--format&#124;cyber
--orowbg&#124;#FFFFFF
--orowtx&#124;#000000
--erowbg&#124;#FFFFFF
--erowtx&#124;#000000
--bodyfontsize&#124;12px
--border&#124;1px solid #f00
--@{target|second|Character_name}&#124;
--PA :&#124;Corps (@{target|second|BodySP}) Tête (@{target|second|HeadSP})
--HP :&#124;@{target|second|HP}
&#125;&#125;
|

Fusil d'assaut (@{selected|Total_ShoulderArms}), 
!measure @{selected|token_id} @{target|second|token_id}
&{template:skill&#125; {{critroll=[[@{selected|Total_ShoulderArms}+10+1d10]]&#125;&#125; {{failroll=[[@{selected|Total_ShoulderArms}+1-1d10]]&#125;&#125; {{rollname=Fusil d'assaut
@{selected|character_name}&#125;&#125;  {{roll=[[@{selected|Total_ShoulderArms}+1d10]]&#125;&#125;
!roll20AM --audio&#44;play&#44;nomenu&#124;GUN - Assaut1
!setattr --sel --silent --charid @{selected|character_id} --ammunition&#124;[[@{selected|ammunition}-1]]
&{template:custom&#125;{{title=&#125;&#125;{{color=red&#125;&#125;{{0 à 6m = SD 17&#125;&#125;{{7 à 12m = SD 16&#125;&#125;{{13 à 25m = SD 15&#125;&#125;{{26 à 50m = SD 13&#125;&#125;{{51 à 100m = SD 15&#125;&#125;{{101 à 200m = SD 20&#125;&#125;{{201 à 400m = SD 25&#125;&#125;{{401 à 800m = SD 30&#125;&#125;{{Dégâts = [5D6](! #5D6) &#125;&#125;
&{template:custom&#125;{{title=&#125;&#125;{{color=noir&#125;&#125;{{desc=Si le jet dépasse le SD x2&#44; l'attaque touche un point faible de la cible. Les dégâts sont doublés (aprés réduction de l'armure). En cas de coup critique à la tête&#44; les dégâts sont triplés.&#125;&#125;
!power {{
--whisper&#124;GM
--format&#124;cyber
--orowbg&#124;#FFFFFF
--orowtx&#124;#000000
--erowbg&#124;#FFFFFF
--erowtx&#124;#000000
--bodyfontsize&#124;12px
--border&#124;1px solid #f00
--@{target|second|Character_name}&#124;
--PA :&#124;Corps (@{target|second|BodySP}) Tête (@{target|second|HeadSP})
--HP :&#124;@{target|second|HP}
&#125;&#125;
|

Fusil de précision (@{selected|Total_ShoulderArms}), 
!measure @{selected|token_id} @{target|second|token_id}
&{template:skill&#125; {{critroll=[[@{selected|Total_ShoulderArms}+10+1d10]]&#125;&#125; {{failroll=[[@{selected|Total_ShoulderArms}+1-1d10]]&#125;&#125; {{rollname=Fusil de précision
@{selected|character_name}&#125;&#125;  {{roll=[[@{selected|Total_ShoulderArms}+1d10]]&#125;&#125;
!roll20AM --audio&#44;play&#44;nomenu&#124;GUN - Sniper
!setattr --sel --silent --charid @{selected|character_id} --ammunition&#124;[[@{selected|ammunition}-1]]
&{template:custom&#125;{{title=&#125;&#125;{{color=red&#125;&#125;{{0 à 6m = SD 30&#125;&#125;{{7 à 12m = SD 25&#125;&#125;{{13 à 25m = SD 25&#125;&#125;{{26 à 50m = SD 20&#125;&#125;{{51 à 100m = SD 15&#125;&#125;{{101 à 200m = SD 16&#125;&#125;{{201 à 400m = SD 17&#125;&#125;{{401 à 800m = SD 20&#125;&#125;{{Dégâts = [5D6](! #5D6) &#125;&#125;
&{template:custom&#125;{{title=&#125;&#125;{{color=noir&#125;&#125;{{desc=Si le jet dépasse le SD x2&#44; l'attaque touche un point faible de la cible. Les dégâts sont doublés (aprés réduction de l'armure). En cas de coup critique à la tête&#44; les dégâts sont triplés.&#125;&#125;
!power {{
--whisper&#124;GM
--format&#124;cyber
--orowbg&#124;#FFFFFF
--orowtx&#124;#000000
--erowbg&#124;#FFFFFF
--erowtx&#124;#000000
--bodyfontsize&#124;12px
--border&#124;1px solid #f00
--@{target|second|Character_name}&#124;
--PA :&#124;Corps (@{target|second|BodySP}) Tête (@{target|second|HeadSP})
--HP :&#124;@{target|second|HP}
&#125;&#125;
|

Lancer un objet (@{selected|Total_Athletics}), 
!measure @{selected|token_id} @{target|second|token_id}
&{template:skill&#125; {{critroll=[[@{selected|Total_Athletics}+10+1d10]]&#125;&#125; {{failroll=[[@{selected|Total_Athletics}+1-1d10]]&#125;&#125; {{rollname=Lancer un objet
@{selected|character_name}&#125;&#125;  {{roll=[[@{selected|Total_Athletics}+1d10]]&#125;&#125;
!roll20AM --audio&#44;play&#44;nomenu&#124;FX - Explosion
!setattr --sel --silent --charid @{selected|character_id} --ammunition&#124;[[@{selected|ammunition}-1]]
&{template:custom&#125;{{title=&#125;&#125;{{color=red&#125;&#125;{{0 à 6m = SD 15&#125;&#125;{{7 à 12m = SD 17&#125;&#125;{{13 à 25m = SD 20&#125;&#125;{{26 à 35m = SD 25&#125;&#125;{{Au dela de 35m = Impossible&#125;&#125;
&{template:custom&#125;{{title=&#125;&#125;{{color=noir&#125;&#125;{{desc=Si le jet dépasse le SD x2&#44; l'attaque touche un point faible de la cible. Les dégâts sont doublés (aprés réduction de l'armure). En cas de coup critique à la tête&#44; les dégâts sont triplés.&#125;&#125;
!power {{
--whisper&#124;GM
--format&#124;cyber
--orowbg&#124;#FFFFFF
--orowtx&#124;#000000
--erowbg&#124;#FFFFFF
--erowtx&#124;#000000
--bodyfontsize&#124;12px
--border&#124;1px solid #f00
--@{target|second|Character_name}&#124;
--PA :&#124;Corps (@{target|second|BodySP}) Tête (@{target|second|HeadSP})
--HP :&#124;@{target|second|HP}
&#125;&#125;
|

Mains nues (@{selected|total_brawling}),&{template:skill&#125; {{critroll=[[@{selected|total_brawling}+10+1d10]]&#125;&#125; {{failroll=[[@{selected|total_brawling}+1-1d10]]&#125;&#125; {{rollname=Mains nues
@{selected|character_name}&#125;&#125;  {{roll=[[@{selected|total_brawling}+1d10]]&#125;&#125;
!roll20AM --audio&#44;play&#44;nomenu&#124;FX - Coup de poing
&{template:custom&#125;{{title=&#125;&#125;{{color=red&#125;&#125;{{SD = Esquive de la cible&#125;&#125;{{Dégâts  =  basés sur COR de l'attaquant  &#125;&#125;{{COR de @{selected|character_name} = [[@{selected|Body}]] &#125;&#125;{{4 ou moins = [1D6](! #1D6)&#125;&#125;{{5 ou 6 = [2D6](! #2D6)&#125;&#125;{{7 à 10 = [3D6](! #3D6)&#125;&#125;{{11 ou plus = [4D6](! #4D6)&#125;&#125;{{desc=Les dégâts prennent en compte l'armure de la cible.&#125;&#125;
&{template:custom&#125;{{title=&#125;&#125;{{color=noir&#125;&#125;{{desc=Si le jet dépasse le SD x2&#44; l'attaque touche un point faible de la cible. Les dégâts sont doublés (aprés réduction de l'armure). En cas de coup critique à la tête&#44; les dégâts sont triplés.&#125;&#125;
!power {{
--whisper&#124;GM
--format&#124;cyber
--orowbg&#124;#FFFFFF
--orowtx&#124;#000000
--erowbg&#124;#FFFFFF
--erowtx&#124;#000000
--bodyfontsize&#124;12px
--border&#124;1px solid #f00
--@{target|second|Character_name}&#124;
--PA :&#124;Corps (@{target|second|BodySP}) Tête (@{target|second|HeadSP})
--HP :&#124;@{target|second|HP}
&#125;&#125;
|

Pistolet (@{selected|Total_Handgun}), 
!measure @{selected|token_id} @{target|second|token_id}
&{template:skill&#125; {{critroll=[[@{selected|Total_Handgun}+10+1d10]]&#125;&#125; {{failroll=[[@{selected|Total_Handgun}+1-1d10]]&#125;&#125; {{rollname=Pistolet
@{selected|character_name}&#125;&#125;  {{roll=[[@{selected|Total_Handgun}+1d10]]&#125;&#125;
!roll20AM --audio&#44;play&#44;nomenu&#124;GUN-Pistolet1
!setattr --sel --silent --charid @{selected|character_id} --ammunition&#124;[[@{selected|ammunition}-1]]
&{template:custom&#125;{{title=&#125;&#125;{{color=red&#125;&#125;{{0 à 6m = SD 13&#125;&#125;{{7 à 12m = SD 15&#125;&#125;{{13 à 25m = SD 20&#125;&#125;{{26 à 50m = SD 25&#125;&#125;{{51 à 100m = SD 30&#125;&#125;{{101 à 200m = SD 30&#125;&#125;{{Au dela de 200m = Impossible&#125;&#125;{{&nbsp; =&nbsp;&#125;&#125;{{Dégâts =  &#125;&#125;{{ Pistolet moyen = [2D6](! #2D6) (CAD 2)&#125;&#125;{{Pistolet Lourd = [3D6](! #3D6) (CAD 2)&#125;&#125;{{Pistolet Trés Lourd = [4D6](! #4D6)&#125;&#125;
&{template:custom&#125;{{title=&#125;&#125;{{color=noir&#125;&#125;{{desc=Si le jet dépasse le SD x2&#44; l'attaque touche un point faible de la cible. Les dégâts sont doublés (aprés réduction de l'armure). En cas de coup critique à la tête&#44; les dégâts sont triplés.&#125;&#125;
!power {{
--whisper&#124;GM
--format&#124;cyber
--orowbg&#124;#FFFFFF
--orowtx&#124;#000000
--erowbg&#124;#FFFFFF
--erowtx&#124;#000000
--bodyfontsize&#124;12px
--border&#124;1px solid #f00
--@{target|second|Character_name}&#124;
--PA :&#124;Corps (@{target|second|BodySP}) Tête (@{target|second|HeadSP})
--HP :&#124;@{target|second|HP}
&#125;&#125;
|

Pistolet Mitrailleur (@{selected|Total_Handgun}), 
!measure @{selected|token_id} @{target|second|token_id}
&{template:skill&#125; {{critroll=[[@{selected|Total_Handgun}+10+1d10]]&#125;&#125; {{failroll=[[@{selected|Total_Handgun}+1-1d10]]&#125;&#125; {{rollname=Pistolet Mitrailleur
@{selected|character_name}&#125;&#125;  {{roll=[[@{selected|Total_Handgun}+1d10]]&#125;&#125;
!roll20AM --audio&#44;play&#44;nomenu&#124;GUN - Assaut3
!setattr --sel --silent --charid @{selected|character_id} --ammunition&#124;[[@{selected|ammunition}-1]]
&{template:custom&#125;{{title=&#125;&#125;{{color=red&#125;&#125;{{0 à 6m = SD 15&#125;&#125;{{7 à 12m = SD 13&#125;&#125;{{13 à 25m = SD 15&#125;&#125;{{26 à 50m = SD 20&#125;&#125;{{51 à 100m = SD 25&#125;&#125;{{101 à 200m = SD 25&#125;&#125;{{201 à 400m = SD 30&#125;&#125;{{Au dela de 400m = Impossible&#125;&#125;{{Dégâts =  &#125;&#125;{{ Pistolet Mitrailleur = [2D6](! #2D6)&#125;&#125;{{Pistolet Mitrailleur Lourd = [3D6](! #3D6)&#125;&#125;
&{template:custom&#125;{{title=&#125;&#125;{{color=noir&#125;&#125;{{desc=Si le jet dépasse le SD x2&#44; l'attaque touche un point faible de la cible. Les dégâts sont doublés (aprés réduction de l'armure). En cas de coup critique à la tête&#44; les dégâts sont triplés.&#125;&#125;
!power {{
--whisper&#124;GM
--format&#124;cyber
--orowbg&#124;#FFFFFF
--orowtx&#124;#000000
--erowbg&#124;#FFFFFF
--erowtx&#124;#000000
--bodyfontsize&#124;12px
--border&#124;1px solid #f00
--@{target|second|Character_name}&#124;
--PA :&#124;Corps (@{target|second|BodySP}) Tête (@{target|second|HeadSP})
--HP :&#124;@{target|second|HP}
&#125;&#125;
|

Tir auto. : Fusil d'assaut  (@{selected|Total_Autofire}), 
!measure @{selected|token_id} @{target|second|token_id}
&{template:skill&#125; {{critroll=[[@{selected|Total_Autofire}+10+1d10]]&#125;&#125; {{failroll=[[@{selected|Total_Autofire}+1-1d10]]&#125;&#125; {{rollname=Tir auto. : Fusil d'assaut
@{selected|character_name}&#125;&#125;  {{roll=[[@{selected|Total_Autofire}+1d10]]&#125;&#125;
!roll20AM --audio&#44;play&#44;nomenu&#124;GUN - mitrailleuse
!setattr --sel --silent --charid @{selected|character_id} --ammunition&#124;[[@{selected|ammunition}-10]]
&{template:custom&#125;{{title=&#125;&#125;{{color=red&#125;&#125;{{0 à 6m = SD 22&#125;&#125;{{7 à 12m = SD 20&#125;&#125;{{13 à 25m = SD 17&#125;&#125;{{26 à 50m = SD 20&#125;&#125;{{51 à 100m = SD 25&#125;&#125;{{Au dela de 100m = Impossible&#125;&#125;{{Dégâts = [2D6](! #2D6) multiplié par différence entre SD et le résultat du jet &#125;&#125;{{Multiplicateur max = x3 &#125;&#125;
&{template:custom&#125;{{title=&#125;&#125;{{color=noir&#125;&#125;{{desc=Si le jet dépasse le SD x2&#44; l'attaque touche un point faible de la cible. Les dégâts sont doublés (aprés réduction de l'armure). En cas de coup critique à la tête&#44; les dégâts sont triplés.&#125;&#125;
!power {{
--whisper&#124;GM
--format&#124;cyber
--orowbg&#124;#FFFFFF
--orowtx&#124;#000000
--erowbg&#124;#FFFFFF
--erowtx&#124;#000000
--bodyfontsize&#124;12px
--border&#124;1px solid #f00
--@{target|second|Character_name}&#124;
--PA :&#124;Corps (@{target|second|BodySP}) Tête (@{target|second|HeadSP})
--HP :&#124;@{target|second|HP}
&#125;&#125;
|

Tir auto. : Pist. Mitrailleur  (@{selected|Total_Autofire}), 
!measure @{selected|token_id} @{target|second|token_id}
&{template:skill&#125; {{critroll=[[@{selected|Total_Autofire}+10+1d10]]&#125;&#125; {{failroll=[[@{selected|Total_Autofire}+1-1d10]]&#125;&#125; {{rollname=Tir auto. : Pist. Mitrailleur 
@{selected|character_name}&#125;&#125;  {{roll=[[@{selected|Total_Autofire}+1d10]]&#125;&#125;
!roll20AM --audio&#44;play&#44;nomenu&#124;GUN - mitrailleuse
!setattr --sel --silent --charid @{selected|character_id} --ammunition&#124;[[@{selected|ammunition}-10]]
&{template:custom&#125;{{title=&#125;&#125;{{color=red&#125;&#125;{{0 à 6m = SD 20&#125;&#125;{{7 à 12m = SD 17&#125;&#125;{{13 à 25m = SD 20&#125;&#125;{{26 à 50m = SD 25&#125;&#125;{{51 à 100m = SD 30&#125;&#125;{{Au dela de 100m = Impossible&#125;&#125;{{Dégâts = [2D6](! #2D6) multiplié par différence entre SD et le résultat du jet &#125;&#125;{{Multiplicateur max = x4 &#125;&#125;
&{template:custom&#125;{{title=&#125;&#125;{{color=noir&#125;&#125;{{desc=Si le jet dépasse le SD x2&#44; l'attaque touche un point faible de la cible. Les dégâts sont doublés (aprés réduction de l'armure). En cas de coup critique à la tête&#44; les dégâts sont triplés.&#125;&#125;
!power {{
--whisper&#124;GM
--format&#124;cyber
--orowbg&#124;#FFFFFF
--orowtx&#124;#000000
--erowbg&#124;#FFFFFF
--erowtx&#124;#000000
--bodyfontsize&#124;12px
--border&#124;1px solid #f00
--@{target|second|Character_name}&#124;
--PA :&#124;Corps (@{target|second|BodySP}) Tête (@{target|second|HeadSP})
--HP :&#124;@{target|second|HP}
&#125;&#125;
}
