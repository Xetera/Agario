function drawPlayer(pack){

    let player = game.add.sprite(pack.x, pack.y, pack.class);
    player.width  = pack.radius * 2;
    player.height = pack.radius * 2;
    player.id = pack.id;
    players.push(player);
}