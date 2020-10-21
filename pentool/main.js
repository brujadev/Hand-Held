import { pointsAlongLine } from "./vector.js";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let current_color = "white";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//my gradient background
var gradient = ctx.createLinearGradient(20, 0, 820, 0);
gradient.addColorStop(0, '#55ea82');
gradient.addColorStop(1, '#f27ef4');
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

// my pen color
// ctx.fillStyle = "rgb(147,112,219,0.4)";

let penDown = false;
let last_x = 0;
let last_y = 0;
let whichPen = 0;

//load and connect my pens

window.addEventListener("load", init);

function init() {
    let pencil1 = document.getElementById("button11");
    let pencil2 = document.getElementById("button2");
    let pencil3 = document.getElementById("button3");
    let reset = document.getElementById("resetButton");
    let pink = document.getElementById("pink");
    let aqua = document.getElementById("aqua");
    let orange = document.getElementById("orange");
    let cyan = document.getElementById("cyan");
    let yellow = document.getElementById("yellow");
    let green = document.getElementById("green");

    pencil1.addEventListener("click", function() {
        // if (whichPen === 1) {
        //     whichPen = 0;
        // } else {
        whichPen = 1;
        // }
        console.log("working pen 1");
    });

    pencil2.addEventListener("click", function() {
        // if (whichPen === 2) {
        //     whichPen = 0;
        // } else {
        whichPen = 2;
        // }
        console.log("working pen 2");
    });

    pencil3.addEventListener("click", function() {
        // if (whichPen === 3) {
        //     whichPen = 0;
        // } else {
        whichPen = 3;
        // }
        console.log("working pen 3");
    });

    reset.addEventListener("click", function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var gradient = ctx.createLinearGradient(20, 0, 820, 0);
        gradient.addColorStop(0, '#55ea82');
        gradient.addColorStop(1, '#f27ef4');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

    });
}

function paintStart(x, y) {
    penDown = true;
    last_x = x;
    last_y = y;
}

function normRandom(size) {
    return (Math.random() - 0.5) * size;
}

function chalkPen(x, y) {
    ctx.beginPath();
    let thickness = 2;
    ctx.lineWidth = thickness;
    ctx.moveTo(last_x, last_y);
    ctx.lineTo(x, y);
    ctx.strokeStyle = current_color;
    ctx.fillStyle = current_color;

    let interpolatedPoints = pointsAlongLine(x, y, last_x, last_y, 5);

    let randomness = 30;
    interpolatedPoints.forEach(function(p) {
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
            ctx.fillRect(
                p.x + normRandom(randomness),
                p.y + normRandom(randomness),
                2,
                25
            );
        }

        ctx.stroke();
    });
    ctx.fill();
    last_x = x;
    last_y = y;
}


function bubblesPen(x, y) {
    ctx.beginPath();
    let thickness = 1;
    ctx.moveTo(last_x, last_y);
    ctx.stroke();
    ctx.strokeStyle = current_color;
    ctx.fillStyle = current_color;

    let interpolatedPoints = pointsAlongLine(x, y, last_x, last_y, 7);

    let randomness = 40;
    interpolatedPoints.forEach(function(p) {
        ctx.beginPath();
        ctx.arc(
            p.x + normRandom(5),
            p.y + normRandom(60),
            Math.random() * 20,
            0,
            Math.PI * 2);
        ctx.stroke();
    });
    last_x = x;
    last_y = y;
}

function fanPen(x, y) {
    ctx.beginPath();
    ctx.moveTo(last_x, last_y);
    ctx.lineTo(x, y);
    ctx.strokeStyle = current_color;
    ctx.fillStyle = current_color;
    ctx.stroke();

    for (var i = 0; i < 20; i++) {
        ctx.beginPath();
        ctx.moveTo(2, 10);
        ctx.lineTo(10, 0);
        ctx.lineTo(0, 1);
        ctx.lineTo(20, 3);
    }
}

function paintEnd(x, y) {

}

canvas.addEventListener("mousedown", function(evt) {
    let x = evt.clientX;
    let y = evt.clientY;
    paintStart(x, y);
});

canvas.addEventListener("touchstart", function(evt) {
    let touches = Array.from(evt.touches);
    let touch = touches[0];
    paintStart(touch.clientX, touch.clientY);

});

canvas.addEventListener("mousemove", function(evt) {
    if (penDown == false) {
        return;
    }
    let x = evt.clientX;
    let y = evt.clientY;
    if (whichPen === 1) {
        chalkPen(x, y);
    } else if (whichPen === 2) {
        bubblesPen(x, y);
    } else if (whichPen === 3) {
        fanPen(x, y);
    }
});

canvas.addEventListener("touchmove", function(evt) {
    evt.preventDefault();

    let touches = Array.from(evt.touches);
    let touch = touches[0];

    let x = touch.clientX;
    let y = touch.clientY;
    chalkPen(x, y);

});

canvas.addEventListener("mouseup", function(evt) {
    penDown = false;
});


canvas.addEventListener("touchend", function(evt) {

    let touches = Array.from(evt.touches);
    let touch = touches[0];
    let x = last_X;
    let y = last_Y;
    paintEnd(x, y)

});

canvas.addEventListener("mouseout", function(evt) {
    penDown = false;

});


pink.addEventListener("click", () => {
    current_color = "pink";
    ctx.fillStyle = current_color;
});

aqua.addEventListener("click", () => {
    current_color = "#09fbd3";
    console.log(ctx.strokeStyle);
    ctx.fillStyle = current_color;
});

orange.addEventListener("click", () => {
    current_color = "orange";
    ctx.fillStyle = current_color;
});

green.addEventListener("click", () => {
    current_color = "#7fff00";
    ctx.fillStyle = current_color;
});

cyan.addEventListener("click", () => {
    current_color = "cyan";
    ctx.fillStyle = current_color;
});

yellow.addEventListener("click", () => {
    current_color = "yellow";
    ctx.fillStyle = current_color;
});