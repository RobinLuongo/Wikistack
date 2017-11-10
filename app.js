var express = require('express');
var app = express();
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var path = require('path');


app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCache: true });

app.use(morgan('dev'));

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

var server = app.listen(1337, function(){
  console.log('listening on port 1337');
});

app.use(express.static(path.join(__dirname, '/public')));
