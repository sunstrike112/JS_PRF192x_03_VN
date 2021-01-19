
mouseClicked = function(){
    fill(random(0,255),random(0,255),random(0,255));
    ellipse(200, 200, 375, 375);
    fill(random(0,255),random(0,255),random(0,255));
    triangle(200, 90, 350, 300, 70, 300);
    fill(random(0,255), random(0,255), random(0,255));
    var answer = floor(random(1,6));
    if (answer === 1) {
        textSize(20);
        text("GOOD", 170, 200);
        text("MORNING", 160, 255); 
    }
    else if (answer === 2){
        textSize(30);
        text("BEYOND", 142, 230);
        text("GODLIKE", 139, 280);
    }
    else if (answer === 3){
        textSize(25);
        text("WELCOME", 140, 240);
        text("TO MY PROJECT", 110, 290);
    }
    else if (answer === 4){
        textSize(20);
        text("HAVE A", 170, 200);
        text("NICE DAY!", 160, 255);
    }
    else if (answer === 5){
        textSize(28);
        text("END GAME", 130, 230);
        text("GOOD BYE!", 120, 265);
    }    
    };
    
    