handler = {};

handler.emitMouseLocation = function(){
    socket.emit('mouseMove', mouseLocation);
};

handler.playerConnect = function(pack){
    drawPlayer(pack);
};

handler.playerUpdate = function(pack){
    getMouseLocation();
    handler.emitMouseLocation();

    console.log(players.length);
    for (let i in pack){
        const match = players.find(player => player.id === pack[i].id);

        if (match){
            match.x = pack[i].x - pack[i].radius;
            match.y = pack[i].y - pack[i].radius;
            match.height = pack[i].radius * 2;
            match.width  = pack[i].radius * 2;
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
                players[i].x, players[i].y
                /*
                game.world.scale.x * (players[i].x + 1920/2 - (1920 - players[i].radius)),
                game.world.scale.y * (players[i].y + 949/2 - (949 - players[i].radius))
                */
            );
        }
    }

};

handler.foodUpdate = function(pack){
    for (let i in pack){
        const match = foods.find(food => food.id === pack[i].id);

        if (match){
            match.x = pack[i].x - pack[i].radius;
            match.y = pack[i].y - pack[i].radius;
            match.height = pack[i].radius * 2;
            match.width  = pack[i].radius * 2;
            if (pack[i].colliding){
                match.tint = 0.3 * 0xffffff;
            }
            else{
                match.tint = 0xffffff;
            }
        }
        else{
            graphics.drawFood(pack[i]);
        }
    }

};