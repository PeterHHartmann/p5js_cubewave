let angle = 0;

function setup() {
    createCanvas(800, 800);
};

function draw() {
    background(0);
    translate(width / 2, height / 2);
    rectMode(CENTER);
    fill(255);

    let h = (angle, modifier) => {
        let mapped = map(modifier, 0, 10, 0, 0.4)
        return map(sin(angle + mapped), -1, 1, 5, 80);
    }

    let w = (angle, modifier) => {
        let mapped = map(modifier, 0, 10, 0, 0.4)
        return map(sin(angle + mapped), -1, 1, 5, 80);
    }

    let drawRectangles = (x, y, modifier, cap) => {
        rect(x, y, w(angle, modifier), h(angle, modifier));
        rect(-x, y, w(angle, modifier), h(angle, modifier));
        x += 10;
        modifier += 1;
        if(x === cap * 10){
            return;
        } else {
            drawRectangles(x, y, modifier, cap);
        }
    }

    let drawEvenMoreRectangles = (x, y, modifier, cap) => {
        drawRectangles(x, y, modifier, cap);
        drawRectangles(x, -y, modifier, cap);
        y += 10;
        modifier += 2;
        if(y === cap * 10){
            return;
        } else {
            drawEvenMoreRectangles(x, y, modifier, cap);
        }

    }

    drawEvenMoreRectangles(0, 0, 0, 20
);
    angle += 0.1;
}

// ------------------------------------------

// let angle = 0;

// function setup() {
//     createCanvas(800, 800);
// };

// function draw() {
//     background(0);
//     translate(width / 2, height / 2);
//     rectMode(CENTER);
//     fill(255);

//     let h = (angle, modifier) => {
//         let mapped = map(modifier, 0, 10, 0, 0.4)
//         return map(sin(angle + mapped), -1, 1, 5, 80);
//     }

//     let w = (angle, modifier) => {
//         let mapped = map(modifier, 0, 10, 0, 0.4)
//         return map(sin(angle + mapped), -1, 1, 5, 80);
//     }

//     let drawRectangles = (x, y, modifier, cap) => {
//         rect(x, y, w(angle, modifier), h(angle, modifier));
//         rect(-x, y, w(angle, modifier), h(angle, modifier));
//         x += 10;
//         modifier += 1;
//         if(x === cap * 10){
//             return;
//         } else {
//             drawRectangles(x, y, modifier, cap);
//         }
//     }

//     let drawEvenMoreRectangles = (x, y, modifier, cap) => {
//         drawRectangles(x, y, modifier, cap);
//         drawRectangles(x, -y, modifier, cap);
//         y += 10;
//         modifier += 2;
//         if(y === cap * 10){
//             return;
//         } 
//         else {
//             drawEvenMoreRectangles(x, y, modifier, cap);
//         }

//     }

//     drawEvenMoreRectangles(0, 0, 0, 20);
//     angle += 0.1;
// }

