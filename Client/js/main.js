let game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "", {
    preload: preload,
    create: create
});

socket = io();
let graphics;
let players = [];
let mouseLocation = {};

function preload(){
    game.stage.backgroundColor = '#0072bc';
    game.load.image('priest', '../Media/priest.png');
    game.load.image('mage', '../Media/mage.png');
}


function create(){
    socket.emit('ready');
}

