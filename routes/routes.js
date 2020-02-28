const pool = require('../data/config');

const router = app => {
    app.get('/', (request, response) => {
        response.send(
            'Valora tu experiencia'
        )
    })

    app.get('/reactions', (request, response) => {
        pool.query("SELECT * FROM reactions_pack", (err, reactions) => {
            if (err) {
                console.log('err', err);
            } else {
                response.send(reactions);
            }
         })  
         console.log("Connected to DB!");
    })

    app.get('/reactions/:id', (request, response) => {
      const id = request.params.id;
      
      pool.query("SELECT * FROM reactions WHERE id = ?", id, (err, reaction) => {
            if (err) {
                console.log('err', err)
            } else {
                response.send(reaction);
            }
         })  
    })

    app.post('/reactions', (request, response) => {
        pool.query('INSERT INTO answers SET ?', request.body, (error, result) => {
            if (err) {
                console.log('err', err)
            } else {
                response.status(201).send(`answer added with ID: ${result.id}`);
            }
        })
    })
}

module.exports = router;
