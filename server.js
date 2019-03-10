// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();
var fs = require('fs');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html --> get app piece 
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// Marvel API + Key
var api = require('marvel-api');
 
var marvel = api.createClient({
  publicKey: process.env.publicKey
, privateKey: process.env.privateKey
});

// Make an API Call. Pulling data and logging it in the console

return new Promise(function(resolve, reject) {

 fs.writeFile(‘characters.json’, JSON.stringify(data.data, 	null, 2), err => {
	if(err) reject(err),
		else resolve( ); 
		console.log(‘hi there we did it’);

});



marvel.characters.findByName('spider-man')
  .then(function(res) {
    console.log('Found character ID', res.data[0].name, res.data[0].id); 
  })
  .fail(console.error)
  .done();

// listen for requests 
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});


