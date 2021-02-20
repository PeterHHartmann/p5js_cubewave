let w = 10;
let angle = 0;
let actual_angle;
let max = 60;
let minD;
let maxD;

function setup() {
    createCanvas(800, 800);
    actual_angle = PI;
    minD = w / 2;
    maxD = w;

}

function draw() {
    background(20);
    translate(width / 8, height / 8);
    rectMode(CENTER);
    fill(255);
    for (let y = 0; y < max; y++) {
        let offsetY;
        if(y <= max / 2){
            offsetY = map(y, 0, max, sqrt(0), sqrt(20));
        } else {
            offsetY = map(y, 0, max, sqrt(20), sqrt(0));
        }
        for(let x = 0; x < max; x++){
            let offsetX;
            if(x <= max / 2){
                offsetX = map(x, 0, max, sqrt(0), sqrt(20));
            } else {
                offsetX = map(x, 0, max, sqrt(20), sqrt(0));
            }
            let a = angle + offsetX + offsetY;
            let h = map(sin(a), -1, 1, minD, maxD);

            fill(map(h, maxD, minD, 20, 200), map(h, minD / 2, maxD / 2, 0, 100), map(h, minD, maxD, 0, 255));
            
            rect(x * w, y * w, h);
        }
    }
    angle += 0.04;
}