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
    })

}
