ALTER PROCEDURE "DBA"."getTableauConsole"(IN pMarque VARCHAR (100), IN pAnneeMin INTEGER, IN pAnneeMax INTEGER, IN pPortabilite VARCHAR (40))
BEGIN
    SELECT modele,nomMarque,typePortabilite 
    FROM consoles NATURAL JOIN marques NATURAL JOIN portabilite
    WHERE marque.nomMarque = pMarque AND  annee BETWEEN pAnneeMin AND pAnneeMax AND portabilite.typePortabilite = pPortabilite 
END
