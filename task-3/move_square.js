// use these keycodes for calling the appropriate functions
// write your moveX functions and after that
// you can call these like moves[keycode]();

const moves = {
    '97': moveLeft,
    '115': moveDown,
    '119': moveUp,
    '100': moveRight,
};

let cellDivs
let cell;

function main(){
    createDivs();
    addClickOnDivs();
}


function createDivs() {
    for (let i = 0; i < 100; i++){
        const cellDiv = document.createElement('div');
        cellDiv.classList.add('cell');
        cellDiv.setAttribute("id", i);
        document.querySelector('.container').appendChild(cellDiv);
    }
}

function activateDiv(event){
    cellDivs.forEach((square) => square.removeEventListener('click', activateDiv));
    cell = event.target;
    cell.classList.add('active');
    cell.addEventListener('click', deactivateDiv);
    document.addEventListener('keypress', keyPressHandler);
}

function deactivateDiv(e) {
    e.target.classList.toggle('active');
    cellDivs.forEach(div => div.addEventListener('click', activateDiv));
    document.removeEventListener('keypress', keyPressHandler);
}

function addClickOnDivs() {
    cellDivs = document.querySelectorAll('.cell');
    cellDivs.forEach((square) => {
        square.addEventListener('click', activateDiv);
        })
}

function moveRight(){
    const right = 1;
    move(right);
}

function moveLeft(){
    const left = -1;
    move(left);
}

function moveUp(){
    const up = -10;
    move(up);
}

function moveDown(){
    const down = 10;
    move(down);
}

function move(direction) {
    let cellId = parseInt(cell.id);
    let newCellId = cellId + direction;
    if (newCellId > 99 || newCellId < 0){
        return;
    }
    cell.removeEventListener('click', deactivateDiv);
    cell.classList.toggle('active');
    cell = document.getElementById(newCellId);
    cell.addEventListener('click', deactivateDiv);
    cell.classList.toggle('active');

}

function keyPressHandler(event) {
    moves[event.keyCode]();
}


main();




