const button = require('rpi-gpio-buttons')([3, 11, 29, 33]);
const EventEmitter = require('events').EventEmitter;
const buttonEventEmitter = new EventEmitter();

button.on('clicked', function(pin) {
    console.log(pin, 'clicked');
    switch(pin){
        case 3:
            buttonEventEmitter.emit('event', 'reacción 3 registrada', '😡');
        case 11:
            buttonEventEmitter.emit('event', 'reacción 11 registrada', '🧚‍♀️');
        case 29:
            buttonEventEmitter.emit('event', 'reacción 29 registrada', '🐷');
        case 33:
            buttonEventEmitter.emit('event', 'reacción 33 registrada', '🐤');
    }
})

exports.buttonEventEmitter = buttonEventEmitter;