const config = require('../config');
const Victor = require('victor');
const util = require('./Utility');
const handler = require('./Handler');

function Entity(x, y, radius, socket){
    // x and y values are the midpoint of the player
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.midpoint = [
        this.x + this.radius/2,
        this.y + this.radius/2
    ];

    this.speedX = 0;
    this.speedY = 0;
    this.maxSpeed = 300;
    this.maxRadius = 200;

    this.id = util.generateRandomID();
    this.socket = socket;
}
Entity.prototype.updateMidpoint = function(){
    this.midpoint = [this.x + (this.radius), this.y + (this.radius)];
};

Entity.prototype.update = function(){
    this.x += this.speedX;
    this.y += this.speedY;
    this.updateMidpoint();

    if (this.x + this.radius * 2 > config.windowX ){
        this.x = config.windowX - this.radius * 2;
    }
    else if (this.x  < 0){
        this.x = 0;
    }
    if (this.y + this.radius * 2 > config.windowY){
        this.y = config.windowY - this.radius * 2;
    }
    else if (this.y < 0){
        this.y = 0;
    }
};



Entity.prototype.move = function(pack){
    let deadzoneRadius = 10;
    let playerLocation = new Victor(this.midpoint[0], this.midpoint[1]);
    let mouseLocation = new Victor(pack.x + pack.cameraX, pack.y + pack.cameraY);
    let delta  = mouseLocation.subtract(playerLocation);


    // prevents jittering
    if (Math.abs(delta.length()) < deadzoneRadius){

        this.speedX = 0;
        this.speedY = 0;
        return;
    }

    // controlling for the tick rate and maxSpeed
    let magnitude =
        delta.length() < this.maxSpeed ?
        (delta.length() * 60)/1000:
        (this.maxSpeed * 60)/ 1000;
    //
    //              mouse
    //              / |
    //            /   |
    //          /     |
    //        /      -|
    //      /       | |
    // this-----------.
    //
    let theta = Math.atan2(delta.y, delta.x);
    this.speedX = Math.cos(theta) * magnitude;
    this.speedY = Math.sin(theta) * magnitude;
};



module.exports = Entity;