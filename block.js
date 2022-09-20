let decel = 1;
class Block{
    constructor(x, y, width, height, speedX, speedY, R, G, B){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speedX = speedX;
        this.speedY = speedY;
        this.R = R;
        this.G = G;
        this.B = B;
    }
    show(){
        noStroke();
        fill(this.R, this.G, this.B);
        rect(this.x,this.y,this.width,this.height);
    }
    move(){
        this.x = this.x + this.speedX;
        if(this.x > (windowWidth - this.width) || this.x <= 0){
            // this.R = floor(random(0,255));
            // this.G = floor(random(0,255));
            // this.B = floor(random(0,255)); 
            this.speedX = this.speedX * - 1;
            if(this.speedX > 0){
                this.speedX = this.speedX - decel;
            } else if(this.speedX < 0){
                this.speedX = this.speedX + decel;
            }
        }
        this.y = this.y + this.speedY;
        if(this.y > (windowHeight - this.height) || this.y <= 0){
            // this.R = floor(random(0,255));
            // this.G = floor(random(0,255));
            // this.B = floor(random(0,255));            
            this.speedY = this.speedY * - 1;
            if(this.speedY > 0){
                this.speedY = this.speedY - decel;
            } else if(this.speedX < 0){
                this.speedY = this.speedY + decel;
            }
        }
        
    }
    attract(){
        //attract towards mouse
        if(Math.abs(Math.sqrt(  pow(this.x - mouseX, 2) + pow(this.y - mouseY, 2)  )) < 500){
            if(Math.abs(this.speedX) < 10){
            this.speedX = this.speedX + Math.abs(pmouseX - mouseX) / 60;
            }
            if(Math.abs(this.speedY) < 10){
            this.speedY = this.speedY + Math.abs(pmouseY - mouseY) / 60;
            }
            if(this.speedX > this.speedY){
                this.speedY = this.speedX;
            } else if (this.speedY > this.speedX){
                this.speedX = this.speedY;
            }
            if(this.x > mouseX && this.speedX > 0){
                this.speedX = this.speedX * -1;
            }
            if(this.x < mouseX && this.speedX < 0){
                this.speedX = this.speedX * -1;
            }
            if(this.y > mouseY && this.speedY > 0){
                this.speedY = this.speedY * -1;
            }
            if(this.y < mouseY && this.speedY < 0){
                this.speedY = this.speedY * -1;
            }
        }
    }
}