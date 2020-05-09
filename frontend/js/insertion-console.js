"use strict";


function traitementAjoutConsole(event) {
	event.preventDefault();
	let form = event.target;
	let pMarque = form.marque.value;
	let pAnnee = form.annee.value;
	let pPortabilite = form.portabilite.value;
	let pModele = form.modele.value; console.log(pModele + " " + pMarque + " " + pAnnee + " " + pPortabilite);
	let rAjout = new XMLHttpRequest();

	rAjout.open('get', "ajoutConsole?pMarque=" + pMarque + "&pAnnee=" + pAnnee + "&pPortabilite" + pPortabilite + "&pModele" + pModele + '', true);
	rAjout.onload = () => {
	}
	rAjout.send();
}
