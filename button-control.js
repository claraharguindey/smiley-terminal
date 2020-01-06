const { Gpio } = require( 'onoff' );
const button = new Gpio( 3, 'in' );
const EventEmitter = require('events').EventEmitter;
const buttonEventEmitter = new EventEmitter();


button.watch((err, value) => {
    if (err) {
        throw err;
    }
    console.log('click registrado en el controller del boton', value);
    myEmitter.emit('event');
});

exports.buttonEventEmitter = buttonEventEmitter;