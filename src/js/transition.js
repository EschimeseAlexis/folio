let links = document.querySelectorAll("a");


links.forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        clickHandler(link)
    }
})

const clickHandler = (link) => {
    let travelTo = link.getAttribute("href");
    switchPage();
    setTimeout(function() {
        window.location.href = travelTo;
    }, 1000);
}

const panels = document.querySelectorAll(".transition-panel");

const landOnPage = () => {
    setTimeout(lowerPanel, 100, panels[0]);
    setTimeout(lowerPanel, 150, panels[1]);
    setTimeout(lowerPanel, 200, panels[2]);
    setTimeout(lowerPanel, 250, panels[3]);
    setTimeout(lowerPanel, 300, panels[4]);
}

const switchPage = () => {
    setTimeout(raisePanel, 100, panels[0]);
    setTimeout(raisePanel, 150, panels[1]);
    setTimeout(raisePanel, 200, panels[2]);
    setTimeout(raisePanel, 250, panels[3]);
    setTimeout(raisePanel, 300, panels[4]);
}

const lowerPanel = (panel) => {
    panel.style.transform = "scaleY(0)";
}

const raisePanel = (panel) => {
    panel.style.transform = "scaleY(200)";
}

setTimeout(landOnPage, 100);

