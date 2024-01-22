const gridContainer = document.getElementById("gridContainer");
const gridBtn = document.getElementById("gridBtn");

//Initial grid setup
let gridSize = 16;
gridContainer.style.gridTemplateColumns = "repeat(16, 1fr)";
createGrid();
addEventListeners();


//button event listener
gridBtn.addEventListener('click', function() {
    const userInput = prompt("Enter a number between 1 - 100");
    console.log(userInput)
    addGridSize(userInput)
});

function addGridSize(userInput) {

    if(userInput === null || userInput < 1 || userInput > 100) {
        console.log("User entered an invalid number")
        userInput = prompt("Enter a number between 1 - 100 again:")
    }
    else {
        gridSize = parseInt(userInput);
        gridContainer.innerHTML = '';
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        createGrid();
        addEventListeners();
    }
}


//creating a 16 by 16 grid
function createGrid() {
for(let i = 0; i < gridSize; i++) {
    for(let j = 0; j < gridSize; j++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gridContainer.appendChild(cell);
    }
    }
}

function addEventListeners(){
const cells = document.getElementsByClassName("cell")
for (let i = 0; i < cells.length; i++){
    cells[i].addEventListener("mouseover", color, false);
    }
}


function color(event) {
    event.target.style.backgroundColor = "red";
    console.log(event.target) //seeing if color function is activating
}




