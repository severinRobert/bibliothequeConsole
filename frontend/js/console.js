"usestrict";
document.addEventListener('DOMContentLoaded',initPage);

function initPage (){
    id('formulaireConsole').addEventListener('submit',traitementFormulaire);
    id('submitComment').addEventListener('submit',addComment)
    id("ajoutConsole").addEventListener('submit',traitementAjoutConsole);
    ajoutMarqueChoix();
}

function id (idDom){
	return document.getElementById(idDom)
}
