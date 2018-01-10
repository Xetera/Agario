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

    for (let i in pack){
        const match = players.find(player => player.id === pack[i].id);

        if (match){
            match.x = pack[i].x;
            match.y = pack[i].y;
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

            game.camera.focusOnXY( 2300, 300

                //game.world.scale.x * (players[i].x + 1920/2 - (1920 - players[i].radius)),
                //game.world.scale.y * (players[i].y + 949/2 - (949 - players[i].radius))

            );

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