function preload(){
}

function setup() {
    canvas = createCanvas(500,400);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,100,80,300,250);

    stroke(168, 10, 10);
    fill(168, 10, 10);
    
    circle(40,40,60);
    circle(460,40,60);
    circle(40,360,60);
    circle(460,360,60);


    stroke(50, 168, 82);
    fill(50, 168, 82);

    rect(63, 27, 375, 13);
    rect(63, 347, 375, 13);
    rect(25, 65, 25, 270);
    rect(448, 65, 25, 270);
}

function take_snapshot(){
    save("frame.png");
}



