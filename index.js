var express = require('express');
var socket = require('socket.io');
var Gpio = require('onoff').Gpio;
var pushButton = new Gpio(3, 'in', 'both');


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
    pushButton.watch(function (err, value) { //Watch for hardware interrupts on pushButton
        if (err) { //if an error
          console.error('There was an error', err); //output error message to console
        return;
        }
        emitEvent();
    });
});

function emitEvent(){
    io.sockets.emit('chat',  {
        message: 'hey',
        handle:'ho'
    });
    logger.write('some data');
}

