var xPositions = [200,100];
var yPositions = [0,300];

draw = function() {
    background(255, 255, 255);
for (var i = 0; i < xPositions.length; i++) {
    noStroke();
    fill(mouseX, mouseY, random(0,255));
    if (yPositions[i] > 400){
        yPositions[i] = random(0,200);
    }
    ellipse(xPositions[i], yPositions[i], 10, 10);
    yPositions[i] += random(1,5);
    }
};
mouseClicked = function(){
    xPositions.push(mouseX);
    yPositions.push(mouseY);
    };
