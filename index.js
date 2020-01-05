var express = require('express');
var socket = require('socket.io');
var rpi_gpio_buttons = require('rpi-gpio-buttons');
var buttons = rpi_gpio_buttons([3]);
var count = 0;

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
    setTimeout(emitEvent, 1500);
});
// Handle button event
buttons.on('clicked', function(){
    emitEvent();
})

function emitEvent(){
    io.sockets.emit('chat',  {
        message: 'hey',
        handle:'ho'
    });
    logger.write('some data');
}

