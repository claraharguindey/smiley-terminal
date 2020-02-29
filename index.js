const path = require('path');
const express = require('express');
const socket = require('socket.io');
const emitter = require('./button-control');
const buttonEventEmitter = emitter.buttonEventEmitter;
const routes = require('./routes/routes');

// App setup
const app = express();

routes(app);

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'public/index.html'), {
        headers: {
            'Content-Type': 'text/html',
        }
    });
});

// Static files
app.use('/assets/', express.static(path.resolve(__dirname, 'public')));
app.use('/assets/', express.static(path.resolve(__dirname, 'node_modules/socket.io-client/dist')));

// Socket setup & pass server
const server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});
const io = socket(server);

// Connection check and button event listener
io.on('connection', (socket) => {
    console.log('made socket connection', socket.id);
    if(socket) {
        buttonEventEmitter.on('event', (event, value) => {
            emitEvent(event, value)
        })
    ;}
});

function emitEvent(event, value) {
    io.sockets.emit('output',  {
        event,
        value
    });
}

