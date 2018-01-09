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
      this.colliding = util.checkCollision(this, players[i]);
      if (this.colliding) return;
  }
};

module.exports = Player;