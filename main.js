var canvas=new fabric.Canvas ("my_canvas");
blockImagewidth=25;
blockImageheight=25;
player_x=20;
player_y=20; 
var player_object="";
var block_object="";
function player_load () {
    fabric.Image.fromURL("player.png", function(img) {
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,left:player_x
        });
        canvas.add (player_object);
    }); 
}
function block_load(getimage) {
    fabric.Image.fromURL(getimage, function(img) {
        block_object=img;
        block_object.scaleToWidth(blockImagewidth);
        block_object.scaleToHeight(blockImageheight);
        block_object.set({
            top:player_y,left:player_x
        });
        canvas.add (block_object);
    }); 
}
window.addEventListener ("keydown", my_keydown);

function my_keydown(e) {
keypressed = e.keyCode;
console.log (keypressed);
if (e.shiftKey == true && keypressed == '80' ) {
console.log ("user has pressed shift+p");
blockImagewidth= blockImagewidth +10;
blockImageheight=blockImageheight +10;
document.getElementById("name").innerHTML=blockImagewidth;
document.getElementById("nameh").innerHTML=blockImageheight;
}
if (e.shiftKey == true && keypressed == '77' ) {
    console.log ("user has pressed shift+m");
    blockImagewidth= blockImagewidth -10;
    blockImageheight=blockImageheight -10;
    document.getElementById("name").innerHTML=blockImagewidth;
    document.getElementById("nameh").innerHTML=blockImageheight;
    }
    if (keypressed=='38') {
        move_up();
        console.log("we are moving up");
    }
    if (keypressed=='40') {
        move_down();
        console.log("we are moving down");
    }
    if (keypressed=='37') {
        move_left();
        console.log("we are moving left");      
    }
    if (keypressed=='39') {
        move_right();
        console.log("we are moving right");
    }   
    if (keypressed=='67') {
        block_load("cloud - Copy.jpg");
        console.log("c");
    }
        if (keypressed=='68') {
            block_load("dark_green.png");
            console.log("d");
        }
        if (keypressed=='71') {
            block_load("ground-Copy.png");
            console.log("g");
        }
        if (keypressed=='82') {
            block_load("roof - Copy.jpg");
            console.log("r");
        }
        if (keypressed=='84') {
            block_load("trunk - Copy.jpg");
            console.log("t");
        }
        if (keypressed=='85') {
            block_load("unique -Copy.png");
            console.log("u");
        }
        if (keypressed=='87') {
            block_load("wall -Copy.png");
            console.log("w");
        }
        if (keypressed=='89') {
            block_load('yellow_wall - Copy.png');
            console.log("y");
        }        
    }
    function move_up() {
        if (player_y >=0) {
        player_y=player_y-10;
        console.log ("block_image_height ="+ blockImageheight);
        console.log ("when up arrow key pressed "+ player_x  );
        console.log ("when up arrow key pressed "+ player_y  );
        canvas.remove(player_object);
        player_load();
        }
    }
    function move_down() {
        if (player_y <=600) {
        player_y=player_y+10;
        console.log ("block_image_height ="+ blockImageheight);
        console.log ("when up arrow key pressed "+ player_x  );
        console.log ("when up arrow key pressed "+ player_y  );
        canvas.remove(player_object);
        player_load();
        }
    }
    function move_right() {
        if (player_x <= 900) {
        player_x=player_x+10;
        console.log ("block_image_width ="+ blockImagewidth);
        console.log ("when up arrow key pressed "+ player_x  );
        console.log ("when up arrow key pressed "+ player_y  );
        canvas.remove(player_object);
        player_load();
        }
    }
    function move_left() {
        if (player_x >=0) {
        player_x=player_x-10;
        console.log ("block_image_width ="+ blockImagewidth);
        console.log ("when up arrow key pressed "+ player_x  );
        console.log ("when up arrow key pressed "+ player_y  );
        canvas.remove(player_object);
        player_load();
        }
    }