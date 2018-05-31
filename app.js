const express = require('express'),
      http = require('http'),
      bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/public',  express.static('public'));
app.set('port', process.env.PORT || 3000);

const base = '/views/';

app.get('/', function (req, res) {
  res.sendFile(__dirname + base + 'index.html');
})

app.get('/games', function (req, res) {
  res.sendFile(__dirname + base + 'games.html');
})

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port Number" + app.get('port'));
});