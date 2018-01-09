//socket = io();

let graphics;
let players = [];
let mouseLocation = {};
let foods = [];

State.Main = function(game){

};

State.Main.prototype = {
    preload: function(){
    },
    create: function(){
        this.stage.backgroundColor = '#0072bc';
    }
};

function preload(){


}


function create(){
    socket = io();
}

function listener(){

}

