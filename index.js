const path = require('path');
const express = require('express');
const socket = require('socket.io');
const emitter = require('./button-control');
const mysql = require('mysql');
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
        buttonEventEmitter.on('event', (param1, param2) => {
            console.log('param1', param1, 'param2', param2);
            emitEvent(param1, param2)
        })
    ;}
});

function emitEvent(param1, param2) {
    io.sockets.emit('output',  {
        param1,
        param2
    });

}


// Connection with DB
const connection = mysql.createConnection({
    host: "localhost",
    user: "desmusea",
    password: "desmusea2020"
  });
  
  connection.connect(function(err) {
    if (err) { console.log('err')}
    else {
    console.log("Connected!");
 }});