
var canvas = document.getElementById("can");
var context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

var dis = function(d, r){
	return Math.sqrt(d*d+ r*r);
};

var moonPath = function(cxt, d){
	cxt.beginPath();
	cxt.arc(0, 0, 1, 0.5*Math.PI, 1.5*Math.PI, true);
	cxt.lineTo(0, -1);
	// cxt.arcTo(d, 0, 0, 1, dis(d, 1)/d);
	cxt.quadraticCurveTo(d, 0, 0, 1);
	cxt.closePath();
};

var drawMoon = function(cxt, x, y, r, angle, /*optional*/fillColor){
	cxt.save();
	cxt.translate(x, y);
	cxt.scale(r,r);
	cxt.rotate(angle*Math.PI/180);
	moonPath(cxt, 1);
	cxt.fillStyle = fillColor || "#fb5";
	cxt.fill();
	cxt.restore();
};
drawMoon(context,400,400,100,20);