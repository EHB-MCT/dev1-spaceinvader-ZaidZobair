"use strict";

drawInvader();
window.onresize = drawInvader;


function drawInvader() {
    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.beginPath();
    context.fillRect(0, 0, 300, 300);
    context.fillStyle = "black";
    context.stroke();
    context.closePath();

    
}