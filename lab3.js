background(74, 181, 247);

//grass
noStroke();
fill(4, 255, 0);
rect(0, 300, 400, 300);

//body
fill(194, 172, 33);
stroke(0, 0, 0);

var bodyX = 155;
var bodyY = 160;
var sizeX = 213;
var sizeY = sizeX/(3/2);

rect(bodyX,bodyY,sizeX,sizeY);

//legs
stroke(5, 1, 1);

var leg1X = bodyX+sizeX/7;
var legY = bodyY+sizeY;
var leg2X = bodyX+sizeX/11;
var leg3X = bodyX+sizeX/1.5;
var leg4X = bodyX+sizeX/1.3; 
var lSizeX = sizeX/8;
var lSizeY = lSizeX * 2.5;

//leg1 
rect(leg1X, legY, lSizeX, lSizeY); 
//leg2
rect(leg2X, legY, lSizeX, lSizeY);
//leg3
rect(leg3X, legY, lSizeX, lSizeY);
//leg4
rect(leg4X, legY, lSizeX, lSizeY); 

//head

var headX = bodyX - sizeX/5;
var headY = bodyY - sizeY/5;
var headSizeX = sizeX/2.5;
var headSizeY = sizeX/2;

rect(headX, headY, headSizeX, headSizeY);


//tail
fill(0, 0, 0); 
rotate(355);
var tailX =  bodyX + sizeX/1.1;
var tailY = bodyY+sizeX/5 ;
var tailSizeX = sizeX/20;
var tailSizeY = sizeX/2;

rect(tailX, tailY, tailSizeX, tailSizeY); 

//eyes

fill(250, 250, 250);
var eyeX = bodyX - sizeX/6;
var eye2X= bodyX - sizeX/30;
var eyeY = bodyY*1.06;
var eyeSize = sizeX/15; 
var pupilSize = eyeSize/3;

//mouth
fill(230, 120, 120);
var mouthX = bodyX - sizeX/5;
var mouthY = eyeY+sizeX/3.5;
var mouthSizeX = sizeX/5;
var mouthSizeY = sizeX/-9;

rect(mouthX, mouthY, mouthSizeX,mouthSizeY);

//tongue

fill(255, 0, 0);

var tongueX=bodyX - sizeX/15;
var tongueY = eyeY+sizeX/4;
var tongueSizeX = sizeX/-12;
var tongueSizeY = sizeX/8;
rect(tongueX, tongueY, tongueSizeX, tongueSizeY);

var x = 0;
var y = 0;



draw = function(){
    
    fill(245, 245-x, 245-x);
    ellipse(eyeX, eyeY, eyeSize+y, eyeSize+y);
    ellipse(eye2X, eyeY, eyeSize+y, eyeSize+y);

    fill(0, 0, 0);
    ellipse(eyeX, eyeY, pupilSize+y/2, pupilSize+y/2);
    ellipse(eye2X, eyeY, pupilSize+y/2, pupilSize+y/2);
    
    x++;
    y++;
    if (x > 50 & y > 50) 
    {
        x = 0;  
        y = 0;
    }
    
};
