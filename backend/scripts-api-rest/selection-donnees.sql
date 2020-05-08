CREATE PROCEDURE "DBA"."getTableauConsole"( IN pMarque VARCHAR (100), IN pAnnee INTEGER, IN pPortabilite VARCHAR (40))/* */

BEGIN
    SELECT modele,nomMarque,typePortabilite,annee
    FROM consoles NATURAL JOIN marques NATURAL JOIN portabilite
    WHERE nomMarque = pMarque AND annee = pAnnee AND portabilite.typePortabilite = pPortabilite
END