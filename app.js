const express = require('express'),
      bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/public',  express.static('public'));


const base = '/views/';

app.get('/', function (req, res) {
  res.sendFile(__dirname + base + 'index.html');
})

app.get('/games', function (req, res) {
  res.sendFile(__dirname + base + 'games.html');
})

var server = app.listen( process.env.PORT || 3000, function(){
  console.log('Listening on port ' + server.address().port);
});