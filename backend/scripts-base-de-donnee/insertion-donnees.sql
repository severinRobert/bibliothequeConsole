INSERT INTO portabilite
    (idPortabilite, typePortabilite)
    VALUES 
    (1, 'Fixe'),
    (2, 'Portable');
INSERT INTO marques
    (idMarque, nomMarque)
    VALUES
    (1, 'Nintendo'),
    (2, 'Sony'),
    (3, 'Microsoft'),
    (4, 'Atari');
INSERT INTO consoles
    (idPortabilite, idMarque, modele, annee)
    VALUES 
    (1, 1, 'Color Tv-Game',1977),
    (1, 1, 'NES (Nintendo Entrainment System)', 1983),
    (1, 1, 'Nintendo 64' , 1996),
    (1, 1, 'GameCube', 2001),
    (1, 1, 'WII', 2006),
    (2, 1, 'Game & Watch', 1980),
    (2, 1, 'Game boy', 1987),
    (2, 1, 'Game boy Advence', 2001),
    (2, 1, 'DS', 2004),
    (2, 1, 'Switch', 2017),
    (1, 2, 'PlayStation', 1994),
    (1, 2, 'PlayStation 2', 2000),
    (1, 2, 'PlayStation 3', 2006),
    (1, 2, 'PlayStation 4', 2013),
    (2, 2, 'PocketStation', 1999),
    (2, 2, 'PSP', 2004),
    (2, 2, 'PS Vita', 2011),
    (1, 3, 'Xbox', 2001),
    (1, 3, 'Xbox 360', 2005),
    (1, 3, 'Xbox One', 2013),
    (1, 4, 'Sears Video Arcade', 1975),
    (1, 4, '2800', 1983),
    (1, 4, '2600 Jr', 1986);

