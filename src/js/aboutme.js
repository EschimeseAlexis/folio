const leftP = document.getElementById("left-paragraph");
const rightP = document.getElementById("right-paragraph");
const title = document.querySelector("h1");

leftP.onmouseover = () => {
    leftP.style.transform = "translateX(50%) scale(1.5)";
    rightP.style.transform = "translateX(-50%) scale(0.5)";
    rightP.style.opacity = "0";
    rightP.style.pointerEvents= "none";
    title.style.opacity = "0";
}

leftP.onmouseleave = () => {
    leftP.style.transform = "translateX(0) scale(1)";
    rightP.style.transform = "translateX(0) scale(1)";
    rightP.style.opacity = "1";
    rightP.style.pointerEvents= "all";
    title.style.opacity = "1";
}

rightP.onmouseover = () => {
    rightP.style.transform = "translateX(-50%) scale(1.5)";
    leftP.style.transform = "translateX(50%) scale(0.5)";
    leftP.style.opacity = "0";
    leftP.style.pointerEvents= "none";
    title.style.opacity = "0";
}

rightP.onmouseleave = () => {
    rightP.style.transform = "translateX(0) scale(1)";
    leftP.style.transform = "translateX(0) scale(1)";
    leftP.style.opacity = "1";
    leftP.style.pointerEvents= "all";
    title.style.opacity = "1";
}
