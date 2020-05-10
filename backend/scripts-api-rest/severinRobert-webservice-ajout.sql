CREATE PROCEDURE "DBA"."ajoutConsole"( IN pIdMarque INTEGER, IN pAnnee INTEGER, IN pIdPortabilite INTEGER, IN pModele VARCHAR (100) )
BEGIN
	INSERT INTO consoles                                    /* ajout de la console à la DB */
        (idMarque, annee, idPortabilite, modele)
        VALUES
        (pIdMarque, pAnnee, pIdPortabilite, pModele)
END;

CREATE PROCEDURE "DBA"."ajoutMarque"( in pMarque VARCHAR (100) )      /* ajoute la marque à la DB */
BEGIN
	INSERT INTO marques        
        (nomMarque)
        VALUES 
        (pMarque);
END;

CREATE PROCEDURE "DBA"."getIdMarque"( in pMarque VARCHAR (100) )   /* trouve l'id de la marque encodée */
BEGIN
    SELECT idMarque        
    FROM marques
    WHERE nomMarque = pMarque
END;

CREATE PROCEDURE "DBA"."verifExiste"( in pModele VARCHAR (100) )  /*  */
BEGIN
	SELECT modele 
    FROM consoles
    WHERE modele = pModele
END;

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

CREATE PROCEDURE "DBA"."tableauMarque"(  )
BEGIN
	SELECT nomMarque 
    FROM marques
END;

/* *********************************************** */

CREATE SERVICE "ajoutMarque" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call ajoutMarque(:pMarque);
CREATE SERVICE "ajoutConsole" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call ajoutConsole(:pIdMarque,:pAnnee,:pIdPortabilite,:pModele);
CREATE SERVICE "idMarque" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call getIdMarque(:pMarque);
CREATE SERVICE "verifMarque" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call verifMarque(:pMarque);
CREATE SERVICE "verifExiste" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call verifExiste(:pModele);
CREATE SERVICE "tableauMarque" TYPE 'JSON' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call tableauMarque();
