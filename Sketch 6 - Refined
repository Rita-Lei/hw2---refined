var x = 100;
var y = 100;
var spd = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  x = x + spd;
  ellipse(x, y, 50, 50);
	
  if (x > width-25 || x <= 25) {
  	spd = spd * -1;
  }	
}
	
function mousePressed(){ // *** define x = mouseX and y = mouseY
	x = mouseX;
	y = mouseY;
} 
