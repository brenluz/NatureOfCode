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
}