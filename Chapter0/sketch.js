let binho

function setup() {
  createCanvas(400, 400);
  background(220);

  }
  
  function draw() {
    let x = randomGaussian(width/2, 10);
    let y = randomGaussian(height/2, 10);
    let color = randomGaussian(128,100);
    fill(color);
    circle(x,y,10);
  }