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
        this.x += randomGaussian(0, 3);
        this.y += randomGaussian(0, 3);
    }
}