/**
 * CURSOR
 */

const cursor = document.querySelector(".cursor");
let hover = document.querySelectorAll(".hover");
let hoverAlt = document.querySelectorAll(".hover-alt");

window.addEventListener("mousemove", cursorMove);

function cursorMove(e) {
    if (cursor) {
        cursor.style.top = e.pageY + "px";
        cursor.style.left = e.pageX + "px";
    }
}

if (hover) {
    hover.forEach(hover => {
        hover.onmouseover = () => {
            cursor.classList.add("cursor-grow");
        };
        hover.onmouseleave = () => {
            cursor.classList.remove("cursor-grow");
        };
    });
}

if (hoverAlt) {
    hoverAlt.forEach(hover => {
        hover.onmouseover = () => {
            cursor.classList.add("cursor-grow-alt");
        };
        hover.onmouseleave = () => {
            cursor.classList.remove("cursor-grow-alt");
        };
    });
}
