circleY = 100;                                                              
circleX = 100;                                                              
speedX = 5;
speedY = 5;
circleR = 50;
bCount = 0;

function setup(){
    createCanvas(windowWidth, windowHeight);
}

function draw(){
    background(0);
    fill(255, 255, 255);
    textSize(32);
    text('Bounces = '+ bCount,  50, 50);

    fill(255, 0, 0);                                                        //color circle
    circle(circleX, circleY, circleR);                                      //make circle

    circleX = circleX + speedX;                                             //keep moving x direction
    circleY = circleY + speedY;                                             //keep moving y direction
    
    if(circleY > windowHeight - circleR || circleY < 0 + circleR){          //if the ball reaches any vertical end, turn it around
        speedY = speedY * -1;
        bCount++;
    } 

    if(circleX > windowWidth - circleR || circleX < 0 + circleR){           //if the ball reaches any horizontal end, turn it around
        speedX = speedX * -1;
        bCount++;
    } 
}