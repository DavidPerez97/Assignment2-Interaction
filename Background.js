// no inheritance
function Background(game, spritesheet, spritesheet2) {
    this.x = 0;
    this.y = 0;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;




    this.height = 1000;
    this.width = 720;
    //this.boundingboxtop = new BoundingBox(this.x, this.y, this.width, 0);
    //this.boundingboxbottom = new BoundingBox(this.x)

    this.spritesheet2 = spritesheet2;
    /*this.leftSide = true;
    this.rightSide = false;
    this.MAXBOUNCEANGLE = 75;
    this.BALLSPEED = 10;
    this.incrementX = 10;
    this.incrementY = 0;
    this.testValue = 0;*/

};

Background.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
                   this.x, this.y);
};

Background.prototype.update = function () {

};