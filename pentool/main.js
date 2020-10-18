let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "hsl(30,50%,50%)"
ctx.fillRect(0, 0, canvas.width, canvas.height);

let penDown = false;
let last_x = 0;
let last_y = 0;

canvas.addEventListener("mousedown", function(evt) {
    penDown = true;

    let x = evt.clientX;
    let y = evt.clientY;

    last_x = x;
    last_y = y;

    ctx.beginPath();
    // ctx.moveTo(0, 0);
    // ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fillRect(x - 5, y - 5, 10, 10);
    // ctx.lineTo(x, y);
    ctx.stroke();
});

canvas.addEventListener("touchstart", function(evt) {
    let touches = Array.from(evt.touches);
    let touch = touches[0];

    penDown = true;

    let x = touch.clientX;
    let y = touch.clientY;

    last_x = x;
    last_y = y;

    ctx.beginPath();
    // ctx.moveTo(0, 0);
    // ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fillRect(x - 5, y - 5, 10, 10);
    // ctx.lineTo(x, y);
    ctx.stroke();
});

canvas.addEventListener("mousemove", function(evt) {
    if (penDown == false) {
        return;
    }
    let x = evt.clientX;
    let y = evt.clientY;

    ctx.beginPath();
    ctx.moveTo(last_x, last_y);
    ctx.lineTo(x, y);
    // ctx.moveTo(0, 0);
    // ctx.arc(x, y, 5, 0, 2 * Math.PI);
    // ctx.fillStyle = "red";
    // ctx.fillRect(x - 5, y - 5, 10, 10);
    // ctx.lineTo(x, y);
    ctx.stroke();

    last_x = x;
    last_y = y;
});

canvas.addEventListener("touchmove", function(evt) {
    evt.preventDefault();

    let touches = Array.from(evt.touches);
    let touch = touches[0];

    let x = touch.clientX;
    let y = touch.clientY;

    ctx.beginPath();
    ctx.moveTo(last_x, last_y);
    ctx.lineTo(x, y);

    ctx.stroke();

    last_x = x;
    last_y = y;
});

canvas.addEventListener("mouseup", function(evt) {
    penDown = false;
    let x = evt.clientX;
    let y = evt.clientY;

    ctx.beginPath();
    // ctx.moveTo(0, 0);
    // ctx.arc(x, y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fillRect(x - 5, y - 5, 10, 10);
    // ctx.lineTo(x, y);
    ctx.stroke();
});

canvas.addEventListener("mouseout", function(evt) {
    penDown = false;

});