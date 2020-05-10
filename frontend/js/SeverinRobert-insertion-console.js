"use strict";

/**
 * Appelle le service Web qui permet d'ajouter une console
 * @param {event} evenement qui a appelé la fonction
*/

function traitementAjoutConsole(event) {
	event.preventDefault();
	let form = event.target;
	let pMarque = form.marque.value;
	let pAnnee = form.annee.value;
	let pPortabilite = form.portabilite.value;
	let pModele = form.modele.value;
	let pIdMarque = 0;
	let pIdPortabilite = 0;
	let rExiste = new XMLHttpRequest();

	rExiste.open('get', `verifExiste?pModele=${pModele}` + '', true);	//vérifie que la console n'éxiste pas déjà dans la DB									
	rExiste.onload = () => {

		if(rExiste.responseText)	{
			id("infoAjout").innerHTML += "L'ajout n'a pas pu se faire, la console existe déjà dans notre base de donnée.<br />";
		} 
		else {
			let rMarque = new XMLHttpRequest();				
			console.log("console OK");
			rMarque.open('get', `verifMarque?pMarque=${pMarque}`, true);		//vérifie si la marque existe déjà dans la DB
			rMarque.onload = () => {

				if(!rMarque.responseText)	{
					id("infoAjout").innerHTML += `Ajout de la marque ${pMarque}!<br />`;	//si la marque n'existe pas encore, on la crée

					let rAjoutMarque = new XMLHttpRequest();
					rAjoutMarque.open('get', `ajoutMarque?pMarque=${pMarque}`,true);
					rAjoutMarque.onload = () => {
						ajoutMarqueChoix();
					}
					rAjoutMarque.send()
				} 
				let rIdMarque = new XMLHttpRequest();
				rIdMarque.open('get', `idMarque?pMarque=${pMarque}` + '',true);
				rIdMarque.onload = () => {
					console.log("id OK");
					pIdMarque = rIdMarque.responseText;
					let rAjoutConsole = new XMLHttpRequest();
					pIdPortabilite = (pPortabilite == "fixe") ? 1 : 2;
					rAjoutConsole.open('get',`ajoutConsole?pIdMarque=${pIdMarque}&pAnnee=${pAnnee}&pIdPortabilite=${pIdPortabilite}&pModele=${pModele}`,true)
					rAjoutConsole.onload = () => {
						id("infoAjout").innerHTML += `L'ajout de la console ${pModele} s'est bien effectué, merci de votre contribution !<br />`;
					}
					rAjoutConsole.send()
				}
				rIdMarque.send()
			}
			rMarque.send()	
		}
	}
	rExiste.send()
}


function ajoutMarqueChoix() {
	let  tableauMarque = new XMLHttpRequest();
	tableauMarque.open('get' ,"tableauMarque?",true );
	tableauMarque.onload = () => {
		let rTableMarque = JSON.parse(tableauMarque.responseText);
		console.log(rTableMarque);
		let tableHtmlMarque = "";
		for(let i in rTableMarque)	{
			tableHtmlMarque += `<option value="${rTableMarque[i].nomMarque}">${rTableMarque[i].nomMarque}</option>`
		}
		id("marque").innerHTML = tableHtmlMarque;
	}
	tableauMarque.send();
}
