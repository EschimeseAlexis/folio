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
