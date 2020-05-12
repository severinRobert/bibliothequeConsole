/* Script réalisé par Arthur Behets HE201707 */

/*Procédure*/

create procedure "dba"."addComment"(IN newComment varchar(999))
BEGIN
INSERT INTO consoleComment
(commentaire)
VALUES 
(newComment)
END;

/*Service Web*/

CREATE SERVICE "tableauMarque" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call tableauMarque();

/***************************************************************************************************************************************/

/*Procédure*/

CREATE procedure "dba"."getConsoleComment"()
BEGIN 
select commentaire from DBA.consoleComment
END;

/*Service Web*/

create service "tableConsoleComment" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call getConsoleComment();
