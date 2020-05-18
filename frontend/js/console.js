"usestrict";
document.addEventListener('DOMContentLoaded',initPage);

function initPage (){
    id('formulaireConsole').addEventListener('submit',traitementFormulaire);
    id('formulaireConsoleDeux').addEventListener('submit', traitementFormulaireDeux)
    id('submitComment').addEventListener('submit',addComment)
    id("ajoutConsole").addEventListener('submit',traitementAjoutConsole);
    id("suppression").addEventListener('submit',suppression);
    ajoutMarqueChoix();
    ajoutMarqueChoixDeux();
}

function id (idDom){
    return document.getElementById(idDom)
}
