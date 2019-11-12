var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));


var io = require('socket.io')(server);

var messages = [];

io.on('connection', function (socket) {
    for(let msg of messages) {
        socket.emit('message', msg);
    }

    socket.on('message', function (msg) {
        messages.push(msg);
        io.emit('message', msg);//FORWARDS MSGS TO CONNECTED SOCKETS
    })
})


server.listen(8080, function () {
    console.log('chat server running');
})