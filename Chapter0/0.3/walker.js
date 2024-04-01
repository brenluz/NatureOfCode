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
        let chance = random(1);
        if (chance < 0.5) {
            if(this.x > mouseX){
                this.x -= 1;
            }
            if(this.x < mouseX){
                this.x += 1;
            }
            if(this.y > mouseY){
                this.y -= 1;
            }
            if(this.y < mouseY){
                this.y += 1;
            }
        }
        if (chance > 0.5) {
            this.x += random(-5, 5);
            this.y += random(-5, 5);
        }
        
    }
}