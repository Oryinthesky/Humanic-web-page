function initcanvas() {

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("logo");

  ctx.canvas.width  = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  var mini = ctx.canvas.width

  if (ctx.canvas.height<ctx.canvas.width) {
   	mini = ctx.canvas.height
	}
	mini = mini*0.7
  ctx.drawImage(img, ctx.canvas.width/2-mini/2, ctx.canvas.height/2-mini/2,mini,mini);
  var size = 10;
  mini = mini*0.9;
  drawCircle (ctx, ctx.canvas.width/2-mini/2, ctx.canvas.height/2 ,size, 1);
  drawCircle (ctx, ctx.canvas.width/2+mini/2, ctx.canvas.height/2 ,size, 3);
  drawCircle (ctx, ctx.canvas.width/2, ctx.canvas.height/2 -mini/2,size, 2);
  drawCircle (ctx, ctx.canvas.width/2, ctx.canvas.height/2 +mini/2,size, 4);
  
}

function drawCircle (context,x,y,size,id) {

  var color = "#EFC462";
  if (id==1) {
    color="#EFC462";
  }
  if (id==2) {
    color="#15B788";
  }
  if (id==3) {
    color="#2E3192";
  }
  if (id==4) {
    color="#F15A24";
  }

  context.beginPath();
  context.arc (x,y,size,0,Math.PI * 2,true);
  context.fillStyle = color;
  context.fill();
  context.closePath();
}

function drawAbanico (id) {
  var color = "#EFC462"
  if (id==1) {
    color="#FFFFFF";
  }
  if (id==2) {
    color="#FFFFFF";
  }
  if (id==3) {
    color="#FFFFFF";
  }
  if (id==4) {
    color="#FFFFFF";
  }
  context.fillStyle = color;
  context.fill();
}

