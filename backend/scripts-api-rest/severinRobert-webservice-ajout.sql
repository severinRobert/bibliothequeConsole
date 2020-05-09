CREATE  PROCEDURE "DBA"."ajoutConsole"( IN pMarque VARCHAR (100), IN pAnnee INTEGER, IN pPortabilite VARCHAR (40), in pModele VARCHAR (100) )

BEGIN
    DECLARE pIdPortabilite INTEGER;
    DECLARE pIdMarque INTEGER;
    SET pIdMarque = 1;

    IF pPortable = 'fixe'
            {SET pIdPortabilite = 1;}
    IF pPortable = 'portable'
            {SET pIdPortabilite = 2;}

    WHILE pMarque != (SELECT nomMarque FROM marques WHERE idMarque = pIdMarque) AND pIdMarque =< count(marques)
        pIdMarque += 1;
    IF pMarque != (SELECT nomMarque FROM marques WHERE idMarque = pIdMarque)
        INSERT INTO marques
            (idMarque,nomMarque)
            VALUES
            (pIdMarque,pMarque);


    INSERT INTO consoles
        (idPortabilite, idMarque, modele, annee, idSecurite)
        VALUES 
        (pIdPortabilite,pIdMarque,pModele,pAnnee,0);

END

/* *********************************************** */

CREATE SERVICE "ajoutConsole" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call ajoutConsole(:pMarque,:pAnnee,:pPortabilite,:pModele);
