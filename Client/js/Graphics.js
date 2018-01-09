graphics = {};
graphics.drawPlayer = function(pack){
    let player = game.add.sprite(pack.x, pack.y, pack.class);
    player.width  = pack.radius * 2;
    player.height = pack.radius * 2;
    player.id = pack.id;
    players.push(player);
};

graphics.drawFood = function(pack) {
    let food = game.add.sprite(pack.x, pack.y, 'food');
    food.width  = pack.radius * 2;
    food.height = pack.radius * 2;
    food.id = pack.id;
    foods.push(food);
};