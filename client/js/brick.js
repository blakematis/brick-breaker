import { detectCollision } from "/js/collisionDetection.js";

export default class Brick {
  constructor(game, position) {
    this.image = document.getElementById("img_brick");

    this.game = game;

    this.position = position;
    this.width = 80;
    this.height = 24;

    this.markedForDeletion = false;
  }

  update() {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;

      this.markedForDeletion = true;
    }
  }
/**
 *
 *
 * @param {*} ctx
 * @memberof Brick
 */
draw(ctx) {
    ctx.save();
    ctx.fillStyle = '#AF180D';
    //ctx.strockStyle = 'black';
    ctx.rect(
        this.position.x,
        this.position.y,
        this.width,
        this.height
    );
    ctx.fill();
    /** Need to figure out how to implement stroke without effecting other game objects */
    //ctx.lineWidth = 2;
    //ctx.strokeSyle = '#510A05';
    //ctx.stroke();
    
    ctx.restore();
  }
}
