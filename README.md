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
La liste des aspects techniques qu'il faut implémenter pour mettre en place le projet, en séparant les aspects backend (base de données, procédures SQL, webservices, serveur de fichiers) et les aspects frontend (html, css, js, page web et fonctionnalités à proposer aux utilisateurs). ???

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
endpoint = ce que fait ta procédure, son but, que fait-elle
format = ce qu'elle renvoie en quel format etc /!\ faire du français pas juste mettre les noms des colonnes
param = mm chose, que prend la procédure

- Aurélien Brille :
    - receiveData : appelle la procédure "inscription"
      - Paramètres : ce service prend 9 paramètres en compte lors de l'inscription via le syte HTML. Le nom, prénom, nom d'utilisateur, mail, téléphone, ville, naissance, mot de passe, mot de passe de confirmation et couleur de l'avatar.
      - Format de réponse : Ne renvoi rien.
      - Endpoint  : ajoute dans la table dba.communaute, un nouvelle ligne contenant toutes les informations de la nouvelle personne inscrite sur base des données fournies.
      
    - serv_connexions : appelle la procédure "proc_connexion"
      - Paramètres : les deux paramètre de ce service sont reçu lors de la connexion, le service reçoit le nom d'utilisateur et le mot de passe de l'utilisateur.
      - Format de réponse : renvoi en JSON un tableau contenant (ou non) le nom d'utilisateur et le mot de passe entré par la personne qui correspond (ou non) à  "idCom VARCHAR(16) NOT NULL" et "mdp VARCHAR(20) NOT NULL" d'une même ligne dans la table dba.communaute.
      - Endpoint  : permet une vérification du nom d'utilisateur et du mot de passe entré, en cas d'erreur, renvoi un tableau vide (tableau.length = 0 = false) en cas de concordance, renvoi un tableau de longueur 1 (tableau.length = 1 = true) et l'utilisateur est connecté.
 
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
                
       

           
                
- Clémentine Sacré :
    - serv_donnees (appelle procédure "donnee"):
      - Paramètres : /
      - Format de réponse : renvoie en JSON le nom (varchar de 30) de toutes les personnes, ainsi que leur prénom (varchar de 30), leur photo (varchar de 50), leur portrait (varchar de 120) et leur cote (entier entre 0 et 10) afin de pouvoir afficher un pré-profil de chaque personne inscrite. Leur id (varchar de 16) est également renvoyé afin de pouvoir accéder à une autre page plus développée sur chacun d'eux ;
      - Endpoint  : Retrouve les données utiles pour la page communauté et les renvoie ;
 
 - Noelle Khazoum :
    - serv_aff :(appelle la procédure "proc_aff")
      - Paramètres : /
      - Format de réponse : 1) dans la page TACHE; envoie en JSON la tache (LONG VARCHAR), sa description, details (long varchar) et les informations de la personne concernée (nom (varchar(50), prenom (varchar(50), mail (varchar (60), telephone (vARCHAR (15)), ville (vARCHAR(50)).
      2) dans la page Affiner; envoie en JSON les iformations triés par categorie (varchar (30)) avec la tache (long varchar), par nom (varchar (50)) et par ville (varchar (50)).
      - Endpoint  : Affiche dans les pages Tache et Affiner les taches et les informations liées. 
                
    - serv_ajouterTask : (appelle la procédure "proc_ajouterTask)
      - Paramètres : prend en paramètres la nouvelle tache ajoutée, sa catégorie, sa description et l'id de la personne qui a ajouté cette tâche. 
      - Format de réponse : pas de reponse.
      - Endpoint  : Crée une nouvelle ligne dans la base de donnée.
               
  
# Détail DB
![](photo/image.png)
- Table des villes (contient 6 villes et leur code postal attitré) :
    - postal représente la PK de la table, qui représente le code postal d'une ville, en chiffre ;
    - ville représente le nom de la ville ;
    
- Table de la communauté (toutes les informations sur les personnes inscrites) :
    - idCom qui représente la PK de la table, l'identifiant de l'utilisateur, c'est le nom qu'il utilise pour se connecter ;
    - mdp représente le mot de passe que l'utilisateur utilise pour pouvoir se connecter au site ;
    - nom représente le nom de l'utilisateur ;
    - prenom représente le prénom de l'utilisateur ;
    - sexe représente le sexe de l'utilisateur ;
    - telephone représente le n° de téléphone de l'utilisateur, c'est par là que la communauté communique pour engager le travailleur pour la durée d'une tâche ;
    - mail représente le mail de l'utilisateur, autre moyen utilisé par la communauté pour communiquer entre elle ;
    - anniversaire représente l'anniversaire de la personne, ce qui permet de connaitre son âge ;
    - photo représente une photo de la personne. Il y a également des photos par défaut si la personne n'en a pas d'elle ;
    - portrait représente une courte description de l'utilisateur afin que la communauté en sache un peu plus sur lui ;
    - postal représente une FK dans la table et renvoie donc le code postal de la ville dans laquelle l'utilisateur habite vit ;
    - cote représente une note donnée par le reste de la communauté à l'utilisateur selon la qualité de ce qu'il fait (travail ou engage), ce qui permet d'avoir un premier appriori quant à la manière de faire de l'utilisateur  ;
    
- Table des tâches (toutes les tâches disponibles sur le site) :
    - idCom représente une FK dans la table, c'est l'identifiant de l'utilisateur qui propose la tâche ;
    - tache représente le nom de la tâche proposée par l'utilisateur ;
    - details représente une description brève de la tâche proposée par l'utilisateur ;
    - idCar représente une FK dans la table, c'est l'identifiant de la catégorie de tâche que l'utilisateur a proposé ;
    
- Table des commentaires (avis que certaines personnes laissent à d'autres personnes) : 
    - idCom représente une FK dans la table, c'est l'identifiant de la personne chez qui on laisse le commentaire ;
    - commentaire représente un avis laissé repar un autre utilisateur, ce qui permet à la communauté d'avoir un avis sur l'utilisateur, positif ou négatif ;
    - auteur représente l'identifiant de la personne qui écrit le commentaire ;
    
- Table des catégories (les différentes catégories de tâches existantes) : 
  - idCar représente l'identifiant d'une catégorie de tâche ;
  - categorie représente le nom de la catégorie ;
