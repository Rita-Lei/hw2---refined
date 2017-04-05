var x = 50; // the initial value of x is 50, which is the radius of the circle
function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0); // background is black
	if(x<width-50){ // while x is not touching the right boundary of the canvas
		x = x + 3;
	ellipse(x,100,100,100);
	}
		else{ // while x is touching the right boundary of the canvas
			x = 50; // reset the value of x back to 50, which means x is placed back 
			        // to the left boundary of the canvas
  }
}
