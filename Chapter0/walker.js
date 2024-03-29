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
        
        let xstep = randomGaussian(0, 5);
        let ystep = randomGaussian(0, 5);

        this.x += xstep;
        this.y += ystep;

        if (this.x > width) {
            this.x = 0;
        }
        if (this.x < 0) {
            this.x = width;
        }
        if (this.y > height) {
            this.y = 0;
        }
        if (this.y < 0) {
            this.y = height;
        }
}
}