let emits = {};

function initEvents(){

    socket.on('playerUpdate', pack => {
        handler.playerUpdate(pack);
    });

    socket.on('addFood', pack => {
        console.log('addingFOO(OOOD');
        handler.addFood(pack);
    });

    socket.on('removeFood', food => {
        handler.removeFood(food);
    });

    socket.on('playerDisconnect', player=> {
       handler.playerDisconnect(player);
    });

    // broadcast only to specific player
    socket.on('playerScaleWorld', player=> {
        handler.playerScaleWorld(player);
    });

    emits.eval = function(pack){
        socket.emit('eval', pack);
    };
}
