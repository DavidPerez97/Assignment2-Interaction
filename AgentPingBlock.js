
 
function AgentPingBlock(game, spritesheet, position) {

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
    this.minxleft = 1000;
    this.maxxright = 0;
    this.increment = 10;
    this.position = position;
}


AgentPingBlock.prototype.update = function () {
    //console.log(this.pongBall);
    //console.log(this.pongBall.y);
    //console.log(this);

    this.boundingbox.update(this.x, this.y);

    //case where pingball is above
    
    //var miny = this.game.pong_balls[0].y;
    var minx = 1000;
    var maxx = 0;
    for (let i = 0; i < this.game.pong_balls.length; i++) {
        
        currentPongBall = this.game.pong_balls[i];
        if (this.position === 'left') {

            if (currentPongBall.goingLeft === true) {

                if (minx > currentPongBall.x && minx > 120) {
                    minx = currentPongBall.x
                    this.pongBall = currentPongBall;
                }
            }
        } else if (this.position === 'right') {
            if (currentPongBall.goingRight === true) {

                if (maxx < currentPongBall.x && maxx < 880) {
                    maxx = currentPongBall.x
                    this.pongBall = currentPongBall;
                }
            }

        }
    }
   
    if ((this.pongBall.y + (this.pongBall.height / 2)) > this.y + (this.height / 2)) {
        var num = ((this.pongBall.y + (this.pongBall.height/2)) - (this.y  + (this.height /2)));

        if (num < this.increment) {
            this.y += num;
            //console.log(num)
        } else {
            this.y += this.increment;
        }

    } else if ((this.pongBall.y + (this.pongBall.height / 2)) < this.y + (this.height / 2)) {
        var num = ((this.y  + (this.height /2)) - (this.pongBall.y + (this.pongBall.height/2)));
        if (num < this.increment) {
            this.y -= num;
            //console.log(num)
        } else {
            this.y -= this.increment;
        }
    }

}

AgentPingBlock.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        this.x, this.y);
}

