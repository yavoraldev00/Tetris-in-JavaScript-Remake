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

        // Used for calculation checks
        const oldLines = pieceState.currentLines;

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

        // Only does further checks 
        if(filledRows.length > 0 && (pieceState.currentLines %10 < 4 && oldLines > 5)){
            // Increases level, game speed, changes graphics etc.
            switch(true){
                case pieceState.currentLines >= 190:
                    if(pieceState.currentLevel != 20){
                        // Increases level and updates level text
                        pieceState.currentLevel = 20;
                        levelText.textContent = pieceState.currentLevel;

                        // Changes game music
                        current_level.pause();
                        current_level = level_12;
                        current_level.currentTime = 0;

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);
                    }
                    break;
                
                case pieceState.currentLines >= 180:
                    if(pieceState.currentLevel != 19){
                        pieceState.currentLevel = 19;
                        levelText.textContent = pieceState.currentLevel;

                        // Speeds up game speed
                        intervalTime = 100;
                        clearInterval(timerId);
                        startTimer();
                    }
                    break;
                
                case pieceState.currentLines >= 170:
                    if(pieceState.currentLevel != 18){
                        pieceState.currentLevel = 18;
                        levelText.textContent = pieceState.currentLevel;
                    }
                    break;
                
                case pieceState.currentLines >= 160:
                    if(pieceState.currentLevel != 17){
                        pieceState.currentLevel = 17;
                        levelText.textContent = pieceState.currentLevel;
                    }
                    break;
                
                case pieceState.currentLines >= 150:
                    if(pieceState.currentLevel != 16){
                        pieceState.currentLevel = 16;
                        levelText.textContent = pieceState.currentLevel;

                        // Speeds up game speed
                        intervalTime = 225;
                        clearInterval(timerId);
                        startTimer();

                        // Changes game music
                        current_level.pause();
                        current_level = level_12;
                        current_level.currentTime = 0;

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);
                    }
                    break;
                
                case pieceState.currentLines >= 140:
                    if(pieceState.currentLevel != 15){
                        pieceState.currentLevel = 15;
                        levelText.textContent = pieceState.currentLevel;

                        // Changes game music
                        current_level.pause();
                        current_level = level_11;
                        current_level.currentTime = 0;

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);
                    }
                    break;
                
                case pieceState.currentLines >= 130:
                    if(pieceState.currentLevel != 14){
                        pieceState.currentLevel = 14;
                        levelText.textContent = pieceState.currentLevel;

                        // Changes game music
                        current_level.pause();
                        current_level = level_10;
                        current_level.currentTime = 0;

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);
                    }
                    break;
                
                case pieceState.currentLines >= 120:
                    if(pieceState.currentLevel != 13){
                        pieceState.currentLevel = 13;
                        levelText.textContent = pieceState.currentLevel;

                        // Speeds up game speed
                        intervalTime = 350;
                        clearInterval(timerId);
                        startTimer();

                        // Changes game music
                        current_level.pause();
                        current_level = level_9;
                        current_level.currentTime = 0;

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);
                    }
                    break;
                
                case pieceState.currentLines >= 110:
                    if(pieceState.currentLevel != 12){
                        pieceState.currentLevel = 12;
                        levelText.textContent = pieceState.currentLevel;

                        // Changes game music
                        current_level.pause();
                        current_level = level_8;
                        current_level.currentTime = 0;

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);
                    }
                    break;
                
                case pieceState.currentLines >= 100:
                    if(pieceState.currentLevel != 11){
                        pieceState.currentLevel = 11;
                        levelText.textContent = pieceState.currentLevel;

                        // Changes game music
                        current_level.pause();
                        current_level = level_7;
                        current_level.currentTime = 0;

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);
                    }
                    break;
                
                case pieceState.currentLines >= 90:
                    if(pieceState.currentLevel != 10){
                        pieceState.currentLevel = 10;
                        levelText.textContent = pieceState.currentLevel;

                        // Speeds up game speed
                        intervalTime = 550;
                        clearInterval(timerId);
                        startTimer();

                        // Changes game music
                        current_level.pause();
                        current_level = level_6;
                        current_level.currentTime = 0;

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);
                    }
                    break;
                
                case pieceState.currentLines >= 80:
                    if(pieceState.currentLevel != 9){
                        pieceState.currentLevel = 9;
                        levelText.textContent = pieceState.currentLevel;
                    }
                    break;
                
                case pieceState.currentLines >= 70:
                    if(pieceState.currentLevel != 8){
                        pieceState.currentLevel = 8;
                        levelText.textContent = pieceState.currentLevel;

                        // Changes game music
                        current_level.pause();
                        current_level = level_1_5;
                        current_level.currentTime = 0;

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);
                    }
                    break;
                
                case pieceState.currentLines >= 60:
                    if(pieceState.currentLevel != 7){
                        pieceState.currentLevel = 7;
                        levelText.textContent = pieceState.currentLevel;

                        // Speeds up game speed
                        intervalTime = 700;
                        clearInterval(timerId);
                        startTimer();

                        // Changes game music
                        current_level.pause();
                        current_level = level_2_4;
                        current_level.currentTime = 0;

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);
                    }
                    break;
                
                case pieceState.currentLines >= 50:
                    if(pieceState.currentLevel != 6){
                        pieceState.currentLevel = 6;
                        levelText.textContent = pieceState.currentLevel;
                    }
                    break;
                
                case pieceState.currentLines >= 40:
                    if(pieceState.currentLevel != 5){
                        pieceState.currentLevel = 5;
                        levelText.textContent = pieceState.currentLevel;
                    }
                    break;
                
                case pieceState.currentLines >= 30:
                    if(pieceState.currentLevel != 4){
                        pieceState.currentLevel = 4;
                        levelText.textContent = pieceState.currentLevel;

                        // Speeds up game speed
                        intervalTime = 850;
                        clearInterval(timerId);
                        startTimer();

                        // Changes game music
                        current_level.pause();
                        current_level = level_3;
                        current_level.currentTime = 0;

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);
                    }
                    break;
                
                case pieceState.currentLines >= 20:
                    if(pieceState.currentLevel != 3){
                        pieceState.currentLevel = 3;
                        levelText.textContent = pieceState.currentLevel;

                        // Changes game music
                        current_level.pause();
                        current_level = level_2_4;
                        current_level.currentTime = 0;

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);
                    }
                    break;
                
                case pieceState.currentLines >= 10:
                    if(pieceState.currentLevel != 2){
                        pieceState.currentLevel = 2;
                        levelText.textContent = pieceState.currentLevel;
                    }
                    break;
                
                default: break;
            }
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