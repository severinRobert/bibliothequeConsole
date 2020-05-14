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

  - Base de données : Tables pour les consoles, marques, portabilité et commentaires.
  - Procédures SQL : Liste d'instructions appellées via un web service dans un JS afin d'ammener des informations dans la page ou de modifier la table.
  - Webservices : 
  - Serveur de fichiers : 
  <!-- serveur central au sein d’un réseau d’ordinateurs qui met des systèmes de fichiers ou, tout du moins, des parties d’un système de fichiers à disposition des clients associés. Les serveurs de fichiers offrent ainsi aux utilisateurs un lieu de stockage centralisé pour les fichiers présents sur leurs propres supports de données, ce lieu étant accessible à tous les clients autorisés-->
  
  - HTML : page comprenant toutes les pages, affichant la page demandée et cachant le reste des pages en attendant ;
  - CSS : site le plus esthétique possible, et le plus ergonomique ; 
  - JS : fonctions appelées lors de l'affichage d'une page ou lors d'un appel de bouton ;
  - Page web : 
  - Fonctionnalités : permet s'inscrire/de se connecter. Egalement de déposer/chercher des tâches, affiner sa recherche de tâche selon differents critères; de mettre des avis/note aux différentes personnes de la communauté, actualiser ses informations; 

# Détail api rest

- Emilien Perremans :
    - tableConsoleHtml : appel la procédure "getTableauConsole"
      - 
      - 
      - 
      
    - tableConsoleHtmlDate : appelle la procédure "getTableauConsoleDate"
      - 
      - 
      - 
     
    -tableConsoleHtmlMarque : appelle la procédure "getTableauConsoleMarque"
      - 
      - 
      - 
      
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
