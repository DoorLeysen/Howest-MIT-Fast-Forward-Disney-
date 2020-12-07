let canvas = document.querySelector('canvas');

canvas.width = 1000;
canvas.height = 500;


let xGrid = 10;
let yGrid = 10;
let ctx = canvas.getContext('2d');


function drawGrids() {
    ctx.beginPath();

    while (xGrid < yGrid.height) {

        ctx.moveTo(0, xGrid);
        ctx.lineTo(canvas.width, xGrid);
        xGrid += 10;
    }
    ctx.stroke();
}

drawGrids();
