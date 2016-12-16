
var canvas = document.getElementById("can");
var context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

var drawLine = function(){
	context.beginPath();
	context.strokeStyle = "#FCF";
	context.lineWidth = "10";
	context.lineTo(100,100);
	context.lineTo(500,500);
	context.lineTo(100,500);
	context.stroke();
	context.beginPath();
	context.strokeStyle = "#FCC";
	context.lineWidth = "10";
	context.lineTo(100,150);
	context.lineTo(500,550);
	context.lineTo(100,550);
	context.stroke();
	context.beginPath();
	context.strokeStyle = "#FFC";
	context.lineWidth = "10";
	context.lineTo(100,200);
	context.lineTo(500,600);
	context.lineTo(100,600);
	context.stroke();
};

var drawRect = function(x, y, width, height, borderWidth, borderColor, fillColor){
	context.beginPath();
	context.strokeStyle = borderColor;
	context.lineWidth = borderWidth;
	context.fillStyle = fillColor;
	// context.lineTo(x,y);
	// context.lineTo(x+width,y);
	// context.lineTo(x+width,y+height);
	// context.lineTo(x,y+height);
	context.rect(x,y,width,height);
	context.closePath();
	context.fill();
	context.stroke();
};

var drawRect2 = function(x, y, width, height, borderWidth, borderColor, fillColor){
	context.beginPath();
	context.strokeStyle = borderColor;
	context.lineWidth = borderWidth;
	context.fillStyle = fillColor;
	context.closePath();
	context.fillRect(x,y,width,height);
	context.strokeRect(x,y,width,height);
};

drawLine();
drawRect(200,200,400,400,10,"pink","rgba(255,50,50,0.5)");
drawRect2(400,400,400,400,10,"pink","rgba(25,50,50,0.5)");