const Entity = require('./Entity');
const util = require('./Utility');

function Player(x, y, radius, playerClass){
    Entity.call(this, x, y, radius);
    this.class = playerClass;
    this.colliding = false;
}

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function(){
    Entity.prototype.update.call(this);
    for (let i in players){
        // making sure we don't check ourselves
        if (players[i].id === this.id) continue;

        this.colliding = util.checkCollision(this, players[i]);

        if (this.colliding) return;
    }
    for (let i in foods){
        let coll = util.checkCollision(this, foods[i]);
        if (coll){

        }
    }
};

module.exports = Player;