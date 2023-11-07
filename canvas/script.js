var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// retângulo
//context.fillRect(x, y, width, height)
c.fillRect(100,100,10,10);
c.fillRect(105,150,100,100);
c.fillRect(200,100,10,10);

// linha
c.beginPath();
c.moveTo(50,300);
c.lineTo(300,100);
c.lineTo(300,300);
c.strokeStyle = "rgba(0,0,255,1)" ;
c.stroke();


// arco

// context.arc(x, y, r, sAngle, eAngle, counterclockwise)
//c.beginPath();
//c.arc(300,300,50,0,Math.PI * 2, false);
//c.strokeStyle = "#0000ff" ;
//c.stroke();
//console.log(Math.random());

for (var i = 0; i<4; i++) {
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  c.beginPath();
  c.arc(x,y,50,0,Math.PI * 2, false);
  var cor = "rgb("+ Math.random() * 255 +","+ Math.random() * 255 +", "+ Math.random() * 255 +")"
  c.strokeStyle = cor;
  c.stroke();
  
}

//c.beginPath();
//c.arc(100,100,50,0,Math.PI * 2, false);
//c.strokeStyle = "#000000" ;
//c.stroke();

var x = Math.random() * innerWidth;
var y = Math.random() * innerWidth;
var dx = (Math.random() - .5)* 4;
var dy = (Math.random() - .5) * 4;

function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0 , 0, innerWidth, innerHeight);
  c.beginPath();
  c.arc(x,y,50,0,Math.PI * 2, false);
  c.strokeStyle = "#000000" ;
  c.stroke();
  if (x + 50 > innerWidth || x - 50 < 0) {
    dx = -dx
  }
  if (y + 50 > innerHeight || y - 50 < 0) {
    dy = -dy
  }
  x += dx;
  y += dy;
}

animate();
