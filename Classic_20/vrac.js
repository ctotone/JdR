{{title=^{attr-CARRURE}}}
{{subheader=@{character_name}}}
{{nom=@{character_name}}}
{{competence=@{CARRURE}}}
{{talent=@{endurance}}}
{{malus_etat=@{total_malus}}}
{{seuil=[[@{CARRURE}+@{endurance}]]}}
{{result=[[1d100+@{rollmodifier}+@{total_malus}[Malus blessures et stress]]]}}

&{template:itd} {{title=test}} {{subheader=nom}} {{seuil=[[50]]}} {{result=[[25]]}}

<!-- ROLL TEMPLATE INTO THE DARK-->
<rolltemplate class="sheet-rolltemplate-itd">
    <div class="sheet-rolltemplate-itd-background sheet-rolltemplate-itd-center">
        <div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-header">
            {{title}} ({{seuil}})
        </div>
        <div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte">
            {{#rollGreater() result 95}}
                {{#rollTotal() result 100}}
                Echec critique<br>tragique
                {{/rollTotal() result 100}}
                {{#rollTotal() result 99}}
                Echec critique
                {{/rollTotal() result 99}}
                {{#^rollTotal() result 99}}
                    {{#^rollTotal() result 100}}
                        Echec automatique
                    {{/^rollTotal() result 100}}
                {{/^rollTotal() result 99}}
            {{/rollGreater() result 95}}
            {{#^rollGreater() result 95}}
                {{#rollGreater() result seuil}}
                    {{#rollTotal() result 11}}
                    Echec critique
                    {{/rollTotal() result 11}}
                    {{#rollTotal() result 22}}
                    Echec critique
                    {{/rollTotal() result 22}}
                    {{#rollTotal() result 33}}
                    Echec critique
                    {{/rollTotal() result 33}}
                    {{#rollTotal() result 44}}
                    Echec critique
                    {{/rollTotal() result 44}}
                    {{#rollTotal() result 55}}
                    Echec critique
                    {{/rollTotal() result 55}}
                    {{#rollTotal() result 66}}
                    Echec critique
                    {{/rollTotal() result 66}}
                    {{#rollTotal() result 77}}
                    Echec critique
                    {{/rollTotal() result 77}}
                    {{#rollTotal() result 88}}
                    Echec critique
                    {{/rollTotal() result 88}}

                    {{#^rollTotal() result 11}}
                        {{#^rollTotal() result 22}}
                            {{#^rollTotal() result 33}}
                                {{#^rollTotal() result 44}}
                                    {{#^rollTotal() result 55}}
                                        {{#^rollTotal() result 66}}
                                            {{#^rollTotal() result 77}}
                                                {{#^rollTotal() result 88}}
                                                Echec
                                                {{/^rollTotal() result 88}} 
                                            {{/^rollTotal() result 77}}                                    
                                        {{/^rollTotal() result 66}}
                                    {{/^rollTotal() result 55}}
                                {{/^rollTotal() result 44}}
                            {{/^rollTotal() result 33}}
                        {{/^rollTotal() result 22}}
                    {{/^rollTotal() result 11}}
                {{/rollGreater() result seuil}}

                {{#^rollGreater() result seuil}}
                    {{#rollTotal() result 1}}
                    Réussite critique exceptionnelle
                    {{/rollTotal() result 1}}
                    {{#rollTotal() result 11}}
                    Réussite critique
                    {{/rollTotal() result 11}}
                    {{#rollTotal() result 22}}
                    Réussite critique
                    {{/rollTotal() result 22}}
                    {{#rollTotal() result 33}}
                    Réussite critique
                    {{/rollTotal() result 33}}
                    {{#rollTotal() result 44}}
                    Réussite critique
                    {{/rollTotal() result 44}}
                    {{#rollTotal() result 55}}
                    Réussite critique
                    {{/rollTotal() result 55}}
                    {{#rollTotal() result 66}}
                    Réussite critique
                    {{/rollTotal() result 66}}
                    {{#rollTotal() result 77}}
                    Réussite critique
                    {{/rollTotal() result 77}}
                    {{#rollTotal() result 88}}
                    Réussite critique
                    {{/rollTotal() result 88}}
                    {{#^rollTotal() result 1}}
                        {{#^rollTotal() result 11}}
                            {{#^rollTotal() result 22}}
                                {{#^rollTotal() result 33}}
                                    {{#^rollTotal() result 44}}
                                        {{#^rollTotal() result 55}}
                                            {{#^rollTotal() result 66}}
                                                {{#^rollTotal() result 77}}
                                                    {{#^rollTotal() result 88}}
                                                    Reussite
                                                    {{/^rollTotal() result 88}} 
                                                {{/^rollTotal() result 77}}                                    
                                            {{/^rollTotal() result 66}}
                                        {{/^rollTotal() result 55}}
                                    {{/^rollTotal() result 44}}
                                {{/^rollTotal() result 33}}
                            {{/^rollTotal() result 22}}
                        {{/^rollTotal() result 11}}
                    {{/^rollTotal() result 1}}
                {{/^rollGreater() result seuil}}
            {{/^rollGreater() result 95}}
        </div>
    </div>
</rolltemplate>
