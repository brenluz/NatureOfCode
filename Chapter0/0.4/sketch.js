
function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220,6);
  let x = randomGaussian(mouseX, 30);
  let y = randomGaussian(mouseY, 30);
  fill(random(255), random(255), random(255));
  noStroke();
  circle (x, y, 10);
  }