
const playArea = document.getElementById("container");
const button = document.getElementById("reset");

sizeOfArea(16);
sizeOfSquares(16);

function resetButton () {
    let size = prompt("Velg en størrelse på spillområde (16 eller mer):");
    size = parseInt(size, 10);
    if (size < 16) {size = 16};
    resetArea()
    sizeOfArea(size);
    sizeOfSquares(size);
    updateEventListener();
};


function sizeOfArea(n) { //hvor n er antall firkanter på rad
    for (let i = 0; i < n*n; i++) {
        let squares = document.createElement("div");
        playArea.appendChild(squares);
    };
}

function sizeOfSquares(n) { //regner ut hva størrelsen på firkantene må være for at jeg kan få de i en firkant, hvor n er antall firkanter per rad
    let size = (500/n)-4;
    let div = playArea.querySelectorAll("div");
    div.forEach(div => div.style.width = `${size}px`);
    div.forEach(div => div.style.height = `${size}px`);
} 

function hover(e) {
    this.classList.add("hover");
}

function resetArea () {
    while (playArea.firstChild) {
        playArea.removeChild(playArea.firstChild);
    };
}

function updateEventListener() {
    relevantSquares = playArea.querySelectorAll("div");
    relevantSquares.forEach(div => div.addEventListener("mouseover", hover));
}

let relevantSquares = playArea.querySelectorAll("div");
relevantSquares.forEach(div => div.addEventListener("mouseover", hover));

button.addEventListener('click', resetButton);
