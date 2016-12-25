
var canvas = document.getElementById("can");
var context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

var pathRoundRect = function(cxt, width, height, r){
	cxt.beginPath();
	cxt.arc(r,r,r,1*Math.PI,1.5*Math.PI);
	// cxt.lineTo(x-(width/2-r),y-height/2);
	// cxt.lineTo(x+(width/2-r),y-height/2);
	cxt.arc(width-r,r,r,1.5*Math.PI,2*Math.PI);
	// cxt.lineTo(x+width/2,y-(height/2-r));
	// cxt.lineTo(x+width/2,y+(height/2-r));
	cxt.arc(width-r,height-r,r,0,0.5*Math.PI);
	// cxt.lineTo(x+(width/2-r),y+height/2);
	// cxt.lineTo(x-(width/2-r),y+height/2);
	cxt.arc(r,height-r,r,0.5*Math.PI,1*Math.PI);
	// cxt.lineTo(x-width/2,y+(height/2-r));
	// cxt.lineTo(x-width/2,y-(height/2-r));
	cxt.closePath();
};

var fillRoundRect = function(cxt, x, y, width, height, r, /*optional*/fillColor){
	if(2*r > width || 2*r > height){
		console.log("圆角半径过大");
		return;
	}
	cxt.save();
	cxt.translate(x, y);
	pathRoundRect(cxt, width, height, r);
	cxt.fillStyle = fillColor || "#000";
	cxt.fill();
	cxt.restore();
};

var strokeRoundRect = function(cxt, x, y, width, height, r, /*optional*/strokeColor){
	if(2*r > width || 2*r > height){
		console.log("圆角半径过大");
		return;
	}
	cxt.save();
	cxt.translate(x, y);
	pathRoundRect(cxt, width, height, r);
	cxt.strokeStyle = strokeColor || "#000";
	cxt.stroke();
	cxt.restore();
};


fillRoundRect(context,150,150,500,500,10,"#bbada0");
for(var i = 0; i < 4; i++)
	for(var j = 0; j < 4; j++)
		fillRoundRect(context,170+120*i, 170+120*j, 100, 100, 6, "#ccc0b3");