function setup() {
	createCanvas(windowWidth, windowHeight);
	// frameRate(24);
	background(0);
	rectMode(CENTER);
}

function draw() {
	background(10, random(0, 100), 255);
	fill(mouseY, 255, 0);
	circle(mouseX + 80, mouseY, mouseX);
	fill(200, 60, 0);
	rect(mouseX, mouseY, 100, 100);
}
