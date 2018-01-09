const util = require('./Utility');


function Pickup(x, y){
    this.x = x;
    this.y = y;
    this.xSpeed = 0;
    this.ySpeed = 0;
    this.radius = 10;
    this.midpoint = this.getMidpoint();
    this.id = util.generateRandomID();
}

Pickup.prototype.getMidpoint = function(){
    return [this.x + (this.size/2), this.y + (this.size/2)]
};


Pickup.update = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    // we don't want t o
};


function Food(x, y, boost){
    Pickup.call(this, x , y);
    this.boost = boost;
    this.magnetized = false;
}

Food.prototype = Object.create(Pickup.prototype);
Food.prototype.constructor = Food;


module.exports = {
    Pickup: Pickup,
    Food: Food
};
