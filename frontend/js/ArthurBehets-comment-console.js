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
        affichageComments += "<p>" + comment[i]['commentaire'] + "</p>";
    }
    return affichageComments;
}


function addComment(event){
    event.preventDefault();
    let form = event.target;
    let newComment = (form.newComment.value);
    console.log(newComment);
    let newCommentXhr = new XMLHttpRequest;
    console.log('ok');
    newCommentXhr.open('get', `addCommentService?newComment=${newComment}`, true);
    console.log('ok2');
    newCommentXhr.onload = () =>{

    }
    console.log("ok3");
    newCommentXhr.send();
    console.log('ok4');
}
