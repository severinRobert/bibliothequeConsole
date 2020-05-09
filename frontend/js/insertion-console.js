"use strict";

id("ajoutConsole").addEventListener('submit',traitementAjoutConsole);
function traitementAjoutConsole(event) {
	event.preventDefault();
	let form = event.target;
	let pMarque = form.marque.value;
	let pAnneeMin = form.anneeMin.value;
	let pAnneeMax = form.anneeMax.value;
	let pPortabilite = form.portable.value;console.log(pMarque,pAnneeMin,pAnneeMax,pPortabilite);
	let xhr = new XMLHttpRequest();
	xhr.open('get', "tableConsoleHtml?pMarque=" + pMarque + "&pAnneeMin=" + pAnneeMin + "&pAnneeMax=" + pAnneeMax + "&pPortabilite" + pPortabilite + '', true);
	xhr.onload = () => { 
		let rTableConsole = JSON.parse(xhr.responseText);
	}
	xhr.send();
}