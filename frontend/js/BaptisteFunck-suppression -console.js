"use strict";
//Auteur: Baptiste Funck HE201830 
/**
 *appelle les web service permermettant de vérifier la sécurisation d'une ligne et le web service permettant de supprimer une ligne choisie
*/


let rConsoleExiste = XMLHttpRequest();
rConsoleExiste.open("get", "verifExiste?pModele=${pModele}" + "", true);
rConsoleExiste.onload = () =>{

        if(!rExiste.reponseText)     {
                id("suppressionInfo").innerHTML += "La suppression de la console n'a pas pu se faire car la console n'existe pas. <br/>"
        }
        else{
                let rVerificationSecurite = XMLHttpRequest();
                rVerificationSecurite.open("get", "VerificationSecuritee?pModele=${pModele}"+ "", true);
                rVerificationSecurite.onload = () =>{
                        id(consoleSecurisee).innerHTML += " La suppression n'a pu se faire car la console fait partie des consoles vérifiées et sécurisées <br/>"
                                if(!rVerificationSecurite.reponseText = "1")
                                else{
                                let rSuppressionConsole = XMLHttpRequest();
                                rSuppressionConsole.open("get", "suppressionConsole?pModele=${pModele}"+ "", true);
                                rSuppressionConsole.onload = () =>{
                                        id(rVerificationSecurite).innerHTML += " La console a bien été supprimer <br/>"
                                }
                 }
                 rSuppressionConsole.send()
        }
        rVerificationSecurite.send()
}
rConsoleExiste.send()
