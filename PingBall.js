
 
function PingBall(game, spritesheet, spritesheet2) {

    this.speed = 0;
    this.game = game;
    this.spritesheet = spritesheet;
    this.height = 20;
    this.width = 20;
    this.x = (1000 / 2) -this.width / 2;
    this.y = (720 / 2) - this.height / 2;
    this.boardWidth = 1000;
    this.ctx = game.ctx;
    this.goingLeft = true;
    this.goingRight = false;
    this.boundingbox = new BoundingBox(this.x, this.y, this.width, this.height);

    this.spritesheet2 = spritesheet2;
    this.leftSide = true;
    this.rightSide = false;
    this.MAXBOUNCEANGLE = 45;
    this.BALLSPEED = 10;
    this.incrementX = 10;
    this.incrementY = 0;
    this.testValue = 0;
}


PingBall.prototype.update = function () {
    this.boundingbox.update(this.x, this.y);
    if (this.goingLeft && this.boundingbox.left <= 500) {
        this.leftSide = true;
        this.rightSide = false;
    }
    else if (this.goingRight && this.boundingbox.right > 500) {
        this.rightSide = true;
        this.leftSide = false;
    } 

    for (var i = 0; i < this.game.pong_boxes.length; i++) {
        if (this.boundingbox.collide(this.game.pong_boxes[i].boundingbox)) {
            var paddle = this.game.pong_boxes[i];
            var relativeIntersectY = (paddle.y+(paddle.height/2)) - (this.y + this.height /2);
            var normalizedRelativeIntersectionY = (relativeIntersectY/(paddle.height/2));
            var bounceAngle = normalizedRelativeIntersectionY * this.MAXBOUNCEANGLE;
            this.incrementX = this.BALLSPEED *Math.cos(bounceAngle);
            this.incrementY = this.BALLSPEED*-Math.sin(bounceAngle);

            if(this.goingLeft && this.leftSide) {
                this.goingRight = true;
                this.goingLeft = false;
            } else if (this.goingRight && this.rightSide) {
                this.goingRight = false;
                this.goingLeft = true;
            }
            //this.goingLeft = false;
            //this.goingRight = true;
        }
    }
    if (this.goingLeft) {
        if (this.incrementX != this.testValue) {
            console.log(this.incrementX)
            this.testValue = this.incrementX;
        }

        if (this.x > 0) {
            this.x -= Math.abs(this.incrementX);
            this.y += this.incrementY;

            if (this.x <= 0) {
                this.x = (1000 / 2) -this.width / 2;
                this.y = (720 / 2) - this.height / 2;
                this.incrementX = 10;
                this.incrementY = 0;
                this.goingRight = false;
                this.goingLeft = true;
            }
        } 
    } if (this.goingRight) {
        if (this.incrementX != this.testValue) {
            console.log(this.incrementX)
            this.testValue = this.incrementX;
        }
        if (this.x < this.boardWidth) {
            this.x += Math.abs(this.incrementX);
            this.y += this.incrementY;

            if (this.x >= this.boardWidth) {
                this.x = (1000 / 2) -this.width / 2;
                this.y = (720 / 2) - this.height / 2;
                this.incrementX = 10;
                this.incrementY = 0;
                this.goingRight = true;
                this.goingLeft = false;
            }
        }
    }
    if (this.y > 720) {
        this.incrementY = -this.incrementY;
    } if (this.y < 0) {
        this.incrementY = -this.incrementY;
    }
}

PingBall.prototype.draw = function () {
    if (this.goingLeft) {
        this.ctx.drawImage(this.spritesheet,
            this.x, this.y);
    } else if (this.goingRight) {
        this.ctx.drawImage(this.spritesheet2,
            this.x, this.y);
    }
    
}

