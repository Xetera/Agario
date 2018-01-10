function handleResize(){
    console.log("resizing!");
    let width = $(window).width();
    let height = $(window).height();
    scaler.setGameSize(width, height);
    game.renderer.resize(width, height);

    game.scale.setShowAll();
    game.scale.refresh();
}

function getWindowSize(){
    return [$(window).width(), $(window).height()];
}


function serverEval(i){

}
windowX = 10000;
windowY = 10000;