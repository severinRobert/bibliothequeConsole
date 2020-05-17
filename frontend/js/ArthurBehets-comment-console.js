// Script réalisé par Arthur Behets HE201707
"use strict";


function showComment(){
    let commentXhr = new XMLHttpRequest();
    commentXhr.open('get', 'tableConsoleComment?', true);
    commentXhr.onload=() => {
        let comment = JSON.parse(commentXhr.responseText);
        comment = affichageComments(comment);
        id('commentPlace').innerHTML = comment;
    }

    commentXhr.send();
}


function affichageComments(comment){
    let affichageComments ="";
    for (let i in comment){
        affichageComments = "<p>" + comment[i].commentaire + "</p>" + affichageComments;
    }
    return affichageComments;
}


function addComment(event){
    event.preventDefault();
    let form = event.target;
    let newComment = (form.newComment.value);
    let newCommentXhr = new XMLHttpRequest;
    newCommentXhr.open('get', `addCommentService?newComment=${newComment}`, true);
    newCommentXhr.onload = () =>{
        showComment();
    }
    newCommentXhr.send();
}







/***********************************************************************************************************

 * Code copié de Emilien Perremans


 */


 function traitementFormulaireDeux (event){
    event.preventDefault();
    let form = event.target;
    let pMarque = form.marqueDeux.value;
    let pAnnee = form.anneeDeux.value;
    let pPortabilite = form.portabiliteDeux.value;

    if (pPortabilite == 'tous')
    {
        let xhr2 = new XMLHttpRequest();
        xhr2.open('get' ,`tableConsoleHtmlMarque?pMarque=${pMarque}`,true );
        xhr2.onload = () => { console.log(xhr2.responseText);
            let rTableConsole = JSON.parse(xhr2.responseText);
            let table = tableHtml(rTableConsole);
            id("resultDeux").innerHTML = table;

            if (pAnnee.length == 0) {
                id("erreurDateDeux").innerHTML = "Champs date ignoré";
            }
        }
        xhr2.send();
    }

    else
    {
        let xhr = new XMLHttpRequest();
        xhr.open('get','tableConsoleHtml?pMarque=' + pMarque + '&pAnnee=' + pAnnee + '&pPortabilite=' + pPortabilite + '',true);
        xhr.onload = () => { console.log(xhr)
            let rTableConsole = JSON.parse(xhr.responseText);
            if (rTableConsole.length != 0){
                console.log(rTableConsole)
                let tableau = tableHtml(rTableConsole);

                id("resultDeux").innerHTML = tableau;
                id("erreurDateDeux").innerHTML = "";
            }

            else {
                let xhr1 = new XMLHttpRequest();
                xhr1.open('get' ,`tableConsoleHtmlDate?pMarque=${pMarque}&pPortabilite=${pPortabilite}`,true );
                xhr1.onload = () => { console.log(xhr1);
                    rTableConsole = JSON.parse(xhr1.responseText);
                    if (rTableConsole.length != 0){
                        console.log(rTableConsole)
                        let tableau = tableHtml(rTableConsole);

                        id("resultDeux").innerHTML = tableau;
                        id("erreurDateDeux").innerText = 'Champs date ignoré!';
                    }
                    else {
                        id("erreurDateDeux").innerText = `La marque ${pMarque} n'as pas de consoles ${pPortabilite}` ;
                    }

                }
                xhr1.send()
            }
        }
        xhr.send()
    }
}

 function tableHtml (array){
    let tableau = "" ;

    array.forEach (element=>{
        if (!id(element.idConsole)){
            tableau+=` <tr id="${element.idConsole}"> <td class="${element.nomMarque}">${element.nomMarque}</td>    <td id="${element.modele}">${element.modele}</td>     <td class="${element.annee}">${element.annee}</td>      <td class="${element.typePortabilite}">${element.typePortabilite}</td> </tr> `
        }
    });
    return tableau;
}



/*******************************************************************************************************
 *Code copié de Severin Robert
 */

function ajoutMarqueChoixDeux() {
    let  tableauMarque = new XMLHttpRequest();
    tableauMarque.open('get' ,"tableauMarque?",true );
    tableauMarque.onload = () => {
        let rTableMarque = JSON.parse(tableauMarque.responseText);
        let tableHtmlMarque = "";
        for(let i in rTableMarque)	{
            tableHtmlMarque += `<option value="${rTableMarque[i].nomMarque}">${rTableMarque[i].nomMarque}</option>`		//creation des options de marque
        }
        id("marqueDeux").innerHTML = tableHtmlMarque;
    }
    tableauMarque.send();
}
