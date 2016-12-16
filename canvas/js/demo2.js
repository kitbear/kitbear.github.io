
var canvas = document.getElementById("can");
var context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

context.strokeStyle = "#058";
context.lineWidth = 30;
context.moveTo(100,200);
context.lineTo(700,500);
context.lineCap = "butt";
context.stroke();
context.beginPath();
context.moveTo(100,250);
context.lineTo(700,550);
context.lineCap = "square";
context.stroke();
context.beginPath();
context.moveTo(100,400);
context.lineTo(700,700);
context.lineCap = "round";
context.stroke();