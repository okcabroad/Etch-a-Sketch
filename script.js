const gridContainer = document.getElementById("gridContainer");

for(i = 0; i < 16; i++) {
    for(j = 0; j < 16; j++){
    const cell = document.createElement("div");
    cell.classList.add('cell');
    gridContainer.appendChild(cell);

    }
}