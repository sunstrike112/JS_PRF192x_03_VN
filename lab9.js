var book = [
    {
        title: "The Giver",
        author: "Nobody",
        stars: 4,
        color: color(189, 171, 209)
        
    },
    {
        title: "No game no life",
        author: "Kazuki",
        stars: 5,
        color : color(232, 206, 35)
    },
    {
        title: "SAO",
        author: "Teruhashi",
        stars: 4,
        color : color(191, 88, 191)
    }
    
];

// draw shelf
fill(173, 117, 33);
rect(0, 120, width, 10);

// draw one book
for (var i = 0;i < book.length ;i++)
{
    fill(book[i].color);
    rect(i*110, 20, 100, 100);
    fill(0, 0, 0);
    text(book[i].title, i*120, 29, 70, 100);
    text(book[i].author, i*120, 60, 70, 100);
    for (var j = 0; j < book[i].stars; j++) {
        image(getImage("cute/Star"),j*20+i*110,90, 20, 30);
    }
}
