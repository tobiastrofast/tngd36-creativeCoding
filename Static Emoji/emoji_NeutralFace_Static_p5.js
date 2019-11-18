function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  fill(255,200,0);
  stroke(0);
  strokeWeight(4);
  circle(200,200,150);
  line(170,210,230,210);
  noStroke();
  fill(0);
  ellipse(180,175,10,10);
  ellipse(220,175,10,10);
}