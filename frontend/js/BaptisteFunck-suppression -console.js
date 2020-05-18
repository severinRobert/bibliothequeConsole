"use strict";
//Auteur: Baptiste Funck HE201830 
/**
 *appelle les web service permermettant de vérifier la sécurisation d'une ligne et le web service permettant de supprimer une ligne choisie
*/

function suppression() {
	let rConsoleExiste = new XMLHttpRequest();
	rConsoleExiste.open("get", "verifExiste?pModele=${pModele}" + "", true);
	rConsoleExiste.onload = () =>{
		if(!rExiste.reponseText)     {
    	    id(suppressionInfo).innerHTML += "La suppression de la console n'a pas pu se faire car la console n'existe pas. <br/>"
    	}
    	else{
    	    let rVerificationSecurite = new XMLHttpRequest();
    	    rVerificationSecurite.open("get", "verificationSecuritee?pModele=${pModele}"+ "", true);
    	    rVerificationSecurite.onload = () =>{  
    	    if(!rVerificationSecurite.reponseText == 1) {
    	        id(suppressionInfo).innerHTML += " La suppression n'a pu se faire car la console fait partie des consoles vérifiées et sécurisées <br/>";
    	    }
    	    else{
    	        let rSuppressionConsole = new XMLHttpRequest();
    	        rSuppressionConsole.open("get", "suppressionConsole?pModele=${pModele}"+ "", true);
    	        rSuppressionConsole.onload = () =>{
    	            id(suppressionInfo).innerHTML += " La console a bien été supprimée <br/>"
   	         	}
    	    }
    	    rSuppressionConsole.send()
    	}
    	rVerificationSecurite.send()
	}
	rConsoleExiste.send();
}
