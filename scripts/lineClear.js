// Function used to check if there are any cleared lines
const checkForLineClear = () => {
    let rowArray = Array.from(board.getElementsByClassName("row"));

    for(let i = 19; i > 0; i--){
        while(rowArray[i].querySelectorAll(".piece").length == 10){ // If full row detected, moves all lines 1 down
            for(let j = i; j > 1; j--){
                let oldRow = Array.from(rowArray[j].querySelectorAll(".cell"));
                let newRow = Array.from(rowArray[j-1].querySelectorAll(".cell"));

                moveLineClasses(oldRow, newRow);
            }

            clearedLines += 1;
            lineScore.textContent = clearedLines;
        }
    }
}

// Swaps the classes current line with the line above
const moveLineClasses = (oldLine, newLine) => {
    for(let i = 0; i < 10; i++){
        oldLine[i].classList = newLine[i].classList;
    }
}