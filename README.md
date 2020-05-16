# bibliothèque de console 1TM1

# Présentation de l'équipe
Séverin Robert (HE201811), Émilien Perremans (HE201859), Arthur Behets (), Baptiste Funck ()

# Description du projet
  - BESOIN DU CLIENT
  
Le site permet au client d'interagir avec une base de données de consoles de jeux



  - FONCTIONNALITÉS PRINCIPALES
  
    - recherche de console.    
    - ajout de console.
    - commenter le site.
    

# Aspects implémentés

  - Base de données : Tables pour les consoles, marques, portabilité et commentaires ;
  - Procédure SQL : permet de chercher / modifier la base de données ;
  - Webservice : appelle les procédures adéquates ;
  - HTML : structure du site implémentant les différentes parties utiles (recherche,ajout,commentaire) ;
  - CSS : site le plus esthétique possible et facile à l'utilisation ; 
  - JS : fonctions appelées au chargement de la page et lors de soumission de formulaire ;
  - Fonctionnalités : rechercher et ajouter dans la base de données, commenter le site et voir les commentaire des autres utilisateurs ; 

# Détail api rest

- Emilien Perremans :
    - tableConsoleHtml : appel la procédure "getTableauConsole"
      - Paramètre : il demande à la base de donnée les réponses choisies par l'utilistaeur.
      - Format de réponse : Renvoi un tableau avec les données encodées dans la base.
    - tableConsoleHtmlDate : appelle la procédure "getTableauConsoleDate"
      - Paramètre : demande à l'utilisateur la date à laquelle la console a été créée et renvoi une réponse.
      - Format de réponse : si le champs date est incorrecte ou vide un message d'erreur s'affiche "champs date ignoré" et renvoi la table de la console en entier.
    -tableConsoleHtmlMarque : appelle la procédure "getTableauConsoleMarque"
      - Paramètre : demande la marque.
      - Format de réponse : si la marque n'est pas encore dans la base de donnée un message dit "la marque .. n'as pas de console ou aucune console de cette marque existe. 
      
- Séverin Robert :    
    - verifExiste : appelle la procédure verifExiste(:pModele)
      - Paramètres : Le modèle écrit par l'utilisateur 
      - Format de réponse : Renvoie une chaine vide si le modèle n'existe pas encore et dans le cas contraire renvoie le nom du modèle
      - Endpoint  : Permet de vérifier si le modèle existe déjà pour éviter de faire des doublons.
                
    - verifMarque : appelle la procédure verifMarque(:pMarque)
      - Paramètres : La marque encodée par l'utilisateur
      - Format de réponse : Renvoie une chaine vide si la marque n'existe pas encore et dans le cas contraire renvoie le nom de la marque
      - Endpoint  : Permet de vérifier si la marque existe déjà si ce n'est pas le cas le js appelle le service ajoutMarque.
      
    - ajoutMarque : appelle la procédure ajoutMarque(:pMarque)
      - Paramètres : La marque encodée par l'utilisateur
      - Format de réponse : Pas de réponse -> Modifie la table 
      - Endpoint  : Ajoute la marque encodée par l'utilisateur appelle tableauMarque pour l'ajouter en option dans les recherches. 
                    
    - tableauMarque : appelle la procédure tableauMarque()
      - Paramètres : / 
      - Format de réponse : Renvoie un tableau JSON avec les marques
      - Endpoint  : Permet de rajouter l'option de la nouvelle marque dynamiquement dans le html pour la recherche dans la base de données.
              
    - idMarque : appelle la procédure getIdMarque(:pMarque)
      - Paramètres : La marque encodée par l'utilisateur
      - Format de réponse : Renvoie l'id de la marque encodée par l'utilisateur
      - Endpoint  : Permet par la suite de rajouter la console dans la base de données.
           
    - ajoutConsole : appelle la procédure ajoutConsole(:pIdMarque,:pAnnee,:pIdPortabilite,:pModele)
      - Paramètres : L'année et le modèle encodé par l'utilisateur et l'id de la marque et de la portabilité qui ont été calculé par avant en SQL et JS.
      - Format de réponse : Pas de réponse -> Modifie la table 
      - Endpoint  : Permet de rajouter la console dans la base de données.           
                
- Arthure :
   
               
  
# Détail DB
![graphiqueER](graphiqueER.png)
- Table des marques (contient les marques et leurs id) :
    - idMarque représente la PK de la table ;
    - nomMarque représente le nom de la marque ;
    
- Table des consoles (contient l'id des consoles, portabilite, marques, le nom modele et l'annee) :
    - idConsole qui représente la PK de la table, l'identifiant de la console ;
    - idPortabilite est l'id de portabilite ;
    - idMarque est l'id de la marque ;
    - modele est le nom du modele de la console ;
    - annee est l'annee de la console ;pour la durée d'une tâche ;
    
- Table des portabilités (contient le type de portabilité et son id) :
    - idPortabilité représente la PK de la table ;
    - typePortabilite représente le type de portabilite de la console (fixe/portable) ;
    
- Table des commentaires (contient l'id des commentaires et les commentaires) : 
    - idComment l'id unique de chaque commentaires ;
    - commentaire est le commentaire laissé par l'utilisateur ;
