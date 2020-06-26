class Play extends Phaser.Scene{
    constructor() {
        super("playScene");
    }

    // init(){
    //
    // }

    preload(){
    // load images/tile sprites
        this.load.image('rocket', './assets/rocket.png');
        this.load.image('spaceship', './assets/spaceship.png');
        this.load.image('starfield', './assets/starfield.png');

    }

    create(){
        // this.add.text(20, 20, "Rocket Patrol Play"); // for testing
        // place tile sprite on background
        this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);
        // this.starfield2 = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0, 0);
        // magic numbers
        // white rectangle boarders
        this.add.rectangle(5, 5, 630, 32, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(5, 443, 630, 32, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(5, 5, 32, 455, 0xFFFFFF).setOrigin(0, 0);
        this.add.rectangle(603, 5, 32, 455, 0xFFFFFF).setOrigin(0, 0);
        // green UI background
        this.add.rectangle(37, 42, 566, 64, 0x00FF00).setOrigin(0, 0);

        // add rocket, player one
        this.p1Rocket = new Rocket(this, game.config.width/2, 431, 'rocket', 0).setScale(0.5, 0.5).setOrigin(0, 0);

        // add spaceships (x3)
        this.ship01 = new Spaceship(this, game.config.width + 192, 132, 'spaceship', 0, 30).setOrigin(0, 0);
        this.ship02 = new Spaceship(this, game.config.width + 96, 196, 'spaceship', 0, 20).setOrigin(0, 0);
        this.ship03 = new Spaceship(this, game.config.width , 260, 'spaceship', 0, 10).setOrigin(0, 0);


        // define control keys
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    }

    update(){ // ideally every frame
        this.starfield.tilePositionX -= 4;
        // this.starfield2.tilePositionX -= 2;

        // update rocket
        this.p1Rocket.update();

        // update spaceships
        this.ship01.update();
        this.ship02.update();
        this.ship03.update();

        // check collision
        if (this.checkCollision(this.p1Rocket, this.ship03)){
            // console.log('ship 03 hit');
            this.p1Rocket.reset();
            // this.ship03.reset();
        }
        if (this.checkCollision(this.p1Rocket, this.ship02)){
            // console.log('ship 02 hit');
            this.p1Rocket.reset();
            // this.ship02.reset();
        }
        if (this.checkCollision(this.p1Rocket, this.ship01)){
            console.log('ship 01 hit');
            this.p1Rocket.reset();
            // this.ship01.reset();
        }
    }

    checkCollision(rocket, ship){
        // AABB bounds checking
        // simple AABB checking
        if (rocket.x < ship.x + ship.width &&
            rocket.x + rocket.width > ship.x &&
            rocket.y < ship.y + ship.height &&
            rocket.height + rocket.y > ship.y){
                return true;
        } else {
            return false;
        }
    }
}