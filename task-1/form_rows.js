let count = 1;
let numberOfRows = 1;
const info = document.getElementById('info');

function createRow(){  
    count++
    const createRowHTML = createStringRow(count);
    if (numberOfRows < 10) {
        document.querySelector('form').insertAdjacentHTML('beforeend', createRowHTML);
        numberOfRows++;
        let delButton = document.getElementById(`del${count}`);
        delButton.addEventListener('click', (e) => {
            e.preventDefault();
            numberOfRows--;
            info.innerText = "";
        })
    } else if (numberOfRows === 10) {
        info.innerText = "You can create max 10 rows.";
    }

}

const createStringRow = function(number){
    return `  
        <div id="input${number}">       
            <label for="item_${number}">Item ${number}:</label>
            <input type="text" name="item_${number}" id="item_${number}"/>
            <button onclick="deleteItem('input${number}')" id="del${number}">DELETE</button><br/>
        </div>
        `;
};

function deleteItem(id) {
    const eDiv = document.getElementById(id);
    eDiv.remove();
}

function main() {
    const addButton = document.getElementById('add_row');
    addButton.addEventListener('click', createRow);
}

main();








