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

function mouseReleased(){
    for (let i=0; i < numBlocks; i++){
        if(Math.abs(mouseX - pmouseX) < 1 && Math.abs(Math.sqrt(  pow(blocks[i].x - mouseX, 2) + pow(blocks[i].y - mouseY, 2)  )) < 100){
            blocks[i].speedX = random(-10, 10);
        }
        if(Math.abs(mouseY - pmouseY) < 1 && Math.abs(Math.sqrt(  pow(blocks[i].x - mouseX, 2) + pow(blocks[i].y - mouseY, 2)  )) < 100){
            blocks[i].speedY = random(-10, 10);
        }
    }
}

function keyPressed(){
    if(keyCode == UP_ARROW){
        for (let i=0; i < numBlocks; i++){
            blocks[i].width += 5;
            blocks[i].height += 5;
        }
    }
    if(keyCode == DOWN_ARROW){
        for (let i=0; i < numBlocks; i++){
            blocks[i].width -= 5;
            blocks[i].height -= 5;
        }
    }

}
