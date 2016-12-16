
var canvas = document.getElementById("can");
var context = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 400;

var drawStart = function(param){
	var cxt = param.context;
	cxt.strokeStyle = param.borderColor;
	cxt.fillStyle = param.fillColor;
	cxt.lineWidth = param.borderWidth;
	cxt.lineJoin = "bevel";
	cxt.beginPath();
	for (var i = 0; i < 5; i++) {
		cxt.lineTo(param.x+Math.cos((param.degree+72*i)/180*Math.PI)*param.R,param.y-Math.sin((param.degree+72*i)/180*Math.PI)*param.R);
		cxt.lineTo(param.x+Math.cos((param.degree+36+72*i)/180*Math.PI)*param.r,param.y-Math.sin((param.degree+36+72*i)/180*Math.PI)*param.r);
	}
	cxt.closePath();
	cxt.fill();
	cxt.stroke();
};

var drawFlag = function(cxt){
	cxt.fillStyle = "red";
	cxt.rect(0,0,600,400);
	cxt.fill();
	var bigStart = {context:cxt,x:100,y:100,degree:18,R:60,r:22,borderWidth:1,borderColor:"yellow",fillColor:"yellow"};
	drawStart(bigStart);
	var smallStart1 = {context:cxt,x:200,y:40,degree:0,R:20,r:8.5,borderWidth:1,borderColor:"yellow",fillColor:"yellow"};
	drawStart(smallStart1);
	var smallStart2 = {context:cxt,x:240,y:80,degree:45,R:20,r:8.5,borderWidth:1,borderColor:"yellow",fillColor:"yellow"};
	drawStart(smallStart2);
	var smallStart3 = {context:cxt,x:240,y:140,degree:18,R:20,r:8.5,borderWidth:1,borderColor:"yellow",fillColor:"yellow"};
	drawStart(smallStart3);
	var smallStart4 = {context:cxt,x:200,y:180,degree:0,R:20,r:8.5,borderWidth:1,borderColor:"yellow",fillColor:"yellow"};
	drawStart(smallStart4);
}

drawFlag(context);