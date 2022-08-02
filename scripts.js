let container = document.querySelector('.container');

function makeGrid(x, y){
    for(let i = 0; i < y; i++){
        for(let j = 0; j < x; j++){
            const square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
        }
    }
}

let grid = document.querySelectorAll('.square');

grid.forEach((sqr) => {
    sqr.addEventListener('mouseenter', () => {
        sqr.style.backgroundColor = 'red';
    })
    sqr.addEventListener('mouseleave', () => {
        sqr.style.backgroundColor = 'white';
    })
})