var canvas = document.getElementById('can');
var context = canvas.getContext('2d');
//画直线
//知识点：
//moveTo(x,y)线条起始
//lineTo(x,y)线条截止
//lineWidth线条宽度
//beginPath()建立路径
//closePath()路径闭合
//strokeStyle线条样式
//stroke画线
//fillStyle填充样式
//fill填充
context.beginPath();
context.moveTo(120,280);
context.lineTo(288,276);
context.lineTo(340,110);
context.lineTo(392,276);
context.lineTo(556,280);
context.lineTo(428,380);
context.lineTo(475,544);
context.lineTo(340,450);
context.lineTo(205,544);
context.lineTo(252,380);
context.lineTo(120,280);
context.closePath();
context.lineWidth = 10;
// 线条
context.strokeStyle = "#005588";
context.stroke();
// 填充
// context.fillStyle = "#005588";
// context.fill();