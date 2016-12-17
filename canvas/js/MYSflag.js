
var canvas = document.getElementById("can");
var context = canvas.getContext("2d");
canvas.width = 560;
canvas.height = 280;

var drawStart = function(param){
	var cxt = param.context;
	cxt.strokeStyle = param.borderColor;
	cxt.fillStyle = param.fillColor;
	cxt.lineWidth = param.borderWidth;
	cxt.lineJoin = "bevel";
	cxt.beginPath();
	for (var i = 0; i < 15; i++) {
		cxt.lineTo(param.x+Math.cos((param.degree+180/7*i)/180*Math.PI)*param.R,param.y-Math.sin((param.degree+180/7*i)/180*Math.PI)*param.R);
		cxt.lineTo(param.x+Math.cos((param.degree+90/7+180/7*i)/180*Math.PI)*param.r,param.y-Math.sin((param.degree+90/7+180/7*i)/180*Math.PI)*param.r);
	}
	cxt.closePath();
	cxt.fill();
	cxt.stroke();
};

var drawFlag = function(cxt){
	for(var i = 0; i < 7; i++){
		cxt.beginPath();
		cxt.fillStyle = "#de001a";
		cxt.rect(0,40*i,560,20);
		cxt.fill();
	}
	cxt.beginPath();
	cxt.fillStyle = "#011f68";
	cxt.rect(0,0,280,160);
	cxt.fill();
	cxt.beginPath();
	cxt.fillStyle = "#f4c106";
	cxt.arc(115,80,60,0,2*Math.PI);
	cxt.fill();
	cxt.beginPath();
	cxt.fillStyle = "#011f68";
	cxt.arc(128,80,160/3,0,2*Math.PI);
	cxt.fill();
	var bigStart = {context:cxt,x:175,y:80,degree:90/7,R:50,r:20,borderWidth:0,borderColor:"#f4c106",fillColor:"#f4c106"};
	drawStart(bigStart);
}

drawFlag(context);