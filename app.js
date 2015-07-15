var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response, next) {
  response.sendFile(__dirname + '/index.html');
});

io.on('connection', function(client) {
  client.broadcast.emit('client connected');

  client.on('join', function(data) {
    client.emit(data);
  });

  client.on('post-it-1', function(data){
    io.sockets.emit('new-post-it-1', data);
  });

  client.on('post-it-2', function(data){
    io.sockets.emit('new-post-it-2', data);
  });

    client.on('post-it-3', function(data){
    io.sockets.emit('new-post-it-3', data);
  });

  client.on('title-1', function(data){
    io.sockets.emit('new-title-1', data);
  });

  client.on('title-2', function(data){
    io.sockets.emit('new-title-2', data);
  });

  client.on('title-3', function(data){
    io.sockets.emit('new-title-3', data);
  });
});

server.listen(process.env.PORT || 8080);