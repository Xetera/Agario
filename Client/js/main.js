//socket = io();

let graphics;
let players = [];
let mouseLocation = {};
let foods = [];

let scaler;
let backgroundArray = [];
let grid;

State.Main = function(game){};

State.Main.prototype = {
    preload: function () {
        this.stage.backgroundColor = '#0072bc';

    },
    create: function () {
        socket = io();
        //let bg = game.add.sprite(0, 0, 'background');
        //let bg2 = game.add.sprite(0, game.cache.getImage('background').height * 2, 'background');
        //bg.scale.setTo(2, 2);
        //bg2.scale.setTo(2, 2);
        //test()
        let height = game.cache.getImage('background').height;
        let width = game.cache.getImage('background').width;
        /*
        for (let i=0; i < game.world.height; i + height){
            for (let j=0; j < game.world.width; j + width){
                this.add.sprite(j * width, i * height, 'background');
            }
        }
        */
        let background = game.add.tileSprite(0, 0, width * game.width, height * game.height, 'background');

    }
}


$(function (){
    scaler = new Phaser.ScaleManager(game, $(window).width(), $(window).height());
    //game.world.scale.setTo(0.1, 0.1);
});

$(window).resize(function(){
    handleResize();
});
function test(){
    let width  = game.cache.getImage('background').width;
    for (let i=0; i < 2; i++){
        game.add.sprite(width * 2, 0, 'background')
    }
}
function createBackground(){

}
