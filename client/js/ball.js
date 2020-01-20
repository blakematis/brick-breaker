import { detectCollision } from "/js/collisionDetection.js";

export default class Ball {
    constructor(game){

        this.image = document.getElementById("img_ball");

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.game = game;
        this.size = 16;
        this.reset();
    }

    reset(){
        this.position = { x: 10, y: 400 };
        this.speed = { x: 4, y: -2};
    }

    draw(ctx){
        ctx.save();
        ctx.strokeStyle = '';
        ctx.fillStyle = '#AEF3F8';
        ctx.beginPath();
        ctx.arc(
            this.position.x,
            this.position.y,
            this.size / 2,
            0,
            2 * Math.PI, 
            false
        );
        ctx.fill();
        //var gradient = ctx.createRadialGradient(this.position.x, this.position.y, this.size / 2, this.position.x + this.size/2, this.position.y + this.size/2, this.size);
        //gradient.addColorStop(0, '#AEF3F8');
        //gradient.addColorStop(0, '#04D2E0');

        //ctx.fillStyle = gradient;
        
        ctx.restore();
    }

    update(deltaTime){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        console.log(this.gameWidth);
        if(this.position.x + this.size > this.gameWidth || this.position.x < 0){
            this.speed.x = -this.speed.x;
            console.log("out of bounds x");
        }

        if(this.position.y < 0 ){
            this.speed.y = -this.speed.y;
            console.log("out of bounds y");
        }

        if(this.position.y + this.size > this.gameHeight){
            this.game.lives--;
            this.reset();
        }

        if(detectCollision(this, this.game.paddle)){
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }
        console.log("x: " + this.position.x + " , y: " + this.position.y);
    }
}