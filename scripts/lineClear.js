// Function used to check if there are any cleared lines
const checkForLineClear = () => {
    let rowArray = Array.from(board.getElementsByClassName("row"));

    let filledRows = [];

    for (let i = 0; i < rowArray.length; i++){
        if(rowArray[i].querySelectorAll(".piece").length == 10){
            filledRows.push(i);
        }
    }

    // Remove filled rows and move above rows down
    filledRows.forEach(rowIndex => {
        for (let i = rowIndex; i > 0; i--) {
            let oldRow = Array.from(rowArray[i].querySelectorAll(".cell"));
            let newRow = Array.from(rowArray[i - 1].querySelectorAll(".cell"));
            moveLineClasses(oldRow, newRow);
        }
        // Clear the top row
        let topRow = Array.from(rowArray[0].querySelectorAll(".cell"));
        topRow.forEach(cell => cell.classList.remove("piece"));
    });

    var lineScore = document.getElementById("lines");
    lineScore.textContent = Number(lineScore.textContent) + filledRows.length;
}

// Swaps the classes current line with the line above
const moveLineClasses = (oldLine, newLine) => {
    for(let i = 0; i < 10; i++){
        oldLine[i].classList = newLine[i].classList;
    }
}