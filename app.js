/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/public');
  app.set('view engine', 'html');
  app.engine('html', require('ejs').renderFile);
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// Single Page Application: only load the index page
app.get('/', function(req, res){ res.render('index') });

// Start the server
var server = http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

// Listen to websocket connections
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    socket.on('request', function (data) {
        var uniqId     = data.uniqId;
        var controller = data.controller;
        var action     = data.action;
        var data       = data.data;

        // Load the proper controller and action
        var controller = require('./controllers/' + controller);
        controller[action](data, function(result){
            socket.emit(uniqId, result);
        });
    });
});
