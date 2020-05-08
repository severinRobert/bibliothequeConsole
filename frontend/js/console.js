"use strict";
document.addEventListener('DOMContentLoaded', initPage); 

function initPage() {
	id("formulaireConsole").addEventListener('submit',traitementFormulaire);
}

function traitementFormulaire(event) {
	event.preventDefault();
	let form = event.target;
	let pMarque = form.marque.value;
	let pAnneeMin = form.anneeMin.value;
	let pAnneeMax = form.anneeMax.value;
	let pPortabilite = form.portabilite.value;
	let xhr = new XMLHttpRequest();   
	xhr.open('get', "tableConsoleHtml?pMarque=" + pMarque + "&pAnneeMin=" + pAnneeMin + "&pAnneeMax=" + pAnneeMax + "&pPortabilite" + pPortabilite + '', true);
	xhr.onload = () => { 
		let rTableConsole = JSON.parse(xhr.responseText);
	}
	xhr.send();
}


function id(id) {
	return document.getElementById(id);
}

function tableHtml(table) {
	let tableauHtml = "";
	for(i in table) {
		for(j in table[i]) {
			tableauHtml += "<td>" + table[i][j] + "</td>";
		}
		tableauHtml = "<td>" + tableauHtml + "</tr>";
	}
	return tableauHtml;
}
