import { create, drawRect, createReportList } from '/js/canvas.js';
import Game from '/js/game.js';


const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
let canvas;
let reportList;

let lastTime = 0;

window.onload = () => {
    console.log("loaded");
    canvas = create('canvas', document.body, GAME_WIDTH, GAME_HEIGHT);
    reportList = createReportList(canvas.id);

    requestAnimationFrame(gameLoop);
};


function gameLoop(timeStamp) {
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;


    canvas.ctx.clearRect(document.body.clientWidth/2 - GAME_WIDTH/2, 50, GAME_WIDTH, GAME_HEIGHT);
    game.update(deltaTime);
    game.draw(canvas.ctx);
    console.log(game.gameWidth);
    if(game.gamstate !== game.gamestate.PAUSED){
        requestAnimationFrame(gameLoop);
    }

    
}


