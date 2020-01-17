import { create, drawRect, createReportList } from '/js/canvas.js';


window.onload = () => {
    console.log("loaded");
    let canvas = create('canvas', document.body, 480, 320);
    let reportList = createReportList(canvas.id);

    let square = drawRect(canvas.ctx, 50, 50, 50, 50, 'blue');
};