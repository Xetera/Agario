handler = {};

handler.emitMouseLocation = function(){
    socket.emit('mouseMove', mouseLocation);
};

handler.playerConnect = function(pack){
    drawPlayer(pack);
};

handler.playerDisconnect = function(player){
    let index = players.findIndex(elem => {
        return elem.id === player.id;
    });
    players[index].destroy();
    players.splice(index, 1);

};


handler.playerUpdate = function(pack){
    getMouseLocation();
    handler.emitMouseLocation();

    for (let i in pack){
        const match = players.find(player => player.id === pack[i].id);

        if (match){
            match.x = pack[i].x;
            match.y = pack[i].y;
            match.height = pack[i].radius * 2;
            match.width  = pack[i].radius * 2;
            match.radius = pack[i].radius;
            if (pack[i].colliding){
                match.tint = 0.3 * 0xffffff;
            }
            else{
                match.tint = 0xffffff;
            }
        }
        else{
            graphics.drawPlayer(pack[i]);
        }
    }

    for (let i in players){
        if (players[i].id === socket.id){

            game.camera.focusOnXY(

                game.world.scale.x * (players[i].x + players[i].radius),
                game.world.scale.y * (players[i].y + players[i].radius)

            );
            game.debug.cameraInfo(game.camera, 32, 32);
            game.debug.spriteCoords(players[i], 32, 900-32);
        }
    }

};
/**
 *
 * @param {Food[]|Food}pack
 */
handler.addFood = function(pack){
    // if we're updating a single object
    if (pack.length){
        for (let i in pack){
            graphics.drawFood(pack[i]);
        }
    }
};


handler.removeFood = function(food){
    console.log('removing');


    let index = foods.findIndex(elem => {
        return elem.id === food.id;
    });
    console.log(index);
    foods[index].destroy();

    foods.splice(index, 1);
};

handler.playerScaleWorld = function(amount){
    game.world.scale.setTo(amount);
};