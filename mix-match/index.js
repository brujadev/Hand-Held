import { saveAs } from "file-saver";

// document.addEventListener("touchstart", function () {}, false);

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//grab all of my buttons by their IDs
let frameButton = document.getElementById("frame");
let blackWomenButton = document.getElementById("black-women");
let backgButton = document.getElementById("backg");
let flowersButton = document.getElementById("flowers");

let shareButton = document.getElementById("share");

//event listerners for all of my buttons
frameButton.addEventListener("click", frameSelected);
blackWomenButton.addEventListener("click", blackWomenSelected);
backgButton.addEventListener("click", backgSelected);
flowersButton.addEventListener("click", flowersSelected);
window.addEventListener("load", init);

window.addEventListener("click", () => {
    let song = document.getElementById("my_audio");
    song.play();
});

//hide reload button
let createAgain = document.getElementById("createAgain");
createAgain.style.display = "none";

function reloadPage() {
    // let menu = document.getElementById("bottomNav");
    // menu.style.display = "initial";
    // let message = document.getElementById("tellTruth");
    // message.style.display = "hidden";
    window.location.reload();
    // blackWomenIs = [megan, ari, chaka, diana];
}

let refresh = document.getElementById("createAgain");
refresh.addEventListener("click", reloadPage);

shareButton.addEventListener("click", tellTheTruth);

// canvas.toBlob(function (blob) {
//   console.log(blob);
//   saveAs(blob, "myImage.png");
// });

function tellTheTruth() {
    let menu = document.getElementById("bottomNav");
    menu.style.display = "none";
    createAgain.style.display = "initial";
    let shareMsg = document.getElementById("share");
    shareMsg.innerHTML = "download your creation";
    let message = document.getElementById("tellTruth");
    message.style.display = "flex";
    shareButton.addEventListener("click", () => {
        console.log("told the truth");
        canvas.toBlob(function(blob) {
            console.log(blob);
            saveAs(blob, "myImage.png");
        });
    });
}

//bring in images
let gold1 = new Image();
gold1.crossOrigin = "anonymous";
gold1.src = require("./assets/gold1.png");
gold1.onload = render;
let gold2 = new Image();
gold2.crossOrigin = "anonymous";
gold2.src = require("./assets/gold2.png");
let gold3 = new Image();
gold3.crossOrigin = "anonymous";
gold3.src = require("./assets/gold3.png");
let gold4 = new Image();
gold4.crossOrigin = "anonymous";
gold4.src = require("./assets/gold4.png");
let frames = [gold1, gold2, gold3, gold4];

let whitegoldtile = new Image();
whitegoldtile.crossOrigin = "anonymous";
whitegoldtile.src = require("./assets/whitegoldtile.png");
whitegoldtile.onload = render;
let mosaictile = new Image();
mosaictile.crossOrigin = "anonymous";
mosaictile.src = require("./assets/mosaictile.png");
let bluetile = new Image();
bluetile.crossOrigin = "anonymous";
bluetile.src = require("./assets/bluetile.png");
let gabstytile = new Image();
gabstytile.crossOrigin = "anonymous";
gabstytile.src = require("./assets/gabstytile.png");
let tiles = [whitegoldtile, mosaictile, bluetile, gabstytile];

let flower2 = new Image();
flower2.crossOrigin = "anonymous";
flower2.src = require("./assets/flower1.png");
flower2.onload = render;
let flower1 = new Image();
flower1.crossOrigin = "anonymous";
flower1.src = require("./assets/flower2.png");
let flower3 = new Image();
flower3.crossOrigin = "anonymous";
flower3.src = require("./assets/flower3.png");
let flower4 = new Image();
flower4.crossOrigin = "anonymous";
flower4.src = require("./assets/flower4.png");
let flowers = [flower1, flower2, flower3, flower4];

let ari = new Image();
ari.crossOrigin = "anonymous";
ari.src = require("./assets/ari.png");
ari.onload = render;
let diana = new Image();
diana.crossOrigin = "anonymous";
diana.src = require("./assets/diana.png");
let megan = new Image();
megan.crossOrigin = "anonymous";
megan.src = require("./assets/megan.png");
let chaka = new Image();
chaka.crossOrigin = "anonymous";
chaka.src = require("./assets/chaka.png");
let blackWomenIs = [megan, ari, chaka, diana];

//set assets to 0
let frameCount = 0;
let blackWomenCount = 0;
let backgCount = 0;
let flowersCount = 0;

//cycle through my images
function frameSelected() {
    frameCount = (frameCount + 1) % 4;
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

//draw my images on the canvas
function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(tiles[backgCount], 95, 40, 215, 370);
    ctx.drawImage(blackWomenIs[blackWomenCount], 102, 145, 200, 250);
    ctx.drawImage(frames[frameCount], 50, 0, 305, 450);
    ctx.drawImage(flowers[flowersCount], 180, 275, 175, 175); // ctx.drawImage(frame2, 0, 0, 400, 400);
}

//run my application
function init() {
    createAgain.style.display = "none";
    render();
}


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