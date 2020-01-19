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

  draw(ctx) {
    ctx.save();
    ctx.rect(
        this.position.x,
        this.position.y,
        this.width,
        this.height
    );
    ctx.fillStyle = '#AF180D';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeSyle = '#510A05';
    ctx.stroke();
    ctx.restore();
  }
}
