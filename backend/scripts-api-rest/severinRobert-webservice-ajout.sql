CREATE PROCEDURE "DBA"."ajoutConsole"( IN pIdMarque INTEGER, IN pAnnee INTEGER, IN pIdPortabilite INTEGER, IN pModele VARCHAR (100) )
BEGIN
	INSERT INTO consoles                                    /* ajout de la console à la DB */
        (idMarque, annee, idPortabilite, modele)
        VALUES
        (pIdMarque, pAnnee, pIdPortabilite, pModele)
END;

CREATE PROCEDURE "DBA"."ajoutMarque"( in pMarque VARCHAR (100) )
BEGIN
	INSERT INTO marques         /* ajoute la marque à la DB */
        (nomMarque)
        VALUES 
        (pMarque);
END;

CREATE PROCEDURE "DBA"."getIdMarque"( in pMarque VARCHAR (100) )
BEGIN
	SELECT idMarque         /**/
    FROM marques
    WHERE nomMarque = pMarque
END;

CREATE PROCEDURE "DBA"."verifExiste"( in pModele VARCHAR (100) )
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


/* *********************************************** */

CREATE SERVICE "ajoutMarque" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call ajoutMarque(:pMarque);
CREATE SERVICE "ajoutConsole" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call ajoutConsole(:pMarque,:pAnnee,:pPortabilite,:pModele);
CREATE SERVICE "idMarque" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call getIdMarque(:pMarque);
CREATE SERVICE "verifMarque" TYPE 'RAW' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call verifMarque(:pMarque);
CREATE SERVICE "verifExiste" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call verifExiste(:pModele);
