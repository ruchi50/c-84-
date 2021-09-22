canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
background_img = "mars.jpg";

rover_img = "rover.png";

roverX = 10;
roverY = 10;

function add() {

    bg_img = new Image;
    bg_img.onload = uploadBackground;
    bg_img.src = background_img;


    rover_img = new Image;
    rover_img.onload = uploadrover;
    rover_img.src = rover_img;


}

function uploadBackground() {

    ctx.drawImage(bg_img, 0, 0, canvas.width, canvas.height);

}

function uploadrover() {

    ctx.drawImage(rover_img, roverX, roverY, rover_width, rover_height);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keycode;
    console.log(keyPressed);

    if (keyPressed == '40') {
        down();
        console.log("down key is pressed");

    }

    if (keyPressed == '39') {
        right();
        console.log("right key is pressed");

    }
    if (keyPressed == '38') {
        up();
        console.log("up key is pressed");

    }
    if (keyPressed == '37') {
        left();
        console.log("left key is pressed");

    }


}