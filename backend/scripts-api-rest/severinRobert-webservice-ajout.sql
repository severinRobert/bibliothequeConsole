/* auteur : Séverin Robert HE201811 */

/*Procédure*/
CREATE PROCEDURE "DBA"."ajoutConsole"( IN pIdMarque INTEGER, IN pAnnee INTEGER, IN pIdPortabilite INTEGER, IN pModele VARCHAR (100) )
BEGIN
	INSERT INTO consoles                                    /* ajout de la console à la DB */
        (idMarque, annee, idPortabilite, modele,idSecurite)
        VALUES
        (pIdMarque, pAnnee, pIdPortabilite, pModele,0)
END;

/*Service Web*/

CREATE SERVICE "ajoutMarque" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call ajoutMarque(:pMarque);

/***********************************************************************************************************************************/

/*Procédure*/

CREATE PROCEDURE "DBA"."ajoutMarque"( in pMarque VARCHAR (100) )      /* ajoute la marque à la DB */
BEGIN
	INSERT INTO marques        
        (nomMarque)
        VALUES 
        (pMarque);
END;

/*Service Web*/

CREATE SERVICE "ajoutConsole" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call ajoutConsole(:pIdMarque,:pAnnee,:pIdPortabilite,:pModele);

/***********************************************************************************************************************************/

/*Procédure*/

CREATE PROCEDURE "DBA"."getIdMarque"( in pMarque VARCHAR (100) )   /* trouve l'id de la marque encodée */
BEGIN
    SELECT idMarque        
    FROM marques
    WHERE nomMarque = pMarque
END;

/*Service Web*/

CREATE SERVICE "idMarque" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call getIdMarque(:pMarque);

/***********************************************************************************************************************************/
/*Procédure*/

CREATE PROCEDURE "DBA"."verifExiste"( in pModele VARCHAR (100) )  /*  */
BEGIN
	SELECT modele 
    FROM consoles
    WHERE modele = pModele
END;

/*Web Service*/

CREATE SERVICE "verifMarque" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call verifMarque(:pMarque);

/***********************************************************************************************************************************/
/*Procédure*/

CREATE PROCEDURE "DBA"."verifMarque"( in pMarque VARCHAR (100) )
BEGIN
	SELECT nomMarque
    FROM marques
    WHERE nomMarque = pMarque
END;

CREATE PROCEDURE "DBA"."tableauMarque"()
BEGIN
	SELECT nomMarque 
    FROM marques
END;

/*Web Service*/

CREATE SERVICE "verifExiste" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call verifExiste(:pModele);

/***********************************************************************************************************************************/
/*Procédure*/
CREATE PROCEDURE "DBA"."tableauMarque"(  )
BEGIN
	SELECT nomMarque 
    FROM marques
END;

/*Web Service*/

CREATE SERVICE "tableauMarque" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call tableauMarque();
