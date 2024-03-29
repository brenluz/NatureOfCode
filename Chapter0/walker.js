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
        if (this.x < mouseX) {
            this.x += 1;
        }
        if (this.x > mouseX) {
            this.x -= 1;
        }
        if (this.y < mouseY) {
            this.y += 1;
        }
        if (this.y > mouseY) {
            this.y -= 1;
        }
        
    }   
}   