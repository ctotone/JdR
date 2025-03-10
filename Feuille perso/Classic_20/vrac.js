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
            {{#rollGreater() result 95}}
                {{#rollTotal() result 100}}
                <div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte">
                Echec critique<br>tragique
                {{/rollTotal() result 100}}
                {{#rollTotal() result 99}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte">
                Echec critique
                {{/rollTotal() result 99}}
                {{#^rollTotal() result 99}}
                    {{#^rollTotal() result 100}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte">
                        Echec automatique
                    {{/^rollTotal() result 100}}
                {{/^rollTotal() result 99}}
            {{/rollGreater() result 95}}
            {{#^rollGreater() result 95}}
                {{#rollGreater() result seuil}}
                    {{#rollTotal() result 11}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte"></div>
                    Echec critique
                    {{/rollTotal() result 11}}
                    {{#rollTotal() result 22}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte"></div>
                    Echec critique
                    {{/rollTotal() result 22}}
                    {{#rollTotal() result 33}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte"></div>
                    Echec critique
                    {{/rollTotal() result 33}}
                    {{#rollTotal() result 44}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte"></div>
                    Echec critique
                    {{/rollTotal() result 44}}
                    {{#rollTotal() result 55}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte"></div>
                    Echec critique
                    {{/rollTotal() result 55}}
                    {{#rollTotal() result 66}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte"></div>
                    Echec critique
                    {{/rollTotal() result 66}}
                    {{#rollTotal() result 77}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte"></div>
                    Echec critique
                    {{/rollTotal() result 77}}
                    {{#rollTotal() result 88}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte"></div>
                    Echec critique
                    {{/rollTotal() result 88}}

                    {{#^rollTotal() result 11}}
                        {{#^rollTotal() result 22}}
                            {{#^rollTotal() result 33}}
                                {{#^rollTotal() result 44}}
                                    {{#^rollTotal() result 55}}
                                        {{#^rollTotal() result 66}}
                                            {{#^rollTotal() result 77}}
                                                {{#^rollTotal() result 88}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte"></div>
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
                    {{#rollTotal() result 1}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte"></div>
                    Réussite critique exceptionnelle
                    {{/rollTotal() result 1}}
                    {{#rollTotal() result 11}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte"></div>
                    Réussite critique
                    {{/rollTotal() result 11}}
                    {{#rollTotal() result 22}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte"></div>
                    Réussite critique
                    {{/rollTotal() result 22}}
                    {{#rollTotal() result 33}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte"></div>
                    Réussite critique
                    {{/rollTotal() result 33}}
                    {{#rollTotal() result 44}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte"></div>
                    Réussite critique
                    {{/rollTotal() result 44}}
                    {{#rollTotal() result 55}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte"></div>
                    Réussite critique
                    {{/rollTotal() result 55}}
                    {{#rollTotal() result 66}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte"></div>
                    Réussite critique
                    {{/rollTotal() result 66}}
                    {{#rollTotal() result 77}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte"></div>
                    Réussite critique
                    {{/rollTotal() result 77}}
                    {{#rollTotal() result 88}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte"></div>
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
                                                    {{#^rollTotal() result 88}}<div class="sheet-rolltemplate-itd-center sheet-rolltemplate-itd-subheader">
            {{result}}
        </div>
        <div class="sheet-rolltemplate-itd sheet-template-itd-texte"></div>
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
