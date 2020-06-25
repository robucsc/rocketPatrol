class Menu extends Phaser.Scene{
    constructor() {
        super("menuScene");
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

