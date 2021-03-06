// Auteur: Emilien Perremans HE201859



"usestrict";

function traitementFormulaire (event){
    event.preventDefault();
    let form = event.target;
    let pMarque = form.marque.value;
    let pAnnee = form.annee.value;
    let pPortabilite = form.portabilite.value;

    if (pPortabilite == 'tous')
    {
        let xhr2 = new XMLHttpRequest();
        xhr2.open('get' ,`tableConsoleHtmlMarque?pMarque=${pMarque}`,true );
        xhr2.onload = () => { console.log(xhr2.responseText);
            let rTableConsole = JSON.parse(xhr2.responseText);
            let table = tableHtml(rTableConsole);
            id("result").innerHTML = table;

            if (pAnnee.length == 0) {
                id("erreurDate").innerHTML = "Champs date ignoré";
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

                id("result").innerHTML = tableau;
                id("erreurDate").innerHTML = "";
            }

            else {
                let xhr1 = new XMLHttpRequest();
                xhr1.open('get' ,`tableConsoleHtmlDate?pMarque=${pMarque}&pPortabilite=${pPortabilite}`,true );
                xhr1.onload = () => { console.log(xhr1);
                    rTableConsole = JSON.parse(xhr1.responseText);
                    if (rTableConsole.length != 0){
                        console.log(rTableConsole)
                        let tableau = tableHtml(rTableConsole);

                        id("result").innerHTML = tableau;
                        id("erreurDate").innerText = 'Champs date ignoré!';
                    }
                    else {
                        id("erreurDate").innerText = `La marque ${pMarque} n'as pas de consoles ${pPortabilite}` ;
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
