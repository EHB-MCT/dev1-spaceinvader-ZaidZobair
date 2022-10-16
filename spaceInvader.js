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

    context.fillStyle = "#5cd854";

    context.fillRect(75, 50, 50, 50);
    context.fillRect(125, 50, 50, 50);
    context.fillRect(175, 50, 50, 50);
    context.fillRect(75, 100, 50, 50);
    context.fillRect(175, 100, 50, 50);
    context.fillRect(25, 150, 50, 50);
    context.fillRect(225, 150, 50, 50);
    context.fillRect(75, 225, 50, 50);
    context.fillRect(125, 225, 50, 50);
    context.fillRect(175, 225, 50, 50);








}