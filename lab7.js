background(219, 255, 255);

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 207);

//draw wall
fill(168, 147, 65);
var wallheight = 0;
var wallbrick = 0;
for (var wallheight;wallheight<200;wallheight+=30)
    {
        for(var wallbrick=0;wallbrick<280;wallbrick+=28)
        {
            rect(60+wallbrick,150+wallheight,28,30);
        }
    }

//draw door
fill(163, 38, 10);
rect(160, 257, 80,120 );
fill(82, 52, 8);
rect(170, 265, 60,100 );

//draw window
var windowmaker = 0;
while (windowmaker < 5)
    {
        fill(230, 74, 230);
        rect(75+windowmaker*55,190,30,40);
        fill(39, 39, 179);
        rect(80+windowmaker*55,195,20,30);
        windowmaker++;
    }
//draw grass
stroke (38, 189, 63);
var grass = 0;
for (grass=0; grass<=399 ; grass+=1)
    {
        line(1+grass,400,1+grass,358);
    }





