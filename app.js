// Require Express
const express = require('express');
 
// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));
 
// testing basic route:
app.get('/', (request, response, next) => response.send('<h1>Basic route working</h1>'));
 
// Server Started
app.listen(3000, () => console.log('Listening on port 3000! '));