const config = require('../config');
const Player = require('./Player');


exports.emitAll = function(emitStr, packet){
    for (let i in SOCKET_LIST){
        let socket = SOCKET_LIST[i];
        socket.emit(emitStr, packet)
    }
};

exports.emitPlayer = function(player, emitStr, packet){
    console.log(player);
    let socket = SOCKET_LIST[player.id];
    //socket.emit(emitStr, packet);
};

exports.newConnection = function(socket){
    console.log("New connection from: " + socket.handshake.address);
    SOCKET_LIST[socket.id] = socket;

    players[socket.id] = new Player(1920/2, 949/2, 50, config.classes.randChoice(), socket.id);
    players[socket.id]['id'] = socket.id;

    // we want the player to catch up on previous things, we're sending old info
    // as an update since they have a clean slate

    socket.emit('addFood', foods);
};