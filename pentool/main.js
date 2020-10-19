// import { pointsAlongLine } from "vector.js";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

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
    let pencil1 = document.getElementById("button1");
    let pencil2 = document.getElementById("button2");
    let pencil3 = document.getElementById("button3");
    let reset = document.getElementById("resetButton");
    let pink = document.getElementById("pink");
    let blue = document.getElementById("blue");

    pencil1.addEventListener("click", function() {
        if (whichPen === 1) {
            whichPen = 0;
        } else {
            whichPen = 1;
        }
        console.log("working");
    });

    pencil2.addEventListener("click", function() {
        if (whichPen === 2) {
            whichPen = 0;
        } else {
            whichPen = 2;
        }
        // console.log("working");
    });

    pencil3.addEventListener("click", function() {
        if (whichPen === 3) {
            whichPen = 0;
        } else {
            whichPen = 3;
        }
        console.log("working");
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

function paintMove(x, y) {
    ctx.beginPath();
    // ctx.fillStyle = "rgb(147,112,219,0.4)";
    let thickness = 2;
    ctx.lineWidth = thickness;
    ctx.moveTo(last_x, last_y);
    ctx.lineTo(x, y);

    // let interpolatedPoints = pointsAlongLine(x, y, last_x, last_y, 0.5);
    // console.log(interpolatedPoints);

    let randomness = 30;
    // interpolatedPoints.forEach(function(p) {
    //     ctx.beginPath();
    //     ctx.arc(
    //         p.x + norm_random(5),
    //         p.y + norm_random(10),
    //         1,
    //         0,
    //         Math.PI * 2
    //     );
    //     ctx.stroke();
    // });
    for (let i = 0; i < 20; i++) {
        ctx.fillRect(x + normRandom(randomness), y + normRandom(randomness), 2, 25);
    }
    ctx.arc(x, y, thickness / 2, 0, Math.PI * 2);
    // ctx.fill();
    last_x = x;
    last_y = y;
}


function paintMove2(x, y) {
    ctx.beginPath();
    ctx.fillStyle = "green";
    let thickness = 1;
    // ctx.lineWidth = thickness;
    ctx.moveTo(last_x, last_y);
    ctx.stroke();
    // ctx.beginPath();
    let randomness = 25;
    for (let i = 0; i < 15; i++) {
        ctx.beginPath();
        ctx.strokeStyle = "rbg(255,0,255,0.6)"
        ctx.arc(
            x + normRandom(randomness),
            y + normRandom(randomness),
            10,
            0,
            Math.PI * 2);
        // ctx.strokeStyle = "rgb(255,0,255)"
        ctx.stroke();
    }
    // ctx.fill();
    last_x = x;
    last_y = y;
}

function paintMove3(x, y) {
    ctx.beginPath();
    ctx.fillStyle = "green";
    // let thickness = 1;
    // ctx.lineWidth = thickness;
    ctx.moveTo(last_x, last_y);
    ctx.lineTo(x, y);
    ctx.stroke();
    for (var i = 20; i--;) {
        ctx.fillStyle = 'black';
        ctx.beginPath();
        ctx.moveTo(5, 15);
        ctx.lineTo(15, 0);
        ctx.lineTo(0, 1);
        ctx.lineTo(20, 3);
        ctx.closePath();
    }
}

function paintEnd(x, y) {
    // ctx.beginPath();
    // ctx.fillStyle = "rgb(147,112,219)";
    // //not red?
    // // ctx.arc(x, y, 20, 0, 2 * Math.PI);
    // ctx.stroke();
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
        paintMove(x, y);
    } else if (whichPen === 2) {
        paintMove2(x, y);
    } else if (whichPen === 3) {
        paintMove3(x, y);
    }
});

canvas.addEventListener("touchmove", function(evt) {
    evt.preventDefault();

    let touches = Array.from(evt.touches);
    let touch = touches[0];

    let x = touch.clientX;
    let y = touch.clientY;
    paintMove(x, y);

});

canvas.addEventListener("mouseup", function(evt) {
    penDown = false;
    // let x = evt.clientX;
    // let y = evt.clientY;
    // paintEnd(x, y)
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

// function colorSelected() {
pink.addEventListener("click", () => {
    console.log("got pink")
    ctx.strokeStyle = "#pink";
    console.log(ctx.strokeStyle);
    ctx.fillStyle = "pink";
});

blue.addEventListener("click", () => {
    console.log("got blue")
    ctx.strokeStyle = "blue";
    console.log(ctx.strokeStyle);
    ctx.fillStyle = "blue";
});
// }