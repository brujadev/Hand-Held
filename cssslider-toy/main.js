let sliderThingy = document.getElementById("myRange");
let grabCube = document.getElementById("cube");

function update(event) {
    // console.log("input change");
    grabCube.style.animationDuration = sliderThingy.value + "ms";
}

sliderThingy.addEventListener("change", update);

grabCube.onclick = pauseCube;

function pauseCube() {
    // grabCube.style.animationPlayState = "paused";
    if (grabCube.style.animationPlayState === "running") {
        grabCube.style.animationPlayState = "paused";
    } else {
        grabCube.style.animationPlayState = "running";
    }
}