//variables
const resetButton = document.getElementById('resetButton');
const container = document.getElementById('container');
const input = document.querySelector('input');
let gridsize = 16;

input.addEventListener('input', function () {
    gridsize = input.value;
    container.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${gridsize}, 1fr)`;
    container.innerHTML = '';
    addlock(gridsize * gridsize);
});







const block = `<div class="block"></div>`;






container.innerHTML = block;





//functions
function addlock(input) {
    for (let i = 0; i < input; i++) {
        container.innerHTML += block;
    }

}
function changeColor() {
    this.style.backgroundColor = 'blue';
}

function reset () {
    block.forEach((block) => {
        block.style.backgroundColor = 'antiquewhite';
    });
}

function appendblocks (input) {
    for (let i = 0; i < input; i++) {
        container.appendChild(singleBlock);
    }
}

