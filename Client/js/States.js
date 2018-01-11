let assetsLoaded = false;
let socket;
let background;
State.Boot= function(game){

};

State.Boot.prototype = {
    init: function(){
        game.scale.scaleMode = Phaser.SHOW_ALL;
        this.game.scale.setShowAll();
        this.world.setBounds(0, 0, windowX, windowY);
    },
    preload: function(){
        this.time.desiredFps = 144;
        this.load.image('background', '../Media/squares.png');
        this.load.image('food', '../Media/alliance.png');
        this.load.image('priest', '../Media/priest.png');
        this.load.image('mage', '../Media/mage.png');
        background = this.add.group();

    },
    create: function(){
        socket = io();
        initEvents();
        //background.add(grid);
        this.state.start('Main');
    }
};