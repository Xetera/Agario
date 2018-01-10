//socket = io();

let graphics;
let players = [];
let mouseLocation = {};
let foods = [];

let scaler;
let background;
State.Main = function(game){};

State.Main.prototype = {
    preload: function(){
    },
    create: function(){
        background = this.add.group();
        this.add.tileSprite(0, 0, 10000, 10000, 'background');
        socket = io();
    }
};


$(function (){
    scaler = new Phaser.ScaleManager(game, $(window).width(), $(window).height());
    //game.world.scale.setTo(0.1, 0.1);
});

$(window).resize(function(){
    handleResize();
});

function drawBackground(){
    for (let column = 0; column < map.columns; column++) {
        for (let row = 0; row < map.rows; row++) {
            let tile = map.getTile(column, row);
            let x = column * map.tileSize;
            let y = row * map.tileSize;
            drawTile(tile, x, y);
        }
    }

}
