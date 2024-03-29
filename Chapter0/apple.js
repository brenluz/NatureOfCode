class Apple {
  constructor() {
    this.name = 'Apple';
    this.x = random(width);
    this.y = random(height);
  }

    show() {
        fill(255, 0, 0);
        ellipse(this.x, this.y, 50, 50);
    }
    destroy(binhox, binhoy) {
        if (dist(binhox, binhoy, this.x, this.y) < 25) {
            this.x = random(width);
            this.y = random(height);
        }
    }
}