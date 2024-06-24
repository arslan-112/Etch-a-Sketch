const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');
const sizeButton = document.getElementById('numSquares');

sizeButton.addEventListener('click',function(){
    let squares = prompt("Enter the number of squares in a row:");
    container.innerHTML = '';
    createGrid(squares);


})
function createGrid(size=16) {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = 480 / size + 'px';
        square.style.height = 480 / size + 'px';
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
