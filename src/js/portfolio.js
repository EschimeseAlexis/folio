const arrowUp = document.getElementById("nav-up-arrow");
const arrowDown = document.getElementById("nav-down-arrow");
const textWrapper = document.querySelector(".text-container");
const imgWrapper = document.querySelector(".img-container");

let acc = 0;
let shiftUp = "-100%";
let shiftDown = "100%";
let shiftSideText = -600;
let shiftSideImg = 100;

const fadeOut = () => {
    textWrapper.style.transform = `translate(${acc * shiftSideText}px, ${shiftUp})`;
    textWrapper.style.opacity = "0";
    imgWrapper.style.transform = `translate(-${acc * shiftSideImg}%, ${shiftDown})`;
    imgWrapper.style.opacity = "0";
}

const shift = () => {
    textWrapper.style.transition = "none";
    imgWrapper.style.transition = "none";
    textWrapper.style.transform = `translate(${acc * shiftSideText}px, ${shiftDown})`;
    imgWrapper.style.transform = `translate(-${acc * shiftSideImg}%, ${shiftUp})`;
    setTimeout(addTransition, 20);
}

const addTransition = () => {
    textWrapper.style.transition = "transform 1s ease-in-out, opacity 0.5s ease-in-out";
    imgWrapper.style.transition = "transform 1s ease-in-out, opacity 0.5s ease-in-out";
}

const fadeIn = () => {
    textWrapper.style.transform = `translate(${acc * shiftSideText}px, 0)`;
    imgWrapper.style.transform = `translate(-${acc * shiftSideImg}%, 0)`;
    setTimeout(fadeInOpacity, 500);
}

const fadeInOpacity = () => {
    textWrapper.style.opacity = "1";
    imgWrapper.style.opacity = "1";
}

arrowUp.onclick = () => {
    disableButton();
    fadeOut();
    acc = (acc + 3) % 4;
    setTimeout(shift, 600);
    setTimeout(fadeIn, 700);
}

arrowDown.onclick = (event) => {
    disableButton();
    fadeOut();
    acc = (acc + 1) % 4;
    setTimeout(shift, 600);
    setTimeout(fadeIn, 700);
}

const disableButton = () => {
    arrowUp.style.pointerEvents = "none";
    arrowDown.style.pointerEvents = "none";
    setTimeout(resetButton, 1100)
}

const resetButton = () => {
    arrowUp.style.pointerEvents = "all";
    arrowDown.style.pointerEvents = "all";
}
