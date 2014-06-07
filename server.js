var express = require('express');
var app = express();
var RedisStore = require('connect-redis')(express);

app.use(express.cookieParser());


// This can be parsed easily with https://www.npmjs.org/package/cfenv
// Doing it this way to go into details
var vcap_services = JSON.parse(process.env.VCAP_SERVICES)
var credentials = vcap_services.rediscloud[0].credentials
var host = credentials.hostname
var port = credentials.port
var user = credentials.user
var password = credentials.password
var redis_url = 'redis://' + ':' + password + '@' + host + ':' + port


app.use(express.session({
//    store: new RedisStore({ url: redis_url + '/0' }),
    store: new RedisStore({ url: redis_url}),
    secret: 'demo'
}));

// default route
app.get('/', function(req, res) {
      // write session.name
      res.write('Name: ' + req.session.name + '\n\n');

      // ENV variables
      // write IP address app instance container and session.name
      res.write('Container Port:' + process.env.VCAP_APP_PORT +'\n');

      res.write('redis_url: ' + redis_url + '\n\n');
      res.write('VCAP_APPLICATION environment variables: ' + '\n' + process.env.VCAP_APPLICATION + '\n\n');
      res.end('VCAP_SERVICES environment variables: ' + '\n' + process.env.VCAP_SERVICES)
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
