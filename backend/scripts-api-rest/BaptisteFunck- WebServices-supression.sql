/*Auteur: Baptiste Funck HE201830 */

/*Procédure*/
CREATE PROCEDURE "suppressionConsole" (in pModele VARCHAR(100))
BEGIN 
    DELETE FROM "TableConsole"
    WHERE Modele = pModele
END;

/*Service Web*/

CREATE SERVICE "supressionConsole" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call suppressionConsole(:pModele);

/***********************************************************************************************************************************/

/*Procédure*/

CREATE PROCEDURE "verificationSecuritee" (in pModele VARCHAR (100))
BEGIN 
    SELECT idsecurite
    FROM "TableConsole"
    WHERE Modele = pModele
END;

/*Service Web*/

CREATE SERVICE "verificationSecuritee" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call verificationSecuritee(:pModele);
