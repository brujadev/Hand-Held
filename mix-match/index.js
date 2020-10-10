let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// let thisButton = document.getElementById("this");
// let thatButton = document.getElementById("that");

let frameButton = document.getElementById("frame");
let blackWomenButton = document.getElementById("black-women");
let backgButton = document.getElementById("backg");
let flowersButton = document.getElementById("flowers");

frameButton.addEventListener("click", frameSelected);
blackWomenButton.addEventListener("click", blackWomenSelected);
backgButton.addEventListener("click", backgSelected);
flowersButton.addEventListener("click", flowersSelected);

//bring in images
let gold1 = new Image();
gold1.src = "assets/gold1.png";
gold1.onload = render;
let gold2 = new Image();
gold2.src = "assets/gold2.png";
let gold3 = new Image();
gold3.src = "assets/gold3.png";
let gold4 = new Image();
gold4.src = "assets/gold4.png";
let frames = [gold1, gold2, gold3, gold4];

let whitegoldtile = new Image();
whitegoldtile.src = "assets/whitegoldtile.png";
whitegoldtile.onload = render;
let mosaictile = new Image();
mosaictile.src = "assets/mosaictile.png";
let bluetile = new Image();
bluetile.src = "assets/bluetile.png";
let gabstytile = new Image();
gabstytile.src = "assets/gabstytile.png";
let tiles = [whitegoldtile, mosaictile, bluetile, gabstytile];

let flower1 = new Image();
flower1.src = "assets/flower1.png";
flower1.onload = render;
let flower2 = new Image();
flower2.src = "assets/flower2.png";
let flower3 = new Image();
flower3.src = "assets/flower3.png";
let flower4 = new Image();
flower4.src = "assets/flower4.png";
let flowers = [flower1, flower2, flower3, flower4];

let ari = new Image();
ari.src = "assets/ari.png";
ari.onload = render;
let diana = new Image();
diana.src = "assets/diana.png";
let megan = new Image();
megan.src = "assets/megan.png";
let chaka = new Image();
chaka.src = "assets/chaka.png";
let blackWomenIs = [megan, ari, chaka, diana];

//set assets to 0
let frameCount = 0;
let blackWomenCount = 0;
let backgCount = 0;
let flowersCount = 0;

function frameSelected() {
    // currentImage = frame1;
    frameCount = (frameCount + 1) % 4;
    // if (timesClicked >1){
    //   timesClicked = 0;
    // }
    render();
}

function blackWomenSelected() {
    blackWomenCount = (blackWomenCount + 1) % 4;
    render();
}

function backgSelected() {
    backgCount = (backgCount + 1) % 4;
    render();
}

function flowersSelected() {
    flowersCount = (flowersCount + 1) % 4;
    render();
}

// function blackWomenSelected() {
//   currentImage = ari;
//   render();
// }

function render() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    // ctx.font = "20px serif";
    // ctx.fillStyle = "black";
    // ctx.fillText("Times Clicked: " + timesClicked, 100, 100);
    // ctx.fillStyle = "red";
    // ctx.fillRect(100, 150, 100, 100);

    // ctx.drawImage(currentImage, 0, 0, 400, 400);
    ctx.drawImage(tiles[backgCount], 25, 83, 350, 383);
    ctx.drawImage(blackWomenIs[blackWomenCount], 73, 168, 240, 300);
    ctx.drawImage(frames[frameCount], 2, 0, 395, 550);
    ctx.drawImage(flowers[flowersCount], 150, 300, 250, 250);
    // ctx.drawImage(frame2, 0, 0, 400, 400);
}

render();

// //these are the assets to choose from
// let frames = [
//   "assets/gold1.png",
//   "assets/gold2.png",
//   "assets/gold3.png",
//   "assets/gold4.png"
// ];

// let blackWomen = [
//   "assets/ari.png",
//   "assets/megan.png",
//   "assets/diana.png",
//   "assets/chaka.png"
// ];

// let flowers = [
//   "assets/flower1.png",
//   "assets/flower2.png",
//   "assets/flower3.png",
//   "assets/flower4.png"
// ];

// let tiles = [
//   "assets/bluetile.png",
//   "assets/mosaictile.png",
//   "assets/whitegoldtile.png",
//   "assets/gabstytile.png"
// ];