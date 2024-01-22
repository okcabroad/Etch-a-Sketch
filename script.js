const gridContainer = document.getElementById("gridContainer");


//creating a 16 by 16 grid
for(i = 0; i < 16; i++) {
    for(j = 0; j < 16; j++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    gridContainer.appendChild(cell);
    }
}

const cells = document.getElementsByClassName("cell")
for (let i = 0; i < cells.length; i++){
    cells[i].addEventListener("mouseover", color, false);
}

function color(event) {
    event.target.style.backgroundColor = "blue";
    console.log(event.target) //seeing if color function is activating
}

