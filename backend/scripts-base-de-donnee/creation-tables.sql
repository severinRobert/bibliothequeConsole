CREATE TABLE portabilite (
      idPortabilite INTEGER NOT NULL,
      typePortabilite VARCHAR(40),
      CONSTRAINT pk__portabilite PRIMARY KEY ( idPortabilite )
    );

CREATE TABLE marques (
      idMarque INTEGER NOT NULL,
      nomMarque VARCHAR(100) NULL,
      CONSTRAINT pk__marques PRIMARY KEY ( idMarque )
    );

CREATE TABLE consoles (
      idPortabilite INTEGER NOT NULL,
      idMarque INTEGER NOT NULL,
      modele VARCHAR(100) NULL,       
      annee INT,
      CONSTRAINT fk_consoles_portabilite FOREIGN KEY (idPortabilite) REFERENCES DBA.portabilite(IdPortabilite),	
      CONSTRAINT fk_consoles_marque FOREIGN KEY (idMarque) REFERENCES DBA.marques(IdMarque)
    );
