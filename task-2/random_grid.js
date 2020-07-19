function main(){

    let time = 500;
    let arrayOfNumbers = [];

    createDivs();
    createShuffledArray(arrayOfNumbers);
    setInterval(changeColor, time);

    function changeColor() {
        const defaultCells = document.querySelectorAll(".cell");
        defaultCells.forEach((e) => {
            e.classList.remove('active');
        })
        let randomIndex = Math.floor(Math.random() * 100);
        let randomNumber = arrayOfNumbers[randomIndex];
        let eDiv = document.querySelector('.container').childNodes[randomNumber];
        eDiv.classList.add('active');
    }

    function createDivs() {
        for (let i = 0; i < 100; i++){
            const cellDiv = document.createElement('div');
            cellDiv.classList.add('cell');
            document.querySelector('.container').appendChild(cellDiv);
        }
    }

    function createShuffledArray(arrayOfNumbers) {
        for (let i = 1; i < 101; i++) {
            arrayOfNumbers.push(i);
        }
        arrayOfNumbers.sort(() => Math.random() - 0.5);
    }
}
main();




