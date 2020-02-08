// Make connection
const socket = io.connect('http://localhost:4000');

// Query DOM
const output = document.getElementById('output');

// Listen for events
socket.on('output', function(data){
    output.innerHTML += '<p><strong>' + data.param1 + ': </strong>' + data.param2 + '</p>';
});