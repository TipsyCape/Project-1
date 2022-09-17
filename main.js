let numBlocks = 100;
let blocks = [];
for (let i=0; i < numBlocks; i++){
    blocks[i] = new Block(0, 0, 10, 10, 0, 0, 0, 0, 0);
}
function setup(){
    createCanvas(windowWidth, windowHeight);
    background(0);
}
let colorR = 0, colorG = 0, colorB = 0;
function draw(){
    for(i=0; i < numBlocks; i++){
        if(mouseIsPressed){
            blocks[i].attract();
        }
        blocks[i].show();
        blocks[i].move();
        //could add some cool launching physics with pmouseX and pmouseY

    }

}