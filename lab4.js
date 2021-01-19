var x = random(0, 255);
var y = random(0, 255);
var z = random(0, 255);

textSize(25);
fill(204, 51, 204);
text("RECTANGLE!", 50, 120);
rect(230,80,140,80);
fill(21, 51, 150);
ellipse(120,220,150,120);
text("ELLIPSE!", 250, 222);
textSize(35);
fill(162, 255, 0);
text("TRIANGLE!", 30, 350);
triangle(250,370,250,250,400,370);
var draw = function() {
     

fill(255, 0, 0);
textSize(30);
text("Chose SHAPE and DELETE !!", 10, 62);




noStroke();
fill(255, 255, 255);
ellipse(mouseX, mouseY, 50, 50);

};
