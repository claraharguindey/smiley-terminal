var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var fs = require('fs');
var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});
var logger = fs.createWriteStream('log.txt', {
    flags: 'a' // 'a' means appending (old data will be preserved)
})

// Static files
app.use(express.static('public'));

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);
    // Handle chat event
    setTimeout(emitEvent, 1500);
});

function emitEvent(){
    io.sockets.emit('chat',  {
        message: 'hey',
        handle:'ho'
    });
    logger.write('some data');
}

