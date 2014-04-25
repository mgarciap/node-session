var express = require('express');
var app = express();

app.use(express.cookieParser());
app.use(express.session({secret: 'demo'}));

// default route
app.get('/', function(req, res) {
      // return session.name if exist, otherwise return 'Not Set'
      var sname = (typeof req.session.name != 'undefined' && req.session.name != '') ? req.session.name : 'Not Set';
      res.end('Name: ' + sname + '\n');
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
