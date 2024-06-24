const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');
function createGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover', changeColor);
        container.appendChild(square);

    }
}

function changeColor(e){
    e.target.style.backgroundColor = 'turquoise';
}

function resetGrid(){
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    })
}
resetButton.addEventListener('click',resetGrid);

createGrid(16);
