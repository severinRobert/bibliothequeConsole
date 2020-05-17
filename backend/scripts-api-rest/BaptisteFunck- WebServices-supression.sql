CREATE PROCEDURE "suppressionConsole" (in pModele VARCHAR(100))
BEGIN 
    DELETE FROM "TableConsole"
    WHERE Modele = pModele
END

CREATE SERVICE "supressionConsole" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call suppressionConsole(:pModele);


CREATE PROCEDURE "verificationSecuritee" (in pModele VARCHAR (100))
BEGIN 
    SELECT idsecurite
    FROM "TableConsole"
    WHERE Modele = pModele
END

CREATE SERVICE "verificationSecuritee" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call verificationSecuritee(:pModele);
