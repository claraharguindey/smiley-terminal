// Make connection
const socket = io.connect('http://localhost:4000');

// Query DOM
const output = document.getElementById('output');
let answers;
let packs;

function getAnswersAndPacks () {
    fetch('http://localhost:4000/answers').then((result) => result.json()).then((json) => answers = json);
    fetch('http://localhost:4000/reactions').then((result) => result.json()).then((json) => packs = json);
}



// Listen for events
socket.on('output', function(data) {
    if (data.event === 'buttonClicked') {
        //output.innerHTML = '<p><strong>' + data.event + ': </strong>' + data.value + '</p>';
        output.innerHTML = '<p><strong>' + 'answers' + ': </strong>' + packs + '</p>';
    }
}
);

