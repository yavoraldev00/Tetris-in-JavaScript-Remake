// Array holding all rows on the board
const rowArray = Array.from(board.getElementsByClassName("row"));

// Function used to check if there are any cleared lines
const checkForLineClear = () => {
    let filledRows = [];

    for (let i = 0; i < rowArray.length; i++){
        if(rowArray[i].querySelectorAll(".piece").length == 10){
            filledRows.push(i);
        }
    }

    // If lines are cleared, plays line clear animation
    if(filledRows.length > 0){
        // Starts the line clear animation
        lineClearAnimationStart(filledRows, rowArray);

        // Stops the line clear animation
        lineClearAnimationEnd(filledRows, rowArray);
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

// Sets a class on rows so they can play a clear animation
const lineClearAnimationStart = (clearedLines, rowArray) => {     
    clearedLines.forEach((clearedLine) => {
        rowArray[clearedLine].classList.add("row-clear")
    });

    // Variable for animation delay
    pieceState.currentLineClearAnimation = true;

    debugger;

    // Plays sound effect on line clear
    switch(clearedLines.length){
        case 1:
            clearSingle.currentTime = 0;
            clearSingle.play();
            break;
        
        case 2:
            clearDouble.currentTime = 0;
            clearDouble.play();
            break;
        
        case 3:
            clearTriple.currentTime = 0;
            clearTriple.play();
            break;
        
        case 4:
            clearTetris.currentTime = 0;
            clearTetris.play();
            break;
        default: break;
    }

    // Sound effect
   
}

// Sets a class on rows when animation ends
const lineClearAnimationEnd = (clearedLines, rowArray) => {
    setTimeout(() => {
        clearedLines.forEach((clearedLine) => {
            rowArray[clearedLine].classList.remove("row-clear")
        });

        // Variable for animation delay
        pieceState.currentLineClearAnimation = false;

        // Generates and places a new piece on the board
        setNewPiece(pieceState.nextPiece);
    }, 400);
}