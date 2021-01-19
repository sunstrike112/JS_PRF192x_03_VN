background(20, 151, 158);

var centerX = 0 ,centerY = 0, bodyLength = 50,bodyHeight = 50;
var count = 0;

var drawfish =function(centerX,centerY,bodyLength,bodyColor){
    
    noStroke();
    fill(random(0,255), random(0,255), random(0,255));
    // body
    ellipse(centerX, centerY, bodyLength, bodyHeight);
    // tail
    var tailWidth = bodyLength/4;
    var tailHeight = bodyHeight/2;
    triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
    // eye
    fill(33, 33, 33);
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);
};


var mouseClicked = function(){
    if (mouseX < 100)
    {    
        drawfish(random(50,200),random(30,350),random(50,100),random(200,100));
        count++;
    }   
    else if (mouseX > 100 && mouseX < 200)
    {
        drawfish(random(100,200),random(30,400),random(20,50),random(20,50));
        count++;
    }
    else
    {
        drawfish(random(200,350),random(30,400),random(110,150),random(200,100));
        count++;
    }
    if (count > 20)
    {
        background(random(0,255), random(0,255), random(0,255));
        count = 0;
    }
};

