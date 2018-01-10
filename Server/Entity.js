const config = require('../config');
const Victor = require('victor');
const util = require('./Utility');
const handler = require('./Handler');

function Entity(x, y, radius){
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
}
Entity.prototype.updateMidpoint = function(){
    this.midpoint = [this.x + (this.radius), this.y + (this.radius)];
};

Entity.prototype.update = function(){
    this.x += this.speedX;
    this.y += this.speedY;
    this.updateMidpoint();

    if (this.x + this.radius >= config.windowX ){
        this.x = config.windowX - this.radius;
    }
    else if (this.x - this.radius < 0){
        this.x = 0 + this.radius;
    }
    if (this.y + this.radius >= config.windowY){
        this.y = config.windowY - this.radius;
    }
    else if (this.y - this.radius < 0){
        this.y = 0 + this.radius;
    }
};



Entity.prototype.move = function(mouse){
    let playerLocation = new Victor(this.x, this.y);
    let mouseLocation = new Victor(mouse.x, mouse.y);
    let delta  = mouseLocation.subtract(playerLocation);

    // prevents jittering
    if ((Math.abs(delta.x) - 1 < 1) && (Math.abs(delta.y) -1 < 1)){
        this.speedX = 0;
        this.speedY = 0;
        return
    }

    // controlling for the tick rate and maxSpeed
    let magnitude =
        delta.length() < this.maxSpeed ?
        (delta.length() * 60)/1000:
        (this.maxSpeed * 60)/ 1000;
    //            .
    //          / |
    //        /   |
    //      /     |
    //    /      -|
    //  /       | |
    //.-----------.
    let theta = Math.atan2(delta.y, delta.x);
    this.speedX = Math.cos(theta) * magnitude;
    this.speedY = Math.sin(theta) * magnitude;
};


// eating will be separated into 2 different functions
Entity.prototype.eatFood = function(food){
    if (!(this.radius + food.boost > this.maxRadius)) {
        this.radius += food.boost;
    }
    // for now these two things are the same thing but we
    // might want to separate them later
    this.score += food.boost;
    let index = foods.findIndex(find => {return find.id === food.id});
    foods.splice(index, 1);



    handler.emitAll('removeFood', food);
};

module.exports = Entity;