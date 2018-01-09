const config = require('../config');
const Victor = require('victor');
const util = require('./Utility');
function Entity(x, y, radius){
    // x and y values are the midpoint of the player
    this.x = x + radius/2;
    this.y = y + radius/2;
    this.speedX = 0;
    this.speedY = 0;
    this.maxSpeed = 300;
    this.radius = radius;
    this.id = util.generateRandomID();
}

Entity.prototype.update = function(){
    this.x += this.speedX;
    this.y += this.speedY;
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
    let magnitude = delta.length() < this.maxSpeed ? (delta.length() * 60)/1000 : (this.maxSpeed * 60)/ 1000;
    let theta = Math.atan2(delta.y, delta.x);
    this.speedX = Math.cos(theta) * magnitude;
    this.speedY = Math.sin(theta) * magnitude;
    //this.speedX = Math.cos(vec.x);
    //this.speedY = Math.sin(vec.y);

};

Entity.prototype.eatFood = function(food){
    this.radius += food.boost;
    // for now these two things are the same
    this.score += food.boost;
    foods.splice(foods.indexOf(food), 1);
};

module.exports = Entity;