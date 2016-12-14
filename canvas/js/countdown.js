var WINDOW_WIDTH = document.documentElement.clientWidth-20;
var WINDOW_HEIGHT = document.documentElement.clientHeight-20;
var RADIUS = Math.round(WINDOW_WIDTH*4/5/108)-1;
var MARGIN_LEFT = Math.round(WINDOW_WIDTH/10);
var MARGIN_TOP = Math.round(WINDOW_HEIGHT/5);

var endTime = new Date();
endTime.setHours(endTime.getHours()+1);
var curShowTimeSeconds = 0;

var balls = [];
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933C","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","CC0000"];

var canvas = document.getElementById('can');
var context = canvas.getContext('2d');

canvas.width = WINDOW_WIDTH;
canvas.height = WINDOW_HEIGHT;

var renderDigit = function(x, y, num, cxt){
	cxt.fillStyle = "rgb(0, 102, 153)";
	for (var i = 0; i < digit[num].length; i++) {
		for (var j = 0; j < digit[num][i].length; j++) {
			if(digit[num][i][j]==1){
				cxt.beginPath();
				cxt.arc(2*(RADIUS+1)*j+RADIUS+x,2*(RADIUS+1)*i+RADIUS+y,RADIUS,0,2*Math.PI);
				cxt.closePath();
				cxt.fill();
			}
		}
	}
};

var render = function(cxt){

	cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
	var hours = parseInt(curShowTimeSeconds/3600);
	var minutes = parseInt((curShowTimeSeconds - hours*3600)/60);
	var seconds = curShowTimeSeconds%60;

	renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours/10), cxt);
	renderDigit(MARGIN_LEFT+15*(RADIUS+1), MARGIN_TOP, parseInt(hours%10), cxt);
	renderDigit(MARGIN_LEFT+30*(RADIUS+1), MARGIN_TOP, 10, cxt);
	renderDigit(MARGIN_LEFT+39*(RADIUS+1), MARGIN_TOP, parseInt(minutes/10), cxt);
	renderDigit(MARGIN_LEFT+54*(RADIUS+1), MARGIN_TOP, parseInt(minutes%10), cxt);
	renderDigit(MARGIN_LEFT+69*(RADIUS+1), MARGIN_TOP, 10, cxt);
	renderDigit(MARGIN_LEFT+78*(RADIUS+1), MARGIN_TOP, parseInt(seconds/10), cxt);
	renderDigit(MARGIN_LEFT+93*(RADIUS+1), MARGIN_TOP, parseInt(seconds%10), cxt);
	for (var i = 0; i < balls.length; i++) {
		var ball = balls[i];
		cxt.fillStyle = ball.color;
		cxt.beginPath();
		cxt.arc(ball.x,ball.y,RADIUS,0,2*Math.PI);
		cxt.closePath();
		cxt.fill();
	}
};

var getCurrendShowTimeSeconds = function(){
	var curTime = new Date();
	var ret = endTime.getTime()-curTime.getTime();
	ret = Math.round(ret/1000);
	return ret >= 0?ret:0;
};
curShowTimeSeconds = getCurrendShowTimeSeconds();

var addBalls = function(x, y, num){
	for (var i = 0; i < digit[num].length; i++) {
		for (var j = 0; j < digit[num][i].length; j++) {
			if(digit[num][i][j]==1){
				var aBall = {
					x:2*(RADIUS+1)*j+RADIUS+x,
					y:2*(RADIUS+1)*i+RADIUS+y,
					g:1.5+Math.random(),
					vx:(Math.random()>=0.5?-1:1)*2,
					vy:-10,
					color: colors[Math.floor(Math.random()*colors.length)]
				};
				balls.push(aBall);
			}
		}
	}
};

var updateBalls = function(){
	for (var i = 0; i < balls.length; i++) {
		var ball = balls[i];
		ball.x += ball.vx;
		ball.y += ball.vy;
		ball.vy += ball.g;
		if(ball.y >= WINDOW_HEIGHT-RADIUS){
			ball.y = WINDOW_HEIGHT-RADIUS;
			ball.vy = -ball.vy*0.75;
			// if(Math.abs(ball.vy) < RADIUS){
			// 	ball.vy = 0;
			// }
		}
	}

	for(var i = 0;i < balls.length ; i++){
        if(balls[i].x + RADIUS < 0 || balls[i].x - RADIUS > WINDOW_WIDTH){
            balls.splice(i,1);
        }
    }
}

var update = function(){
	var nextShowTimeSeconds = getCurrendShowTimeSeconds();
	var nextHours = parseInt(nextShowTimeSeconds/3600);
	var nextMinutes = parseInt((nextShowTimeSeconds - nextHours*3600)/60);
	var nextSeconds = nextShowTimeSeconds%60;

	var curHours = parseInt(curShowTimeSeconds/3600);
	var curMinutes = parseInt((curShowTimeSeconds - curHours*3600)/60);
	var curSeconds = curShowTimeSeconds%60;

	if(nextSeconds != curSeconds){
		if(parseInt(curHours/10) != parseInt(nextHours/10)){
			addBalls( MARGIN_LEFT+0, MARGIN_TOP, parseInt(nextHours/10));
		}
		if(parseInt(curHours%10) != parseInt(nextHours%10)){
			addBalls( MARGIN_LEFT+15*(RADIUS+1), MARGIN_TOP, parseInt(nextHours%10));
		}
		if(parseInt(curMinutes/10) != parseInt(nextMinutes/10)){
			addBalls( MARGIN_LEFT+39*(RADIUS+1), MARGIN_TOP, parseInt(nextMinutes/10));
		}
		if(parseInt(curMinutes%10) != parseInt(nextMinutes%10)){
			addBalls( MARGIN_LEFT+54*(RADIUS+1), MARGIN_TOP, parseInt(nextMinutes%10));
		}
		if(parseInt(curSeconds/10) != parseInt(nextSeconds/10)){
			addBalls( MARGIN_LEFT+78*(RADIUS+1), MARGIN_TOP, parseInt(nextSeconds/10));
		}
		if(parseInt(curSeconds%10) != parseInt(nextSeconds%10)){
			addBalls( MARGIN_LEFT+93*(RADIUS+1), MARGIN_TOP, parseInt(nextSeconds%10));
		}
		curShowTimeSeconds = nextShowTimeSeconds;
	}
	updateBalls();
};

setInterval(
	function(){
		render(context);
		update();
	},
	20
);