// Importation du module `http` depuis Node.js
// http permet de créer un serveur http
const http = require('http');

// Importation du module `express` depuis Node.js
// express permet de créer des routes, des middlewares ...
const express = require('express');

const app = express();

const meteoParisRoute = require('./routes/paris');
const meteoLyonRoute = require('./routes/lyon');
const postRoute = require("./routes/posts");

app.use(meteoLyonRoute);
app.use(meteoParisRoute);
app.use(postRoute);

app.use((req, res, next) => {
    console.log('Middleware 1!');
    res.status(500).send({ error: 'Something failed!' });
    next(); // Permet à la requête de continuer vers le prochain middleware
});

app.use((req, res, next) => {
    console.log('Middleware 2!');
    const promesse = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('toto');
        }, 1000);
    });

    promesse.then((valeur) => { console.log(valeur)});
    res.send('<h1>Météo France</h1>'); 
});


// Création du serveur HTTP
const server = http.createServer(app);

// Démarrage du serveur sur le port 3000
server.listen(3000);