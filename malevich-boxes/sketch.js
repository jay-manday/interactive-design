let counter = 0;
let s = "click for next scene";

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	rectMode(CENTER);
	angleMode(DEGREES);
}

function draw() {


	if (counter == 0) {
		scene_1();
	} else if (counter == 1) {
		scene_2();
	} else if (counter == 2) {
		scene_3();
	} else if (counter == 3) {
		scene_4();
	}

}

function mousePressed() {
	if (counter > 3) {
		return counter === 0;
	}

	counter++;
	console.log(counter);
}

function scene_1() {
	fill(0);
	textSize(20);
	text(s, 90, 50);
  rect(width/2, height/2, 200, 200);
	rect(width/2, height/2 - 225, 200, 200);
	rect(width/2, height/2 + 225, 200, 200);
}

function scene_2() {
	fill(0);
	rect(width/2 - 225, height/2 , 200, 200);
	rect(width/2 + 225, height/2 , 200, 200);
}

function scene_3() {
	fill(0);
	rect(width/2 - 225, height/2 - 225, 200, 200);
	rect(width/2 + 225, height/2 + 225, 200, 200);
}

function scene_4() {
	fill(0);
	rect(width/2 + 225, height/2 - 225, 200, 200);
	rect(width/2 - 225, height/2 + 225, 200, 200);
}
