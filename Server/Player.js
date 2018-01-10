const Entity = require('./Entity');
const util = require('./Utility');
const handler = require('./Handler');


function Player(x, y, radius, playerClass){
    Entity.call(this, x, y, radius);
    this.class = playerClass;
    this.colliding = false;
    this.worldScale = 1;
}

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function(){
    Entity.prototype.update.call(this);
    for (let i in players){
        // making sure we don't check ourselves
        if (players[i].id === this.id) continue;

        this.colliding = util.checkCollision(this, players[i]);

        // so far this only detects a single collision
        if (this.colliding) break;
    }
    for (let i in foods){
        if (foods.hasOwnProperty(i)){
            let coll = util.checkCollision(this, foods[i]);
            if (coll){
                this.eatFood(foods[i]);
            }
        }

    }
};

Player.prototype.eatFood = function(food){
    let socket = SOCKET_LIST[this.socket];
    if (!(this.radius + food.boost > this.maxRadius)) {
        this.radius += food.boost;
        this.worldScale = this.worldScale * 0.99;
    }

    // for now these two things are the same thing but we
    // might want to separate them later
    this.score += food.boost;
    let index = foods.findIndex(find => {return find.id === food.id});
    foods.splice(index, 1);
    handler.emitPlayer(this, 'playerScaleWorld', this.worldScale);

    handler.emitAll('removeFood', food);
};

module.exports = Player;