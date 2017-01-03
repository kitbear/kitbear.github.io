
var canvas = document.getElementById('can');
var context = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

var drawStar = function(cxt, sideNum){
	cxt.beginPath();
	var sideAngle = 360/sideNum;
	for(var i = 0; i < sideNum; i++){
		cxt.lineTo(Math.cos((sideAngle*i)*Math.PI/180),-Math.sin((sideAngle*i)*Math.PI/180));
		cxt.lineTo(Math.cos(((sideAngle/2)+sideAngle*i)*Math.PI/180)/2.6,-Math.sin(((sideAngle/2)+sideAngle*i)*Math.PI/180)/2.6);
	}
	cxt.closePath();
};

var drawPath = function(cxt, x, y, R, angle){
	cxt.save();
	// cxt.translate(x, y);
	// cxt.scale(R, R);
	cxt.transform(R, 0, 0, R, x, y, 0, 0, 1);
	cxt.rotate(angle/180*Math.PI);
	drawStar(cxt,5);
	// cxt.lineWidth = .15;
	// cxt.strokeStyle = "#fb3";
	cxt.fillStyle = "#fd5";
	// cxt.lineJoin = "round";
	cxt.fill();
	// cxt.stroke();
	cxt.restore();
}

var dis = function(d, r){
	return Math.sqrt(d*d+ r*r);
};

var moonPath = function(cxt, d){
	cxt.beginPath();
	cxt.arc(0, 0, 1, 0.5*Math.PI, 1.5*Math.PI, true);
	cxt.lineTo(0, -1);
	cxt.arcTo(d, 0, 0, 1, dis(d, 1)/d);
	cxt.closePath();
};

var drawMoon = function(cxt, x, y, r, angle, /*optional*/fillColor){
	cxt.save();
	cxt.translate(x, y);
	cxt.scale(r,r);
	cxt.rotate(angle*Math.PI/180);
	moonPath(cxt, 2);
	cxt.fillStyle = fillColor || "#fC3";
	cxt.fill();
	cxt.restore();
};

var drawLand = function(cxt){
	cxt.save();
	cxt.beginPath();
	cxt.lineTo(0,cxt.canvas.height-200);
	cxt.bezierCurveTo(200,cxt.canvas.height-300,600,cxt.canvas.height-100,800,cxt.canvas.height-200);
	cxt.lineTo(800,cxt.canvas.height);
	cxt.lineTo(0,cxt.canvas.height);
	cxt.closePath();
	var grad = cxt.createLinearGradient(0,600,0,0);
	grad.addColorStop(0,"#030");
	grad.addColorStop(1,"#580");
	cxt.fillStyle = grad;
	cxt.fill();
	cxt.restore();
};

var drawStarNight = function(cxt){
	// var grad = cxt.createLinearGradient(cxt.canvas.width,cxt.canvas.height,cxt.canvas.width,0);
	var grad = cxt.createRadialGradient(cxt.canvas.width/2,cxt.canvas.height,0,cxt.canvas.width/2,cxt.canvas.height,cxt.canvas.height);
	grad.addColorStop(0,"#035");
	grad.addColorStop(1,"#000");
	cxt.fillStyle = grad;
	cxt.fillRect(0,0,cxt.canvas.width,cxt.canvas.height);
	for (var i = 0; i < 200; i++) {
		var R = Math.random()*5+5;
		drawPath(cxt, Math.random()*(cxt.canvas.width-2*R)+R,Math.random()*(cxt.canvas.height-250-2*R)+R,R,Math.random()*360);
	}
	drawMoon(cxt,600,150,55,36);
	drawLand(cxt);
	var img = document.getElementById("image");
	console.log(img);
	cxt.drawImage(img,0,0);
	cxt.font = "bold 50px 楷体";
	cxt.lineWidth = "2";
	cxt.strokeStyle = "gray";
	cxt.shadowColor = "gray";
	cxt.shadowOffsetX = 5;
	cxt.shadowOffsetY = 5;
	cxt.shadowBlur = 2;
	cxt.textAlign = "right";
	cxt.textBaseline = "bottom";
	cxt.strokeText("——Wkit作品",780,580);
};

drawStarNight(context);
// var animate = function(){
// 	drawStarNight(context);
// 	requestAnimationFrame(animate);
// };
// requestAnimationFrame(animate);

// setInterval(
// 	function(){
// 		drawStarNight(context);
// 	},
// 	50
// );