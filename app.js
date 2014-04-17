
/* global console, require, process, __dirname */

var express = require('express'),
    mongoose = require('mongoose'),
    routes = require('./routes'),
    post = require('./routes/post'),
    http = require('http'),
    path = require('path'),
    app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.session({ secret: 'Do not panick' }));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.csrf());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// CSRF middleware
function csrf(req, res, next) {
  res.locals.token = req.session._csrf;
  next();
}

// Connect to the database
mongoose.connect('mongodb://localhost/simpleblog');

// Define the routes
app.get('/', routes.index);
app.get('/post', post.findAll);
app.get('/post/new', post.new);
app.get('/post/:id', post.find);

app.post('/post', csrf, post.create);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
