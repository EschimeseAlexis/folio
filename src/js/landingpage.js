const panel = document.querySelector(".panels");
const topPanel = document.getElementById("top-panel");
const bottomPanel = document.getElementById("bottom-panel");
const loader = document.querySelector(".loader");

let transitionPanel = () => {
    panel.classList.toggle("active");
    if (panel.classList.contains("active")) {
        topPanel.style.transform = "translateY(0)";
        bottomPanel.style.transform = "translateY(0)";
    } else {
        topPanel.style.transform = "translateY(-101%)";
        bottomPanel.style.transform = "translateY(100%)";
    }
}

let transitionLoader = () => {
    loader.classList.toggle("active-loader");
}


setTimeout(transitionPanel, 200);
setTimeout(transitionLoader, 800);
setTimeout(transitionLoader, 4000);
setTimeout(transitionPanel, 4800)
