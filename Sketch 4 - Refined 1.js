var x = 100;
var spd = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  x = x + spd;
  ellipse(x, 100, 50, 50);
	
  if (x >= width-25) {
  	spd = spd * -1;
  }
}
