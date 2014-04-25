var express = require('express');
var app = express();

app.use(express.cookieParser());
app.use(express.session({secret: 'demo'}));

// default route
app.get('/', function(req, res) {
      // write session.name
      res.end('Name: ' + req.session.name + '\n');
});

app.get('/set/:name', function(req, res) {
      // set session.name based on url name
      req.session.name = req.params.name;
      res.redirect('/');
});

app.get('/clear', function(req, res) {
      // delete session.name
      delete req.session.name;
      res.redirect('/');
});

app.listen(8080);
