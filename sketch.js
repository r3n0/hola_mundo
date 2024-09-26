function setup() {
	createCanvas(windowWidth, windowHeight);
	// frameRate(24);
	background(0);
	rectMode(CENTER);
}

function draw() {
	background(10, random(0, 100), 255, 10);

	strokeWeight(5);
	noFill();
	stroke(mouseY, 255, 0);
	circle(mouseX + 80, mouseY, mouseX);

	strokeWeight(1);
	stroke(0, 255, 0);
	fill(200, 60, 0);
	rect(mouseX, mouseY, 100, 100);
}
