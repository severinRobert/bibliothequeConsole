/*Auteur: Emilien Perremans HE201859 */

/*Procédure*/

CREATE PROCEDURE "DBA"."getTableauConsole"( IN pMarque VARCHAR (100), IN pAnnee INTEGER, IN pPortabilite VARCHAR (40))/* */

BEGIN
	SELECT modele, nomMarque, typePortabilite, annee, idConsole
    	FROM consoles NATURAL JOIN marques NATURAL JOIN portabilite 
    	WHERE nomMarque = pMarque AND annee = pAnnee AND portabilite.typePortabilite = pPortabilite
END;

/*Service Web*/
CREATE SERVICE "tableConsoleHtml" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call getTableauConsole(:pMarque,:pAnnee,:pPortabilite);

/**********************************************************************************************************************************/
/*Procédure*/

CREATE PROCEDURE "DBA"."getTableauConsoleDate"( IN pMarque VARCHAR (100),IN pPortabilite VARCHAR (40))/* */

BEGIN
	SELECT modele, nomMarque, typePortabilite, annee, idConsole
    	FROM consoles NATURAL JOIN marques NATURAL JOIN portabilite 
    	WHERE nomMarque = pMarque AND typePortabilite = pPortabilite
END;

/*Service Web*/
CREATE SERVICE "tableConsoleHtmlDate" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call getTableauConsoleDate(:pMarque,:pPortabilite);

/**********************************************************************************************************************************/
/*Procédure*/

CREATE PROCEDURE "DBA"."getTableauConsoleMarque"( IN pMarque VARCHAR (100))

BEGIN
	SELECT modele, nomMarque, typePortabilite, annee, idConsole
    	FROM consoles NATURAL JOIN marques NATURAL JOIN portabilite 
    	WHERE nomMarque = pMarque
END;

/*Service Web*/
CREATE SERVICE "tableConsoleHtmlMarque" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call getTableauConsoleMarque(:pMarque);
