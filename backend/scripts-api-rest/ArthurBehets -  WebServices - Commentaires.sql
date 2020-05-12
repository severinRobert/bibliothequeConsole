/* Script réalisé par Arthur Behets HE201707 */
create procedure "dba"."addComment"(IN newComment varchar(999))
BEGIN
INSERT INTO consoleComment
(commentaire)
VALUES 
(newComment)
END;


CREATE procedure "dba"."getConsoleComment"()

BEGIN 

select commentaire from DBA.consoleComment

END;



/***************************************************************************************************************************************/

create service "addCommentService"
TYPE 'JSON'
AUTHORIZATION OFF 
USER "DBA" 
URL ON 
METHODS 'get' 
as call addComment(:newComment);


create service "tableConsoleComment" 
type 'JSON'
AUTHORIZATION OFF
USER "DBA"
URL ON 
METHODS 'GET' 
AS call getConsoleComment();

