
 
function PlayerPingBlock(game, spritesheet) {

    this.speed = 0;
    this.game = game;
    this.spritesheet = spritesheet;
    this.x = 100;
    this.y = 300;
    this.height = 100;
    this.width = 15;
    this.ctx = game.ctx;
    this.increment = 10;
    this.boundingbox = new BoundingBox(this.x, this.y, this.width, this.height);
}


PlayerPingBlock.prototype.update = function () {
    this.boundingbox.update(this.x, this.y);
    if (this.game.key && !this.game.keyup) {
        if (this.game.key === 38) {
           // console.log("up");
            if(this.y > 0) {
                this.y -= this.increment;
            }
        } else if (this.game.key === 40) {
            //console.log("down");
            if (this.y < 720 - this.height) {
                this.y += this.increment;
            }

        }
        //this.game.key = false;
    }

}

PlayerPingBlock.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        this.x, this.y);
}



