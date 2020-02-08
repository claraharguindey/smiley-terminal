const socket = io.connect('http://localhost:4000');
const output = document.getElementById('output');


socket.on('output', function(data){
    if(data){
    console.log('data', data)
    }
    output.innerHTML += '<p>' + data.param1 + '</p>';
});

