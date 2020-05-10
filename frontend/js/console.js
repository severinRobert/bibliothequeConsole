"usestrict";
document.addEventListener('DOMContentLoaded',initPage);

function initPage (){
    document.getElementById('formulaireConsole').addEventListener('submit',traitementFormulaire);
    document.getElementById('submitComment').addEventListener('submit',addComment)
}
