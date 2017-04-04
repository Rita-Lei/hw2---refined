var x = 25; // var needs to be put outside the draw function
var spd = 2;
function setup() {
createCanvas(400,400); // if put background here, there would be mulitiple
	                     //  ellipses be drew
}

function draw() {
background(255); // background should be put before ellipse
ellipse(x,200,50,50);
x += spd
if (x<=25 || x>= width-25) {
spd = spd * (-1); // here do not need brackets actually
}
}
