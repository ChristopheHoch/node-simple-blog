# node-simple-blog

Atelier organisé à [Norsys][1] ayant pour but de créer un blog en utilisant Node.js, Express 3 et MongoDB.

## 1. Hello Express!
La première étape consiste à installer Express.js globalement sur le système puis de s'en servir pour générer un squelette d'application node.js.
```
npm install -g express@3.4.8
express simple-blog
cd simple-blog
npm install
```

Une fois ceci fait il suffit de lancer la commande suivant pour démarrer un serveur:
```
node app
```

Par défaut, Express est configuré pour utilisé le port 3000. L'application que vous venez de démarrer est accessible l'adresse suivante: [localhost:3000][2]

### 1.1. Que mon serveur s'exécute pour toujours...
Un outil supplémentaire peut être installé pour surveiller tout changement dans les fichiers du projet et redémarrer automatiquement le serveur pour les appliquer.
```
npm install -g nodemon
```

Pour utiliser cet outil, il suffit de démarrer le serveur avec la ligne suivante:
```
nodemon app
```

## 2. Configurer le modèle de donnée
La base de donnée que nous allons utiliser pour cet atelier est MongoDB. Afin d'en simplifier l'utilisation, nous allons utiliser [Mongoose][3].

1. Utilisez [la documentation rapide][4] pour connecter votre serveur node à votre base de donnée.
2. Créez un modèle de donnée simple pour contenir les données d'un billet de blog. Un billet contient au minimum un titre et un contenu.

## 3. Créer un billet
Nous allons ici créer une route dans Express répondant aux requêtes de type `POST /post` permettant de créer un nouveau billet et de le persister en base.

Les routes se définissent très simplement dans express grâce à une fonction qui prend le nom de la methode http souhaitée:
```
app.post('/post', function(req, res) {
    // Insérer votre code ici

});
```

1. Récupérez les données dans le corps de la requête POST (req.body) pour créer un nouvel objet Billet.
2. Persistez cet objet en base et renvoyez l'objet ainsi créé en réponse à la requête

## 4. Afficher la liste des billets
Maintenant que nous avons des billets dans la base de donnée, il ne reste qu'à les afficher sur la page principale. Pour cela, nous allons utiliser les possibilités du langage de template [jade][5], utilisé par défaut avec Express

1. Modifiez la route `GET /` pour renvoyer tous les billets du blog dans un objet JSON.
2. Modifiez la vue _index.jade_ pour afficher la liste des billets. Vous aurez à utiliser l'instruction `each` de jade.

## 5. Afficher un billet
La prochaine étape est de permettre l'affichage d'un billet du blog en particulier à partir de la page principale.

1. Créez une route `GET /:id` et utilisez l'_id_ en paramètre pour rechercher le billet dans la base. Vous pouvez utiliser la fonction `findById` de Mongoose. La route doit renvoyer vers un nouveau template _post.jade_ qui servira a afficher le billet.
2. Modifiez la page principale pour associer un lien vers la route créé pour chacun des billet affiché.

## 6. Créer un billet (bis)
Maintenant que l'affichage des billets est fonctionnel, il est temps de créer un page permettant de créer un billet sans avoir à passer par une API REST.

1. Créez une nouvelle page avec un formulaire permettant la création de billet et utilisant la route existante `POST /post`.
2. Modifiez la route `POST /post` pour retourner la page affichant le bille nouvellement créé.

## 7. Mettre à jour un billet (BONUS)
Créez une page permettant de mettre à jour un billet existant. Encore une fois, Mongoose fourni une fonction permettant de simplifier la tache: `findByIdAndUpdate`.

## 8. Supprimer un billet (BONUS)
Ajoutez un lien permettant de supprimer un billet existant.

[1]: http://www.norsys.fr/
[2]: http://localhost:3000
[3]: http://mongoosejs.com/
[4]: http://mongoosejs.com/docs/index.html
[5]: http://jade-lang.com/
