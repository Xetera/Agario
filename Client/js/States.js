let assetsLoaded = false;
let socket;
State.Boot= function(game){

};

State.Boot.prototype = {
    preload: function(){
        this.load.image('food', '../Media/alliance.png');

        this.load.image('priest', '../Media/priest.png');
        this.load.image('mage', '../Media/mage.png');
        this.load.onLoadComplete.add(function(){

            assetsLoaded = true;
        }, this);
    },
    create: function(){
        socket = io();
        initEvents();
        this.state.start('Main');
    }
};