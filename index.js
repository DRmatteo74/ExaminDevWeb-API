// Importation du module `http` depuis Node.js
// http permet de créer un serveur http
const http = require('http');

// Création du serveur HTTP
const server = http.createServer();

// Démarrage du serveur sur le port 3000
server.listen(3000);