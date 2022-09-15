let colorR = 255, colorG = 255, colorB = 255;
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
            colorR = floor(random(1,255));
            colorG = floor(random(1,255));
            colorB = floor(random(1,255));
        }
        this.y = this.y + this.speedY;
        if(this.y > (windowHeight - this.height) || this.y <= 0){
            this.speedY = this.speedY * - 1;
            colorR = floor(random(1,255));
            colorG = floor(random(1,255));
            colorB = floor(random(1,255));
        }
    }
}

let numBlocks = 30;
let blocks = [];
for (let i=0; i < numBlocks; i++){
    blocks[i] = new Block(0, 0, 20, 20, 0, 0);
}

function mousePressed(){
    for (let i=0; i < numBlocks; i++){
        blocks[i].x = mouseX;
        blocks[i].y = mouseY;
        blocks[i].speedX = random(-10,10);
        blocks[i].speedY = random(-10,10);
    }
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
}


function draw(){
    for(i=0; i < numBlocks; i++){
        blocks[i].show();
        blocks[i].move();
    }
}