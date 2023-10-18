# Architecture backend - Node

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" alt="Logo Node" width="200"/>

## Table des Matières

- [Installation](#installation)
- [Utilisation](#utilisation)
- [Dépendances](#dépendances)

## Installation

Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé.

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/RzWilliam/node_a4
   ```
2. Accédez au répertoire du projet : 
    ```bash
    cd node_a4
    ```
3. Installez les dépendances :
    ```bash
    npm install
    ```

## Utilisation

1. Lancez l'application avec la commande :
    ```bash
    npm start
    ```

2. Ouvrez un navigateur web et accédez à l'URL suivante : 
    ```bash
    http://localhost:3000
    ```



## Dépendances

### Helmet

J'ai utilisé la bibliothèque `Helmet` pour sécuriser l'application Express. Cela aide à prévenir certaines vulnérabilités web telles que les attaques XSS et l'inclusion de contenu malveillant. `Helmet` est une solution bien établie dans la communauté Node.js pour améliorer la sécurité des applications web.

Pour l'installer, j'ai simplement exécuté la commande suivante :

```bash
npm install helmet
```

### PM2

J'ai également inclus `PM2`, un gestionnaire de processus pour Node.js. `PM2` facilite la gestion des applications, en offrant des fonctionnalités de surveillance, de rechargement à chaud et de déploiement. Voici comment l'installer :

```bash
npm install pm2
```

### Rate-limiter

J'ai intégré `rate-limiter` pour limiter le nombre de requêtes qu'un utilisateur peut effectuer sur certaines routes. Cela aide à prévenir les abus et à maintenir la stabilité du serveur. Voici comment l'installer :

```bash
npm install express-rate-limit
```