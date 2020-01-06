const express = require('express');
const socket = require('socket.io');
const emitter = require('./button-control');
const buttonEventEmitter = emitter.buttonEventEmitter;

// App setup
const app = express();
const fs = require('fs');
const server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

const logger = fs.createWriteStream('log.txt', {
    flags: 'a' // 'a' means appending (old data will be preserved)
})

// Static files
app.use(express.static('public'));

// Socket setup & pass server
const io = socket(server);
io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);
    setTimeout(emitEvent, 1500);
});

//button event listener
buttonEventEmitter.on('event', () => {
    console.log('evento registrao bebe!! tamos ready');
});

function emitEvent() {
    io.sockets.emit('chat',  {
        message: 'hey',
        handle:'ho'
    });
    logger.write('some data');
}

