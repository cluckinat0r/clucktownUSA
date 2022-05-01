
function setup() {
  createCanvas(720, 480);  //do not touch!
  strokeWeight(2);
  ellipseMode(RADIUS);
}



function draw() {
  background(127, 0, 0);

  fill('black');
  ellipse(470, 70, 170, 170);
  fill(500);
  ellipse(400, 20, 70, 70); //  eye
  fill(500);
  ellipse(540, 20, 70, 70);
  fill(165, 2, 2);
  ellipse(430, 50, 30, 30);
  ellipse(570, 50, 30, 30);
  fill('yellow');
  triangle(465, 50, 450, 120, 600, 100);
  line(460, 100, 600, 100);


  fill('yellow');
  ellipse(270, 200, 170, 170);
  fill(500);
  ellipse(200, 150, 70, 70); //  eye
  fill(500);
  ellipse(340, 150, 70, 70);
  fill('orange');
  triangle(265, 180, 250, 250, 400, 230);
  line(260, 230, 400, 230);
  fill('black');
  ellipse(200, 150, 20, 20);
  ellipse(340, 150, 20, 20);

  fill('white');
  ellipse(20, 100, 170, 170); // Body
  fill(500);
  ellipse(-20, 50, 70, 70); //  white of the eyes
  fill(500);
  ellipse(120, 50, 70, 70); // white of the eyes
  fill(165, 2, 2);
  ellipse(10, 90, 22, 22); // pupil
  ellipse(145, 90, 22, 22); // Pupil
  fill('orange');
  triangle(45, 80, 30, 150, 180, 130); // beak
  line(40, 130, 180, 130); // mouth slit




  fill('orange');
  ellipse(670, 370, 170, 170);
  fill(500);
  ellipse(600, 320, 70, 70); //  eye
  fill(500);
  ellipse(740, 320, 70, 70);
  fill('yellow');
  triangle(675, 350, 680, 420, 530, 400);
  line(670, 400, 530, 400);
  fill('black');
  ellipse(545, 300, 11, 11);
  ellipse(685, 300, 11, 11);

}
