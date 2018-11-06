var mic;


function setup() {
    createCanvas(windowWidth, windowHeight);
	mic = new p5.AudioIn();
	mic.start();
}

function draw() {
  background(255);
	var volume = mic.getLevel();

    fill(0);
    triangle(630, 775, 758, 720, 586, 375);

	noStroke();
	fill(105, 125, 171);
	ellipse(600, 300, 300, 400);
	fill(225);
	ellipse(500, 200, 50, 50);
	ellipse(700, 200, 50, 50);

	fill(0);
	ellipse(500, 200, 30, 30);
	ellipse(700, 200, 30, 30);
	stroke(139,69,19);
	strokeWeight(10);
	line(685, 160, 715, 160);
	line(485, 160, 515, 160);
	stroke(0);
	strokeWeight(3);
  line(570, 340, 610, 300);
  	line(570, 340, 610, 339.5);
	ellipse(600, 400, 50,volume * 250);

   fill('red');
   noStroke();
  ellipse(600, 130, 400, 100);
ellipse(600, 60, 50, 50);


fill(199,100,20);
   textFont("century gothic");
       textSize(20);
   textAlign(CENTER);
   text("Say something!",150,height/2.5);
}

function windowResized() {
   resizeCanvas(windowWidth,windowHeight);
}
