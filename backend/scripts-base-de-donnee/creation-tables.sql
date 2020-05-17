CREATE TABLE portabilite (
      idPortabilite INTEGER NOT NULL,
      typePortabilite VARCHAR(40),
      CONSTRAINT pk__portabilite PRIMARY KEY ( idPortabilite )
    );

CREATE TABLE marques (
      idMarque int NOT NULL DEFAULT AUTOINCREMENT,
      nomMarque VARCHAR(100) NULL,
      CONSTRAINT pk__marques PRIMARY KEY ( idMarque )
    );

CREATE TABLE consoles (
      idConsole int NOT NULL DEFAULT AUTOINCREMENT ,
      idSecurite int NOT NULL DEFAULT 1,
      idPortabilite INTEGER NOT NULL,
      idMarque int NOT NULL DEFAULT AUTOINCREMENT,
      modele VARCHAR(100) NULL,       
      annee INT,
      CONSTRAINT fk_consoles_portabilite FOREIGN KEY (idPortabilite) REFERENCES DBA.portabilite(IdPortabilite),	
      CONSTRAINT fk_consoles_marque FOREIGN KEY (idMarque) REFERENCES DBA.marques(IdMarque),
      CONSTRAINT pk_consoles PRIMARY KEY (idConsole) 
    );
    

CREATE TABLE consoleComment (
idComment integer not null default autoincrement,
commentaire varchar(999)
);


