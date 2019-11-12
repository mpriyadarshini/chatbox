var socket = io();//socket is now a reference to the socket.io library

$('form').submit(function () {
    var initial = $('#initials').val();
    var text = $('#message').val();
    socket.emit('message', `${initial} says: ${text}`);//to emit the textual message to the server
    $('#message').val('');
    return false;//so that another msg can be typed
});
socket.on('message', function (msg) {
    $('<li>').text(msg).appendTo('#history');
});//every time a msg is received from real time web socket connection with the server,create a new <li> HTML element and append it to the msg history <ol>

