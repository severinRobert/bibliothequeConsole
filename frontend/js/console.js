"use strict";
document.addEventListener('DOMContentLoaded', initPage); 

function initPage() {
	id("formulaireConsole").addEventListener('submit',traitementFormulaire);
}

function traitementFormulaire(event) {
	event.preventDefault();
	let form = event.target;
	let pMarque = form.marque.value;
	let pAnnee = form.annee.value;
	let pPortabilite = form.portable.value;
	let xhr = new XMLHttpRequest();   
	xhr.open('get', "tableConsoleHtml?pMarque=" + pMarque + "&pAnnee=" + pAnnee + "&pPortabilite" + pPortabilite + '', true);
	xhr.onload = () => { console.log(xhr.responseText);
		let rTableConsole = JSON.parse(xhr.responseText);
		console.log(rTableConsole);
	}
	xhr.send();
}


function id(id) {
	return document.getElementById(id);
}


