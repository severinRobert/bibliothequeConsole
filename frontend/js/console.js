document.addEventListener('DOMContentLoaded',initPage);
function initPage (){
	document.getElementById('formulaireConsole').addEventListener('submit',traitementFormulaire);
}


function traitementFormulaire (event){
event.preventDefault();
let form = event.target;
let pMarque = form.marque.value;
let pAnnee = form.annee.value;
let pPortabilite = form.portabilite.value;
/*console.log(form,pMarque,pAnnee,pPortabilite);*/
let xhr = new XMLHttpRequest();
xhr.open('get','tableConsoleHtml?pMarque=' + pMarque + '&pAnnee=' + pAnnee + '&pPortabilite=' + pPortabilite + '',true);
xhr.onload = () => { console.log(xhr)
	let rTableConsole = JSON.parse(xhr.responseText);
	console.log(rTableConsole)
}
xhr.send()
}
