const gridContainer = document.getElementById("gridContainer");
const gridBtn = document.getElementById("gridBtn");

//button event listener
gridBtn.addEventListener('click', function() {
    alert('button clciked')
}


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
    event.target.style.backgroundColor = "red";
    console.log(event.target) //seeing if color function is activating
}

//button event listener




