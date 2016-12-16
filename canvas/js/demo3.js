
var canvas = document.getElementById("can");
var context = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

var start = {context:context,x:400,y:400,degree:18,R:262,r:100,borderWidth:10,borderColor:"#058",fillColor:"pink"};

var drawStart = function(param){
	var cxt = param.context;
	cxt.strokeStyle = param.borderColor;
	cxt.fillStyle = param.fillColor;
	cxt.lineWidth = param.borderWidth;
	cxt.lineJoin = "bevel";
	for (var i = 0; i < 5; i++) {
		cxt.lineTo(param.x+Math.cos((param.degree+72*i)/180*Math.PI)*param.R,param.y-Math.sin((param.degree+72*i)/180*Math.PI)*param.R);
		cxt.lineTo(param.x+Math.cos((param.degree+36+72*i)/180*Math.PI)*param.r,param.y-Math.sin((param.degree+36+72*i)/180*Math.PI)*param.r);
	}
	cxt.closePath();
	cxt.fill();
	cxt.stroke();
	cxt.beginPath();
	cxt.moveTo(param.x,param.y);
	cxt.stroke();
	cxt.beginPath();
	cxt.arc(param.x,param.y,param.r,0,2*Math.PI);
	cxt.stroke();
	cxt.beginPath();
	cxt.arc(param.x,param.y,param.R,0,2*Math.PI);
	cxt.stroke();
};
drawStart(start);