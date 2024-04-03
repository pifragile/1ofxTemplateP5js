let cs;

function setup() {
    cs = min(windowHeight, windowWidth);
    createCanvas(cs, cs);
    noLoop();
    colorMode(HSB);
    noStroke();
}

function draw() {
    background(random1ofx() * 360, 100, 100);
    fill(random1ofx() * 360, 100, 100);
    circle(random1ofx() * cs, random1ofx() * cs, 0.2 * cs);
}

function windowResizedUser() {
    cs = min(windowHeight, windowWidth);
    resizeCanvas(cs, cs);
}