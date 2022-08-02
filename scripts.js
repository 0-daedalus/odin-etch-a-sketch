let container = document.querySelector('.container');

function erase(){
    let grid = document.querySelectorAll('.square');
    grid.forEach((sqr) => {
        container.removeChild(sqr);
    });
}

function makeGrid(x){

    erase();

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

function addPen(){
    let grid = document.querySelectorAll('.square');

    grid.forEach((sqr) => {
        sqr.addEventListener('mouseenter', () => {
            sqr.classList.add('hovered');
        });
        // sqr.addEventListener('mouseleave', () => {
        //     sqr.classList.toggle('hovered');
        // })
    })
}

function addRandomPen(){
    let grid = document.querySelectorAll('.square');

    grid.forEach((sqr) => {
        sqr.addEventListener('mouseenter', () => {
            sqr.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
        });
    });
}
///////////////////////////////////////////////////////////////////

let btn = document.querySelector('#gridmaker');

btn.addEventListener('click', () => {
    let x = prompt("Number of squares per side:");
    while(x > 100 || x < 0) x = prompt("Enter a positive number less than 100:");
    makeGrid(x);
    addPen();
});

let randBtn = document.querySelector('#randomgridmaker');

randBtn.addEventListener('click', () => {
    let x = prompt("Number of squares per side:");
    while(x > 100 || x < 0) x = prompt("Enter a positive number less than 100:")
    makeGrid(x);
    addRandomPen();
});