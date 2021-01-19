var xPos = 10;
var yPos = 10;
var xPos2 = 300;
var yPos2 = 10;

draw = function() {
    
    var randomX = random(0, 400);
    var randomY = random(0, 400);
    
    // night sky
    background(0, 0, 0);
    
    // stars
    fill(255, 255, 255);
    ellipse(randomX, randomY, 5, 5);
    
    // skyline
    fill(153, 144, 144);
    rect(0, 364, 60, 180);
    rect(52, 323, 67, 380);
    rect(100, 276, 60, 180);
    rect(157, 339, 52, 197);
    rect(193, 364, 60, 180);
    rect(247, 323, 67, 380);
    rect(302, 244, 60, 180);
    rect(356, 339, 52, 197);

    // shooting star
    fill(255, 242, 0);
    ellipse(xPos, yPos, 20, 20);
    xPos += 4;
    yPos += 3;
    if (xPos > 400) 
    {
        xPos = 1;
        yPos = 1;
    }
    
    // shooting star 2
    fill(255, 94, 0);
    ellipse(xPos2, yPos2, 20, 20);
    xPos2 -= 4;
    yPos2 += 3;
    if (xPos2 < 0) 
    {
        xPos2 = 300;
        yPos2 = 10;
    }
};



