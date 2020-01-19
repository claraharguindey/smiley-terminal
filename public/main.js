const socket = io.connect('http://localhost:4000');
const output = document.getElementById('output');
const counter = 0;
const reactionSets = {
    first: this.first,
    second: this.second
}
const currentSet = this.first;

socket.on('output', function(data){
    if(data){
        this.counter ++
        if(this.counter === 5) {
            this.changeReactionSet(this.currentSet);
        }
    }
    output.innerHTML += '<p>' + this.currentSet[this.counter] + '</p>';
});

function changeReactionSet(set) {
    switch(set) {
        case this.first:
        this.currentSet = this.second;
        this.counter = 0;
        break;
        case this.second:
        this.currentSet = this.first;
        this.counter = 0;
        break;
    }
}

const first = ["Exposición con una falta de concepto absoluta", "Exposición súper aburrida", "hola 2x2=4 x 2 = 8 x 2 = 16 x 2 =32 x 2 = 64 x 2 = 128 x 2 = 256 x 2 = 512 x 2 = 1024 #XD #lol #turn down for what Ahora en serio dejando las matemáticas me gustó #LOL", "No nos ha gustado nada. Es un grito a la opulencia reflejando la injusta diferencia entre los seres humanos. Unos pocos tanto y otros…. muriéndose de hambre literalmente. Pero la exposición de Origami muy bonita"]
const second = ["Exposición con una falta de concepto absoluta", "Exposición súper aburrida", "hola 2x2=4 x 2 = 8 x 2 = 16 x 2 =32 x 2 = 64 x 2 = 128 x 2 = 256 x 2 = 512 x 2 = 1024 #XD #lol #turn down for what Ahora en serio dejando las matemáticas me gustó #LOL", "No nos ha gustado nada. Es un grito a la opulencia reflejando la injusta diferencia entre los seres humanos. Unos pocos tanto y otros…. muriéndose de hambre literalmente. Pero la exposición de Origami muy bonita"]
