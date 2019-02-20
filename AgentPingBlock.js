
 
function AgentPingBlock(game, spritesheet) {

    this.speed = 0;
    this.game = game;
    this.spritesheet = spritesheet;
    this.x = 900;
    this.y = 300;
    this.height = 100;
    this.width = 15;
    this.ctx = game.ctx;
    this.boundingbox = new BoundingBox(this.x, this.y, this.width, this.height);
    this.pongBall = this.game.pongBall;
    this.increment = 5;
}


AgentPingBlock.prototype.update = function () {
    //console.log(this.pongBall);
    //console.log(this.pongBall.y);
    //console.log(this);

    this.boundingbox.update(this.x, this.y);

    if ((this.pongBall.y + (this.pongBall.height / 2)) > this.y + (this.height / 2)) {
        this.y += this.increment;

    } else if ((this.pongBall.y + (this.pongBall.height / 2)) < this.y + (this.height / 2)) {
        this.y -= this.increment;
    }

}

AgentPingBlock.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        this.x, this.y);
}

