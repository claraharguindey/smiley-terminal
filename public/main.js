// Make connection
const socket = io.connect('http://localhost:4000');

// Query DOM
const output = document.getElementById('output');

// Listen for events
socket.on('chat', function(data){
    console.log(data)
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});