
function setup() {
  createCanvas(720, 480);  //do not touch!
  strokeWeight(2);
  ellipseMode(RADIUS);
}



function draw() {
  background(255, 126, 12);
  fill(255, 177, 0)
  ellipse(530, 305, 100, 100)
  fill(18, 99, 0)
  rect(0, 300, 720, 480)
  // Neck
  fill(154, 89, 17)
  rect(266, 162, 20, 100); // bruh


  // Body
  noStroke(); // Disable stroke
  fill(500);
  ellipse(200, 360, 20, 33);
  fill(500);
  ellipse(110, 365, 20, 33);
  fill(500);
  ellipse(150, 355, 20, 33);
  fill(500);
  ellipse(250, 363, 20, 33);
  fill(154, 89, 17);
  ellipse(200, 290, 100, 60);
  fill(154, 89, 17);
  ellipse(276, 155, 45); // Head
   // Pupil
  fill(200, 250, 150, 90); // Set fill to light gray
  fill(234, 219, 0);
  triangle(320, 140, 400, 140, 315, 180 );



  // beak
  stroke('black')
  color('black')
  line (320, 160, 375, 150)
  fill(4000); // Set fill to white
  ellipse(288, 150, 14, 14); // eye
  fill(16, 170, 226); // Set fill to black
  ellipse(295, 150, 3, 3);


}
