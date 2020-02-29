// Make connection
const socket = io.connect('http://localhost:4000');

// Query DOM
const output = document.getElementById('output');
const routes = require('./routes/routes');

// App setup
const app = express();

routes(app);



// Listen for events
socket.on('output', function(data){
    if (data.event === 'buttonClicked') {
        output.innerHTML = '<p><strong>' + data.event + ': </strong>' + data.value + '</p>';
    

    app.post('/results', (request, response) => {
        pool.query('INSERT INTO results SET ?', request.body, (error, result) => {
            if (err) {
                console.log('err', err)
            } else {
                response.status(201).send(`answer added with ID: ${result.id}`);
            }
        })
    })
    }
});

