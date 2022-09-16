let colorR = 255, colorG = 255, colorB = 255;
let decel = 0.5;
class Block{
    constructor(x, y, width, height, speedX, speedY){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speedX = speedX;
        this.speedY = speedY;
    }
    show(){
        fill(colorR, colorG, colorB);
        rect(this.x,this.y,this.width,this.height);
    }
    move(){
        this.x = this.x + this.speedX;
        if(this.x > (windowWidth - this.width) || this.x <= 0){
            this.speedX = this.speedX * - 1;
            if(this.speedX > 0){
                this.speedX = this.speedX - decel;
            } else if(this.speedX < 0){
                this.speedX = this.speedX + decel;
            }
            colorR = floor(random(1,255));
            colorG = floor(random(1,255));
            colorB = floor(random(1,255));
        }
        this.y = this.y + this.speedY;
        if(this.y > (windowHeight - this.height) || this.y <= 0){
            this.speedY = this.speedY * - 1;
            if(this.speedY > 0){
                this.speedY = this.speedY - decel;
            } else if(this.speedX < 0){
                this.speedY = this.speedY + decel;
            }
            colorR = floor(random(1,255));
            colorG = floor(random(1,255));
            colorB = floor(random(1,255));
        }
        
    }
    attract(){
        //attract towards mouse
        if(Math.abs(Math.sqrt(  pow(this.x - mouseX, 2) + pow(this.y - mouseY, 2)  )) < 100){
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