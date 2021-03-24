const projectsCards = document.querySelectorAll(".project");
const cursor = document.querySelector(".cursor");

projectsCards.forEach(project => {
    project.onmouseover = () => {
        cursor.style.border = "none";
    }

    project.onmouseleave = () => {
        cursor.style.border = "1px solid white";
    }
})

const link = document.querySelectorAll("a");

const displayCards = () => {
    projectsCards.forEach(card => {
            card.style.opacity = "1";
    });
}

link.forEach(li => {
    li.onmouseover = () => {
        hideCards();
    }
    li.onmouseleave = () => {
        displayCards();
    }
});

const hideCards = () => {
    projectsCards.forEach(card => {
        card.style.opacity = "0";
    });
}

setTimeout(displayCards, 1000);
