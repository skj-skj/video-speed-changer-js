function checkSpeed(state) {
    let video = document.querySelector("video");

    if (video && video.playbackRate !== state.speed) {
        video.playbackRate = state.speed;
        console.log("Speed Updated to: " + state.speed);
    } else {
        console.log("Speed to: " + state.speed);
    }
}

function checkIfSpeedisNumber(speed) {
    return speed != undefined && speed != null && !isNaN(speed);
}

const speedState = {
    speed: null,
};

let button = document.createElement("button");
button.type = "button";
button.textContent = "Change Speed";
button.style.position = "fixed";
button.style.zIndex = "999";
button.style.display = "block";
button.style.height = "3rem";

let dialog = document.createElement("dialog");
dialog.id = "change-speed-dialog";
dialog.open = false;
dialog.style.zIndex = 999;
dialog.style.height = "6rem";
dialog.style.weight = "6rem";
dialog.style.margin = "auto";

let pTag = document.createElement("p");

let divTag = document.createElement("div");
let speedDecreaseButton = document.createElement("button");
speedDecreaseButton.style.width = "2.5rem";
speedDecreaseButton.textContent = "-";
speedDecreaseButton.addEventListener("click", () => {
    let video = document.querySelector("video");
    let newSpeed = video
        ? (video.playbackRate = video.playbackRate - 0.1)
        : "x.yz";
    pTag.textContent =
        "Speed: " +
        (typeof newSpeed === "number" ? newSpeed.toFixed(2) : newSpeed);
    checkIfSpeedisNumber(speedState.speed)
        ? (speedState.speed = newSpeed)
        : null;
});

let speedIncreaseButton = document.createElement("button");
speedIncreaseButton.textContent = "+";
speedIncreaseButton.style.width = "2.5rem";
speedIncreaseButton.addEventListener("click", () => {
    let video = document.querySelector("video");
    let newSpeed = video
        ? (video.playbackRate = video.playbackRate + 0.1)
        : "x.yz";
    pTag.textContent =
        "Speed: " +
        (typeof newSpeed === "number" ? newSpeed.toFixed(2) : newSpeed);
    checkIfSpeedisNumber(speedState.speed)
        ? (speedState.speed = newSpeed)
        : null;
});

dialog.appendChild(pTag);
dialog.appendChild(speedDecreaseButton);
dialog.appendChild(speedIncreaseButton);

button.addEventListener("click", () => {
    let video = document.querySelector("video");
    dialog.open = !dialog.open;
    dialog.open &&
        (pTag.textContent =
            "Speed: " + (video ? video.playbackRate.toFixed(2) : "x.yz"));
    !checkIfSpeedisNumber(speedState.speed)
        ? (speedState.speed = video.playbackRate)
        : null;
});

document.body.insertBefore(dialog, document.body.firstChild);
document.body.insertBefore(button, document.body.firstChild);
document.addEventListener("keydown", function (event) {
    if (event.shiftKey && event.code === "KeyQ") {
        button.style.display =
            button.style.display === "none" ? "block" : "none";
        dialog.open = false;
    }
});
setInterval(() => checkSpeed(speedState), 5000);
