
var canvas = document.getElementById('can');
var context = canvas.getContext('2d');

var balls = [
	{x:800,y:100,r:50,g:2,vx:-4,vy:10,color:"#005588"},
	{x:500,y:500,r:50,g:2,vx:-6,vy:10,color:"#FFCCFF"},
	{x:400,y:300,r:50,g:2,vx:-2,vy:10,color:"#FFCCCC"},
	{x:700,y:500,r:50,g:2,vx:-10,vy:10,color:"#CCFFCC"},
	{x:200,y:600,r:50,g:2,vx:-8,vy:10,color:"#CCFF99"}
];

var shoot = function(cxt){
	cxt.clearRect(0, 0, cxt.canvas.width, cxt.canvas.height);
	for (var i = 0; i < balls.length; i++) {
		var ball = balls[i];
		cxt.fillStyle = ball.color;
		cxt.beginPath();
		cxt.arc(ball.x,ball.y,ball.r,0,2*Math.PI);
		cxt.closePath();
		cxt.fill();
	}
};

var update = function(){
	for (var i = 0; i < balls.length; i++) {
		var ball = balls[i];
		ball.x += ball.vx;
		ball.y += ball.vy;
		// ball.vy += ball.g;
		if(ball.x >= context.canvas.width-ball.r){
			ball.x = context.canvas.width-ball.r;
			ball.vx = -ball.vx;
		}
		if(ball.y >= context.canvas.height-ball.r){
			ball.y = context.canvas.height-ball.r;
			ball.vy = -ball.vy;
		}
		if(ball.x <= 0+ball.r){
			ball.x = 0+ball.r;
			ball.vx = -ball.vx;
		}
		if(ball.y <= 0+ball.r){
			ball.y = 0+ball.r;
			ball.vy = -ball.vy;
		}
	}
}

shoot(context);
setInterval(
	function(){
		shoot(context);
		update();
	},
	20
);