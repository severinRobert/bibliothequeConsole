ALTER PROCEDURE "DBA"."ajoutConsole"( IN pMarque VARCHAR (100), IN pAnnee INTEGER, IN pPortabilite VARCHAR (40), in pModele VARCHAR (100) )

BEGIN
    DECLARE pIdPortabilite INTEGER;
    DECLARE pIdMarque INTEGER;

    IF pPortable = 'fixe'
            SET pIdPortabilite = 1;
    IF pPortable = 'portable'
            SET pIdPortabilite = 2;

    IF pMarque = 'Nintendo' 
            SET pIdMarque = 1;
    IF pMarque = 'Sony'
            SET pIdMarque = 2;
    IF pMarque = 'Microsoft'
            SET pIdMarque = 3;
    IF pMarque = 'Atari'
            SET pIdMarque = 4;
    ELSE
        INSERT INTO marques
            (idMarque, nomMarque)
            VALUES 
            (5,pMarque);

    INSERT INTO consoles
        (idPortabilite, idMarque, modele, annee)
        VALUES 
        (pIdPortabilite,pIdMarque,pModele,pAnnee);

END

/* *********************************************** */

CREATE SERVICE "ajoutConsole" TYPE 'Raw' AUTHORIZATION OFF USER "DBA" URL ON METHODS 'GET' AS call ajoutConsole(:pMarque,:pAnnee,:pPortabilite,:pModele);
