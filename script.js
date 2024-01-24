const gridContainer = document.getElementById("gridContainer");
const gridBtn = document.getElementById("gridBtn");

//Initial grid setup
let gridSize = 16;
gridContainer.style.width = "400px"; // Set a fixed width for the grid container
gridContainer.style.height = "400px"; // Set a fixed height for the grid container
gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
createGrid();
addEventListeners();


//Creating the button prompt for Grid Dimensions
gridBtn.addEventListener('click', function() {
    const userInput = prompt("Enter a number between 1 - 100");
    console.log(userInput)
    addGridSize(userInput)
});

//Validating the user input and creating the new grid dimensions
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


//Creating the Grid 
function createGrid() {
for(let i = 0; i < gridSize; i++) {
    for(let j = 0; j < gridSize; j++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gridContainer.appendChild(cell);
    }
    }
}

//reset the grid
function resetGrid() {
    let gridSize = 16;
    createGrid();
    addEventListeners();

}

//addEventListenter to color the cells of the grid 
function addEventListeners(){
const cells = document.getElementsByClassName("cell")
for (let i = 0; i < cells.length; i++){
    cells[i].addEventListener("mouseover", color, false);
    }
}

//function to color the grid 
function color(event) {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

}




