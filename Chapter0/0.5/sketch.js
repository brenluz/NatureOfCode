let binho 
function setup() {
  createCanvas(400, 400);
  let x = random(width);
  let y = random(height); 
  background(220,10);
  binho = new Walker(x, y);

}

function draw() {
    binho.show();
    binho.step();
    }