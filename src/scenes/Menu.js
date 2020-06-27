class Menu extends Phaser.Scene{
    constructor() {
        super("menuScene");
    }

    preload(){
        // load audio files
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        this.load.audio('sfx_explosion', './assets/explosion38_select12.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }

    // init(){
    //
    // }

    // preload(){
    //
    // }

    create(){
        // menu text
        this.add.text(20, 20, "Rocket Patrol Menu");

        // debug: move to next scene—start playScene from this scene
        this.scene.start("playScene")
    }

    // update(){ // ideally every frame
    //
    // }
}

