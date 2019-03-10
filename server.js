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

 marvel.characters.findAll()
  .then(function(data) {
    // console.log(data.data);
    return new Promise(function(resolve, reject){
      fs.writeFile('characters.json', JSON.stringify(data.data, null, 2), (err) => {
      if(err) reject (err);
        else resolve();
        console.log('characters found');

      });
    });
      
  })
  .fail(console.error) 
  .done();


  marvel.series.findAll()
  .then(function(data) {
    // console.log(data.data);
    return new Promise(function(resolve, reject){
      fs.writeFile('series.json', JSON.stringify(data.data, null, 2), (err) => {
      if(err) reject (err);
        else resolve();
        console.log('series found');

      });
    });
      
  })
  .fail(console.error) 
  .done();


marvel.characters.comics('1011334')
  .then(console.log)
  .fail(console.error)
  .done();

app.get('/characters', function(request, response) {
  response.sendFile(__dirname + '/characters.json');

});

app.get('/creators', function(request, response) {
  response.sendFile(__dirname + '/creators.json');
});

app.get('/series', function(request, response) {
  response.sendFile(__dirname + '/series.json');
});

 

/*marvel.characters.findByName('spider-man')
  .then(function(res) {
    console.log('Found character ID', res.data[0].name, res.data[0].id); 
  
      return new Promise(function(resolve, reject) { 
      fs.writeFile("./spider-man.json", JSON.stringify(res.data[0], null, 2), (err) => {
        if (err) reject(err);
        else resolve();
        console.log('Spidey has been made');
      });
    });    
  })
  .fail(console.error)
  .done(); */


// listen for requests. KEEP AT BOTTOM
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});


