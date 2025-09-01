// Array holding all rows on the board
var rowArray = Array.from(board.getElementsByClassName("row"));

// Variable holding HTML element for sprite
const sprite_image = document.getElementById("sprite");

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

        // WORK IN PROGRESS - adds animation to sprite depending on number of lines cleared
        playSpriteClearAnimation(filledRows.length);

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
                updateTetrisClearMessage(filledRows[0]);
                break;
            default: break;
        }

        // Only does further checks if new level is reached (10, 20, 30 etc.)
        if(filledRows.length > 0 && (pieceState.currentLines % 10 < 4 && oldLines % 10 > 5)){
            // Updates the current level
            pieceState.currentLevel += 1;
            levelText.textContent = pieceState.currentLevel;

            // Plays level up sound effect
            playLevelUpAnimation();

            // Increases level, game speed, changes graphics etc.
            updateLevelTextAndMusic(pieceState.currentLevel);
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

/* Animation related code */

const spriteContainerRotations = [
        /* [ X rotation, Y rotation, Z rotation ] measured in deg */

        [360,0,360], // || Top Right X
        [0,360,360], // || Top Right Y
        [360,0,-360], // || Top Left X
        [0,360,-360], // || Top Left Y
        [360,0,0], // || Top Spin X
        [0,360,0], //|| Top Spin 
    ];


// Variable for access to change CSS variables related to container animation

const r = document.querySelector(':root');

// Variable containing the background sprite container, used during line clears
const spriteContainer = document.getElementById("sprite-container");

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