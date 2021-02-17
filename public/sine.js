let angles = [];

function setup() {
    createCanvas(400, 400);
    for(let i = 0; i < (width / 10); i++){
        let new_angle = i / 10;
        angles.push(new_angle);
    }
    console.log(angles);
    start = -(width / 2);
};

function draw() {
    background(0);
    translate(width / 2, height / 2);
    rectMode(CENTER);
    fill(255);
    let left = 0;
    let right = 0;
    for(let angle of angles){
        fill(map(sin(angle), -1, 1, 25, 230));
        let h = map(sin(angle), -1, 1, 50, 200);
        let t = map(sin(angle), -1, 1, 0, 0.2);

        rect(left, 0, 10, h + t);
        rect(right, 0, 10, h + t);
        left += 10;
        right -= 10;
    }

    angles = angles.map(n => n + 0.1);
}

