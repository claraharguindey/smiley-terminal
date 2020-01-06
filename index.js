const path = require('path');
const express = require('express');
const socket = require('socket.io');
const emitter = require('./button-control');
const buttonEventEmitter = emitter.buttonEventEmitter;

// App setup
const app = express();
app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'public/index.html'), {
        headers: {
            'Content-Type': 'text/html',
        }
    });
});

const fs = require('fs');


const logger = fs.createWriteStream('log.txt', {
    flags: 'a' // 'a' means appending (old data will be preserved)
})

// Static files
app.use('/assets/', express.static(path.resolve(__dirname, 'public')));
app.use('/assets/', express.static(path.resolve(__dirname, 'node_modules/socket.io-client/dist')));

// Socket setup & pass server
const server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});
const io = socket(server);


//button event listener


function emitEvent() {
    io.sockets.emit('chat',  {
        message: 'hey',
        handle:'ho'
    });
    logger.write('some data');
}


io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);
    if(socket)
{ buttonEventEmitter.on('event', () => {
    emitEvent()
});}
});