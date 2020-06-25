class Play extends Phaser.Scene{
    constructor() {
        super("playScene");
    }

    // init(){
    //
    // }

    // preload(){
    //
    // }

    create(){
        // this.add.text(20, 20, "Rocket Patrol Play"); // for testing
        // magic numbers
        // white rectangle boarders
        this.add.rectangle(5, 5, 630, 32, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(5, 443, 630, 32, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(5, 5, 32, 455, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(603, 5, 32, 455, 0xFFFFFF).setOrigin(0, 0);
        // green UI background
        this.add.rectangle(37, 42, 566, 64, 0x00FF00).setOrigin(0, 0);
    }

    // update(){ // ideally every frame
    //
    // }
}