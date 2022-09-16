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
        if(pmouseX - mouseX < 0.1 && Math.abs(Math.sqrt(  pow(blocks[i].x - mouseX, 2) + pow(blocks[i].y - mouseY, 2)  )) < 100){
            blocks[i].speedX = random(-10, 10);
        }
        if(pmouseY - mouseY < 0.1 && Math.abs(Math.sqrt(  pow(blocks[i].x - mouseX, 2) + pow(blocks[i].y - mouseY, 2)  )) < 100){
            blocks[i].speedY = random(-10, 10);
        }
        if(Math.abs(Math.sqrt(  pow(blocks[i].x - mouseX, 2) + pow(blocks[i].y - mouseY, 2)  )) < 100){
            if(blocks[i].speedX < 10){
                blocks[i].speedX = blocks[i].speedX + Math.abs(pmouseX - mouseX) / 60;
            }
            if(blocks[i].speedY < 10){
            blocks[i].speedY = blocks[i].speedY + Math.abs(pmouseY - mouseY) / 60;
            }
        }
    }
}