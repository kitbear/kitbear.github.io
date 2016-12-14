var canvas = document.getElementById('can');
var context = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;
debugger
var tangram = [
	{p:[{x:0,y:0},{x:800,y:0},{x:400,y:400}],color:"#caff67"},
	{p:[{x:0,y:0},{x:400,y:400},{x:0,y:800}],color:"#67becf"},
	{p:[{x:800,y:0},{x:800,y:400},{x:600,y:600},{x:600,y:200}],color:"#ef3d61"},
	{p:[{x:600,y:200},{x:600,y:600},{x:400,y:400}],color:"#f9f51a"},
	{p:[{x:400,y:400},{x:600,y:600},{x:400,y:800},{x:200,y:600}],color:"#caff67"},
	{p:[{x:200,y:600},{x:400,y:800},{x:0,y:800}],color:"#fa8ecc"},
	{p:[{x:800,y:400},{x:800,y:800},{x:400,y:800}],color:"#f6ca29"}
];
debugger
for (var i = 0; i < tangram.length; i++) {
	var path = tangram[i];
	context.beginPath();
	context.moveTo(path.p[0].x,path.p[0].y);
	for (var j = 1; j < path.p.length; j++) {
		context.lineTo(path.p[j].x,path.p[j].y);
	}
	context.closePath();
	context.fillStyle = path.color;
	context.fill();
}