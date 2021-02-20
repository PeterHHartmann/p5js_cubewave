let w = 25;
let angle = 0;
let actual_angle;
let max = (800 / 2) / w;
let minD;
let maxD;

function setup() {
    createCanvas(800, 800);
    actual_angle = PI;
    minD = 6;
    maxD = 24;

}

function draw() {
    background(20);
    translate(width / 4, height / 4);
    rectMode(CENTER);
    fill(255);
    for (let y = 0; y <= max; y++) {
        let offsetY;
        if(y < max / 2){
            offsetY = map(y, 0, max, actual_angle, -actual_angle);
        } else {
            offsetY = map(y, 0, max, -actual_angle, actual_angle);
        }
        for(let x = 0; x <= max; x++){
            let offsetX;
            if(x < max / 2){
                offsetX = map(x, 0, max, actual_angle, -actual_angle);
            } else {
                offsetX = map(x, 0, max, -actual_angle, actual_angle);
            }
            let a = angle + offsetX;
            let a2 = angle + offsetY;
            let h = floor(map(sin(a), -1, 1, minD, maxD));
            let nw = floor(map(sin(a2), -1, 1, minD, maxD));
            fill(map(h + nw, minD * 2, maxD * 2, 20, 235));
            rect(x * w, y * w, nw, h);
        }
    }
    angle += 0.08;
}