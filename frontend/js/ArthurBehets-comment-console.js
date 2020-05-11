// Script réalisé par Arthur Behets 
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
