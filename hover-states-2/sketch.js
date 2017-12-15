function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	fill(0, 50);
	stroke(255, 50);
}

function draw(){
	background(240);

	let ang1 = TWO_PI * noise(0.01*frameCount + 10);
	let ang2 = TWO_PI * noise(0.01*frameCount + 20);
	let ang3 = TWO_PI * noise(0.01*frameCount + 30);
	let rx = 60 * noise(mouseX);
	let tx = 200 * noise(mouseY);
	let size1 = 200 * noise(0.01*mouseX + 60);
	let size2 = 50 * noise(0.01*mouseY + 60);

	translate(width/2, height/2);
	for (let i = 0; i < 8; i++) {
		push();
		rotate(ang1 + TWO_PI * i / 8);
		translate(tx, 0);
		rect(0, 0, size1, size1);
		for (let j = 0; j < 6; j++) {
			push();
			rotate(ang2 + TWO_PI * j / 6);
			translate(rx, 0);
			rotate(ang3);
			rect(rx, 0, size2, size2);
			pop();
		}
		translate()
		pop();
	}
}
