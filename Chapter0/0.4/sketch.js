
function setup() {
  createCanvas(400, 400);
  background(220);
  
  

}

function draw() {
  let x = randomGaussian(width/2, 30);
  let y = randomGaussian(height/2, 30);
  fill(random(255), random(255), random(255));
  circle (x, y, 10);
  }