let numBlocks = 10;
let blocks = [];
for (let i=0; i < numBlocks; i++){
    blocks[i] = new Block(0, 0, 10, 10, 0, 0);
}

let gen = 0;
function mousePressed(){
    gen++;
    if(gen < 2){
        for (let i=0; i < numBlocks; i++){
            blocks[i].x = mouseX;
            blocks[i].y = mouseY;
            blocks[i].speedX = random(-10,10);
            blocks[i].speedY = random(-10,10);
        }
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
        //could add some cool launching physics with pmouseX and pmouseY
        if(mouseIsPressed){
            blocks[i].attract();
        }
    }

}