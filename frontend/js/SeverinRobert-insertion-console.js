"use strict";

/**
 * Appelle le service Web qui permet d'ajouter une console
 * @param {event} evenement qui a appelé la fonction
*/

function traitementAjoutConsole(event) {
	event.preventDefault();					//récupération + initialisation de données
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
			rMarque.open('get', `verifMarque?pMarque=${pMarque}`, true);		//vérifie si la marque existe déjà dans la DB
			rMarque.onload = () => {

				if(!rMarque.responseText)	{
					id("infoAjout").innerHTML += `Ajout de la marque ${pMarque}!<br />`;	//si la marque n'existe pas encore, on la crée

					let rAjoutMarque = new XMLHttpRequest();
					rAjoutMarque.open('get', `ajoutMarque?pMarque=${pMarque}`,true);
					rAjoutMarque.onload = () => {
						ajoutMarqueChoix();     				//ajoute le choix de la marque créée dans le formulaire de recherche
					}
					rAjoutMarque.send()
				} 

				let rIdMarque = new XMLHttpRequest();
				rIdMarque.open('get', `idMarque?pMarque=${pMarque}` + '',true);
				rIdMarque.onload = () => {
					pIdMarque = rIdMarque.responseText;

					let rAjoutConsole = new XMLHttpRequest();				//ajoute la console à la DB
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

/**
 * Crée dynamiquement les options de marque pour la recherche dans la DB au chargement de la page et lors de l'ajout d'une marque
 */
function ajoutMarqueChoix() {
	let  tableauMarque = new XMLHttpRequest();
	tableauMarque.open('get' ,"tableauMarque?",true );
	tableauMarque.onload = () => {
		let rTableMarque = JSON.parse(tableauMarque.responseText);
		let tableHtmlMarque = "";
		for(let i in rTableMarque)	{
			tableHtmlMarque += `<option value="${rTableMarque[i].nomMarque}">${rTableMarque[i].nomMarque}</option>`		//creation des options de marque
		}
		id("marque").innerHTML = tableHtmlMarque;
	}
	tableauMarque.send();
}
