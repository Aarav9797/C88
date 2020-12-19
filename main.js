var canvas = new fabric.Canvas("myCanvas");
var player_X = 10;
var player_Y = 10;
var block_image_width = 30;
var block_image_height = 30;
var block_object = " ";
var player_object = " ";

function player_update() {
    fabric.Image.fromURL(
        "player.png",
        function (Img) {
            player_object = Img;
            player_object.scaleToWidth(150);
            player_object.scaleToHeight(140);
            player_object.set({
                top: player_Y,
                left: player_X
            });
            canvas.add(player_object);
        }

    );

}

function update_block(Bimg) {
    fabric.Image.fromURL(
        Bimg,
        function (Img) {
            block_object = Img;
            block_object.scaleToWidth(block_image_width);
            block_object.scaleToHeight(block_image_height);
            block_object.set({
                top: player_Y,
                left: player_X
            });
            canvas.add(block_object);
        }
    );

}
window.addEventListener("keydown", MyKeyPress);

function MyKeyPress(e) {
    console.log(e);
    var keypress = e.keyCode;
    if (keypress == 84) {
        console.log("trunk");
        update_block("trunk.jpg");
    }
    if (keypress == 71) {
        console.log("Ground");
        update_block("ground.png");
    }
    if (keypress == 68) {
        console.log("Dark Green");
        update_block("dark_green.png");
    }
    if (keypress == 67) {
        console.log("Cloud");
        update_block("cloud.jpg");
    }
    if (keypress == 76) {
        console.log("Light green");
        update_block("light_green.png");
    }
    if (keypress == 82) {
        console.log("roof");
        update_block("roof.jpg");
    }
    if (keypress == 85) {
        console.log("Unique");
        update_block("unique.png");
    }
    if (keypress == 87) {
        console.log("Wall");
        update_block("wall.jpg");
    }
    if (keypress == 89) {
        console.log("Yellow wall");
        update_block("yellow_wall.png");
    }
    if (keypress == 77 && e.shiftKey == true) {
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("block_height").innerHTML=block_image_height;
        document.getElementById("block_width").innerHTML=block_image_width;
    }
    if (keypress == 80 && e.shiftKey == true) {
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("block_height").innerHTML=block_image_height;
        document.getElementById("block_width").innerHTML=block_image_width;
    }
    if (keypress == 38) {
        console.log("Up");
        Up();
    }
    if (keypress == 40) {
        console.log("Down");
        Down();
    }
    if (keypress == 39) {
        console.log("Right");
        Right();
    }
    if (keypress == 37) {
        console.log("Left")
        Left();
    }
}

function Up() {
    if (player_Y > 0) {
        player_Y = player_Y - block_image_height;
        canvas.remove(player_object);
        player_update();
    }

}

function Down() {
    if (player_Y < 460) {
        player_Y = player_Y + block_image_height;
        canvas.remove(player_object);
        player_update();
    }

}

function Right() {
    if (player_X < 850) {
        player_X = player_X + block_image_width;
        canvas.remove(player_object);
        player_update();
    }

}

function Left() {
    if (player_X > 0) {
        player_X = player_X - block_image_width;
        canvas.remove(player_object);
        player_update();
    }

}
