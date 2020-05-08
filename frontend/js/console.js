function initPage() {
	id("formulaireConsole").addEventListener('submit',traitementFormulaire);
}

function traitementFormulaire(event) {
	event.preventDefault();
	let form = event.target;
	let pMarque = form.marque.value;
	let pAnnee = form.annee.value;
	let pPortabilite = form.portabilite.value;
	let xhr = new XMLHttpRequest();   
	xhr.open('get', "tableConsoleHtml?pMarque=" + pMarque + "&pAnnee=" + pAnnee + "&pPortabilite" + pPortabilite + '', true);
	xhr.onload = () => {
		let rTableConsole = JSON.parse(xhr.responseText);
	}
	xhr.send();
}


function id(id) {
	return document.getElementById(id);
}

