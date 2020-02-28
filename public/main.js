// Make connection
const socket = io.connect('http://localhost:4000');

// Query DOM
const output = document.getElementById('output');

// Listen for events
socket.on('output', function(data){
    if (data.event === 'buttonClicked') {
        output.innerHTML = '<p><strong>' + data.event + ': </strong>' + data.value + '</p>';
    }
});

