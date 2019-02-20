
 
function AgentPingBlock(game, spritesheet) {

    this.speed = 0;
    this.game = game;
    this.spritesheet = spritesheet;
    this.x = 900;
    this.y = 300;
    this.height = 100;
    this.width = 15;
    this.ctx = game.ctx;
    this.boundBarrierLeft = 504;
    this.boundBarrierRight = 964;
    this.boundingbox = new BoundingBox(this.x, this.y, this.width, this.height);
}


AgentPingBlock.prototype.update = function () {
    this.boundingbox.update(this.x, this.y);
    if (this.game.key) {
        if (this.game.key === 38) {
            //console.log("up");
            if(this.y > 0) {
                this.y -= 10;
            }
        } else if (this.game.key === 40) {
            //console.log("down");
            if (this.y < 720 - this.height) {
                this.y += 10;
            }
        } /*else if (this.game.key === 39) {
            //console.log("right");
            if (this.x < this.boundBarrierRight - this.width) {
                this.x += 10;
                if (this.x > this.boundBarrierRight -this.width) {
                    this.x = this.boundBarrierRight - this.width;
                }
            }
            
        } else if (this.game.key === 37) {
            //console.log("left");
            if (this.x > this.boundBarrierLeft) {
                this.x -= 10;
                if (this.x < this.boundBarrierLeft) {
                    this.x = this.boundBarrierLeft;
                }
            }
        }*/
        //this.game.key = false;
    }

}

AgentPingBlock.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        this.x, this.y);
}

