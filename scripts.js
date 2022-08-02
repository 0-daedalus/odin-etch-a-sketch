let container = document.querySelector('.container');

function makeGrid(x){

    let grid = document.querySelectorAll('.square');
    grid.forEach((sqr) => {
        container.removeChild(sqr);
    });

    for(let i = 0; i < x; i++){
        for(let j = 0; j < x; j++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${100/x}%`;
            square.style.height = `${100/x}%`;
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

///////////////////////////////////////////////////////////////////

let btn = document.querySelector('#gridmaker');

btn.addEventListener('click', () => {
    let x = prompt("Number of squares per side:");
    if(x > 100 || x < 0) x = prompt("Enter a number less than 100:");
    makeGrid(x);
})