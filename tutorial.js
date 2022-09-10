circleY = 100;                                                              
circleX = 100;                                                              
speedX = 5;
speedY = 5;
circleR = 50;
color1 = 255;
color2 = 0;
color3 = 0;
bCount = 0;

function decTohex(dec){
    return Math.abs(dec).toString(16);
}

function setup(){
    createCanvas(windowWidth, windowHeight);
//    noCursor();     gets rid of cursor
}

function draw(){
    background(0);
    fill(255, 255, 255);
    textSize(32);
    text('Bounces = '+ bCount,  50, 50);
    text('Color = ' + color1 + 'R, ' + color2 + 'G, ' + color3 + 'B',  50, 100);
    text('hex = #' + decTohex(color1) + decTohex(color2) + decTohex(color3), 50, 150);
//    text('Mouse X = ' + floor(mouseX) + '\n' + 'Mouse Y = ' + floor(mouseY), windowWidth - 300, 50);
    

    fill(color1, color2, color3);                                                        //color circle
    circle(circleX, circleY, circleR*2);                                      //make circle

    circleX = circleX + speedX;                                             //keep moving x direction
    circleY = circleY + speedY;                                             //keep moving y direction
    
    if(circleY > windowHeight - circleR || circleY < 0 + circleR){          //if the ball reaches any vertical end, turn it around
        speedY = speedY * -1;
        bCount++;
        color1 = floor(random(1,255));
        color2 = floor(random(1,255));
        color3 = floor(random(1,255));
    } 

    if(circleX > windowWidth - circleR || circleX < 0 + circleR){           //if the ball reaches any horizontal end, turn it around
        speedX = speedX * -1;
        bCount++;
        color1 = floor(random(1,255));
        color2 = floor(random(1,255));
        color3 = floor(random(1,255));
    } 



//    fill(235, 0, 120);
//    circle(mouseX, mouseY, 10);    screwing around with custom cursors...
}

//pauses the screen on mouse click
let paused = true;
function mousePressed(){
    paused = !paused;
    if(paused == true){
        noLoop();
    } else {
        loop();
    }

}