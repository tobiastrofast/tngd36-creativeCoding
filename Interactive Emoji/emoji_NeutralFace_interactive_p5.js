let x = 200;
let y = 200;
function setup() {
  createCanvas(400, 400);
  let button = createButton("Restart");
  button.mousePressed(restart);
}
function restart(){
  background(255);
  }
function draw() {
  //background(255);
  if(mouseIsPressed){
    let scaleFactor = 1;
    scale(scaleFactor);
    x = mouseX/scaleFactor;
    y = mouseY/scaleFactor;
    fill(255,200,0);
    stroke(0);
    strokeWeight(4);
    circle(x,y,150);
    line(x-30,y+10,x+30,y+10);
    noStroke();
    fill(0);
    ellipse(x-20,y-25,10,10);
    ellipse(x+20,y-25,10,10);
  }
}
