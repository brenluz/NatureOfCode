let binho

function setup() {
  createCanvas(400, 400);
  background(220);
  let x = random(width);
  let y = random(height);
  binho = new Walker(x, y);
  }
  
  function draw() {
    binho.show();
    binho.step();

  }