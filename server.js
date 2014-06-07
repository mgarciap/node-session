var express = require('express');
var app = express();

app.use(express.cookieParser());
app.use(express.session({secret: 'demo'}));

// default route
app.get('/', function(req, res) {
      // write IP address app instance container and session.name
      res.write('Container Port:' + process.env.VCAP_APP_PORT +'\n');

      // write session.name
      res.write('Name: ' + req.session.name + '\n\n');
      res.end('VCAP_APPLICATION environment variables: ' + '\n' + process.env.VCAP_APPLICATION)
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

app.listen(process.env.VCAP_APP_PORT || 3000);
