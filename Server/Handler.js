exports.emitAll = function(emitStr, packet){
    for (let i in SOCKET_LIST){
        let socket = SOCKET_LIST[i];
        socket.emit(emitStr, packet)
    }
};