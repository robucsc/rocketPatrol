// A recreation of Rocket Patrol for CMPM 120 Summer 2020
// Nearly all of this code is Nathan's!!
// All of the errors are mine!!

// create game configuration object
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],
};

// create main game object
let game = new Phaser.Game(config);

// define game settings
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000
}

// reserve some keyboard bindings
let keyF, keyLEFT, keyRIGHT, keyUP;