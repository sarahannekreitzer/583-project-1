// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// Marvel API
var api = require('marvel-api');
 
var marvel = api.createClient({
  publicKey: process.env.publicKey
, privateKey: process.env.privateKey
});

marvel.characters.findByName('spider-man')
  .then(function(res) {
    console.log('Found character ID', res.data[0].id);
  })
  .then(function(res) {
    console.log('found %s comics of %s total', res.meta.count, res.meta.total);
    console.log(res.data);
  })
  .fail(console.error)
  .done();

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
