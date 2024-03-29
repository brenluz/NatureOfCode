let binho

function setup() {
  createCanvas(400, 400);
  let x = random(width);
  let y = random(height);
  binho = new Walker(x,y);
  apple = new Apple();
  }
  
  function draw() {
    background(220, 10);
    apple.show();
    apple.destroy(binho.x, binho.y);
    binho.step();
    binho.show();

  }