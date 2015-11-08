var express = require('express');
var app = express();
var middleware = require('./middleware.js');

var port = 3000;

app.use(middleware.logger);
//app.use(middleware.requireAuthentication);

app.get('/about', middleware.requireAuthentication, function(req, res) {
	res.send('About Us !');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {console.log('Express server started on port: ' + port);});