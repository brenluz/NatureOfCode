class Walker {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        stroke(0);
        strokeWeight(5);
        point(this.x, this.y);
    }

    step() {
        this.x += noise(this.y) - 0.5;
        this.y += noise(this.x) - 0.5;
    }
}