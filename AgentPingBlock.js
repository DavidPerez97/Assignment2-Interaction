
 
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
    this.minx = 1000;
    this.maxx = 0;
    for (let i = 0; i < this.game.pong_balls.length; i++) {
        
        currentPongBall = this.game.pong_balls[i];
        if (this.position === 'left') {

            if (currentPongBall.goingLeft === true) {

                if (this.minx > currentPongBall.x && this.minx > 120) {
                    this.minx = currentPongBall.x
                    this.pongBall = currentPongBall;
                }
            }
        } else if (this.position === 'right') {
            if (currentPongBall.goingRight === true) {

                if (this.maxx < currentPongBall.x && this.maxx < 880) {
                    this.maxx = currentPongBall.x
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



    if (this.game.key && !this.game.keyup) {
        if (this.game.key === 38) {
            console.log(this.get_all_pong_stats());
            this.game.key = false;
           // if(this.y > 0) {
             //   this.y -= this.increment;
            //}
        } 
    }

}

AgentPingBlock.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        this.x, this.y);
}

AgentPingBlock.prototype.get_all_pong_stats = function() {
    list = [this.x, this.y, this.position, this.increment, this.boundingbox]//, this.pongBall]
    return list;
}

AgentPingBlock.prototype.set_all_pong_stats = function(list) {
    var x = list[0]
    var y = list[1]
    var position = list[2]
    var increment = list[3]
    //var bounding_box = list[4]
    var pongball = list[4]
    this.x = x;
    this.y = y;
    this.position = position;
    this.increment = increment;
    //this.boundingbox = bounding_box;
    this.pongBall = pongball;

}