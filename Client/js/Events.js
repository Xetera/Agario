function initEvents(){
    socket.on('playerConnect', packet =>{
        //handler.playerConnect(packet);
    });

    socket.on('playerUpdate', packet => {
        handler.playerUpdate(packet);
    });

}
