var express = require('express');
var app = express();
var morgan = require('morgan');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
var path = require('path');
var routes = require('./routes');
var models = require('./models');

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCache: true });

app.use(morgan('dev'));

// body parsing middleware
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

models.User.sync({force: true})
.then(function() {
	return models.Page.sync({})
})
.then(function() {
	app.listen(1337, function() {
		console.log('listening on port 1337');
	})
})
.catch((err) => console.error(err));

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', routes);