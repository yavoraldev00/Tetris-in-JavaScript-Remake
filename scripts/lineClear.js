// Array holding all rows on the board
var rowArray = Array.from(board.getElementsByClassName("row"));

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

        // Variable that displays the score
        var lineScore = document.getElementById("lines");

        // Variable that displays the current level
        var levelText = document.getElementById("level");

        // Updates the score
        pieceState.currentLines = pieceState.currentLines + filledRows.length;

        // Updates the text on the score board
        lineScore.textContent = pieceState.currentLines;

        // Updates the score depending on the lines cleared
        switch(true){
            case filledRows.length == 1:
                updateScore(100 * pieceState.currentLevel, true);
                break;
            case filledRows.length == 2:
                updateScore(300 * pieceState.currentLevel, true);
                break;
            case filledRows.length == 3:
                updateScore(500 * pieceState.currentLevel, true);
                break;
            case filledRows.length == 4:
                updateScore(800 * pieceState.currentLevel, true);
                break;
            default: break;
        }

        // Increases level and game speed
        switch(true){
            case pieceState.currentLines >= 150:
                if(pieceState.currentLevel != 6){
                    pieceState.currentLevel = 6;
                    intervalTime = 100;
                    levelText.textContent = pieceState.currentLevel;

                    clearInterval(timerId);
                    startTimer();
                }
                break;
            case pieceState.currentLines >= 100:
                if(pieceState.currentLevel != 5){
                    pieceState.currentLevel = 5;
                    intervalTime = 225;
                    levelText.textContent = pieceState.currentLevel;

                    clearInterval(timerId);
                    startTimer();
                }
                break;
            case pieceState.currentLines >= 60:
                if(pieceState.currentLevel != 4){
                    pieceState.currentLevel = 4;
                    intervalTime = 350;
                    levelText.textContent = pieceState.currentLevel;

                    clearInterval(timerId);
                    startTimer();
                }
                break;
            case pieceState.currentLines >= 30:
                if(pieceState.currentLevel != 3){
                    pieceState.currentLevel = 3;
                    intervalTime = 700;
                    levelText.textContent = pieceState.currentLevel;

                    clearInterval(timerId);
                    startTimer();
                }
                break;
            case pieceState.currentLines >= 10:
                if(pieceState.currentLevel != 2){
                    pieceState.currentLevel = 2;
                    intervalTime = 800;
                    levelText.textContent = pieceState.currentLevel;

                    clearInterval(timerId);
                    startTimer();
                }
                break;
            default: break;
        }


        // if(pieceState.currentLines >= 10){
        //     intervalTime = 100;
        // }
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