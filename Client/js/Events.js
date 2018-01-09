function initEvents(){

    socket.on('playerUpdate', pack => {
        handler.playerUpdate(pack);
    });

    socket.on('foodUpdate', pack => {
        handler.foodUpdate(pack);
    })

}
