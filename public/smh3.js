let w = 24;
let angle = 0;

function setup() {
    createCanvas(800, 800);
};

function draw() {
    background(20);
    translate(width / 4, height / 4);
    rectMode(CENTER);
    let offset = 0;
    for (let y = 0; y < height / 2; y += w) {
        for(let x = 0; x < width / 2; x += w){
            let a = angle + offset;
            let h = floor(map(sin(a), -1, 1, 12, 24))
            let new_w = floor(map(sin(a), -1, 1, 24, 12))
            fill(map(sin(a), -1, 1, 50, 255));
            rect(x, y, new_w - 2, h);
            offset += 0.1234 * PI;
        }
    }    
    angle += 0.06;
}