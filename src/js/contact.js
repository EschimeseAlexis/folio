const txt = "(Don't be shy !)"
const title = document.getElementById("h1supp");
let acc = 0;

const write = () => {
    title.innerText = txt.slice(0, acc);
    acc++;
    if (acc > txt.length) {
        setTimeout(resetAcc, 1000);
    }
}

const resetAcc = () => {
    acc = 0;
}

setInterval(write, 200);
