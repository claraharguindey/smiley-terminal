const button = require('rpi-gpio-buttons')([3, 5, 29, 31]);
const EventEmitter = require('events').EventEmitter;
const buttonEventEmitter = new EventEmitter();

button.on('clicked', function(pin) {
    console.log(pin, 'clicked');
    const reactions = {
        31: 'red',
        29: 'orange',
        5: 'light green',
        3: 'green'
    }
    buttonEventEmitter.emit('event', reactions[pin], ' button clicked!' );
})

exports.buttonEventEmitter = buttonEventEmitter;