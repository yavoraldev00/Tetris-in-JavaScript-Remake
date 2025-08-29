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
        var sprite_image = document.getElementById("sprite");

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
                break;
            default: break;
        }

        // Only does further checks 
        if(filledRows.length > 0 && (pieceState.currentLines %10 < 4 && oldLines > 5)){
            var sprite_image = document.getElementById("sprite");

            // Increases level, game speed, changes graphics etc.
            switch(true){
                case pieceState.currentLines >= 190:
                    if(pieceState.currentLevel != 20){
                        // Increases level and updates level text
                        pieceState.currentLevel = 20;
                        levelText.textContent = pieceState.currentLevel;

                        // Changes game music
                        current_level.pause();
                        current_level = level_20;
                        current_level.loop = true;
                        current_level.currentTime = 0;

                        // Changes level sprite
                        sprite_image.src = "resources/level_20_sprite.png";

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);

                        // Replaces gameplay video with new level video
                        current_video.classList.add("hide-video")

                        setTimeout(() => {
                            current_video.classList.add("hidden");
                            current_video.pause();

                            current_video = document.getElementById("level_20_vid");
                            current_video.classList.remove("hidden");
                            current_video.play();
                        }, 500);
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

                        // Changes level sprite
                        sprite_image.src = "resources/level_19_sprite.png";

                        // Replaces gameplay video with new level video
                        current_video.classList.add("hide-video")

                        setTimeout(() => {
                            current_video.classList.add("hidden");
                            current_video.pause();

                            current_video = document.getElementById("level_19_vid");
                            current_video.classList.remove("hidden");
                            current_video.play();
                        }, 500);
                    }
                    break;
                
                case pieceState.currentLines >= 170:
                    if(pieceState.currentLevel != 18){
                        pieceState.currentLevel = 18;
                        levelText.textContent = pieceState.currentLevel;

                        // Changes level sprite
                        sprite_image.src = "resources/level_18_sprite.png";

                        // Replaces gameplay video with new level video
                        current_video.classList.add("hide-video")

                        setTimeout(() => {
                            current_video.classList.add("hidden");
                            current_video.pause();

                            current_video = document.getElementById("level_18_vid");
                            current_video.classList.remove("hidden");
                            current_video.play();
                        }, 500);
                    }
                    break;
                
                case pieceState.currentLines >= 160:
                    if(pieceState.currentLevel != 17){
                        pieceState.currentLevel = 17;
                        levelText.textContent = pieceState.currentLevel;

                        // Changes level sprite
                        sprite_image.src = "resources/level_17_sprite.png";

                        // Replaces gameplay video with new level video
                        current_video.classList.add("hide-video")

                        setTimeout(() => {
                            current_video.classList.add("hidden");
                            current_video.pause();

                            current_video = document.getElementById("level_17_vid");
                            current_video.classList.remove("hidden");
                            current_video.play();
                        }, 500);
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
                        current_level = level_16;
                        current_level.loop = true;
                        current_level.currentTime = 0;

                        // Changes level sprite
                        sprite_image.src = "resources/level_16_sprite.png";

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);

                        // Replaces gameplay video with new level video
                        current_video.classList.add("hide-video")

                        setTimeout(() => {
                            current_video.classList.add("hidden");
                            current_video.pause();

                            current_video = document.getElementById("level_16_vid");
                            current_video.classList.remove("hidden");
                            current_video.play();
                        }, 500);
                    }
                    break;
                
                case pieceState.currentLines >= 140:
                    if(pieceState.currentLevel != 15){
                        pieceState.currentLevel = 15;
                        levelText.textContent = pieceState.currentLevel;

                        // Changes game music
                        current_level.pause();
                        current_level = level_15;
                        current_level.loop = true;
                        current_level.currentTime = 0;

                        // Changes level sprite
                        sprite_image.src = "resources/level_15_sprite.png";

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);

                        // Replaces gameplay video with new level video
                        current_video.classList.add("hide-video")

                        setTimeout(() => {
                            current_video.classList.add("hidden");
                            current_video.pause();

                            current_video = document.getElementById("level_15_vid");
                            current_video.classList.remove("hidden");
                            current_video.play();
                        }, 500);
                    }
                    break;
                
                case pieceState.currentLines >= 130:
                    if(pieceState.currentLevel != 14){
                        pieceState.currentLevel = 14;
                        levelText.textContent = pieceState.currentLevel;

                        // Changes game music
                        current_level.pause();
                        current_level = level_14;
                        current_level.loop = true;
                        current_level.currentTime = 0;

                        // Changes level sprite
                        sprite_image.src = "resources/level_14_sprite.png";

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);

                        // Replaces gameplay video with new level video
                        current_video.classList.add("hide-video")

                        setTimeout(() => {
                            current_video.classList.add("hidden");
                            current_video.pause();

                            current_video = document.getElementById("level_14_vid");
                            current_video.classList.remove("hidden");
                            current_video.play();
                        }, 500);
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
                        current_level = level_13;
                        current_level.loop = true;
                        current_level.currentTime = 0;

                        // Changes level sprite
                        sprite_image.src = "resources/level_13_sprite.png";

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);

                        // Replaces gameplay video with new level video
                        current_video.classList.add("hide-video")

                        setTimeout(() => {
                            current_video.classList.add("hidden");
                            current_video.pause();

                            current_video = document.getElementById("level_13_vid");
                            current_video.classList.remove("hidden");
                            current_video.play();
                        }, 500);
                    }
                    break;
                
                case pieceState.currentLines >= 110:
                    if(pieceState.currentLevel != 12){
                        pieceState.currentLevel = 12;
                        levelText.textContent = pieceState.currentLevel;

                        // Changes game music
                        current_level.pause();
                        current_level = level_12;
                        current_level.loop = true;
                        current_level.currentTime = 0;

                        // Changes level sprite
                        sprite_image.src = "resources/level_12_sprite.png";

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);

                        // Replaces gameplay video with new level video
                        current_video.classList.add("hide-video")

                        setTimeout(() => {
                            current_video.classList.add("hidden");
                            current_video.pause();

                            current_video = document.getElementById("level_12_vid");
                            current_video.classList.remove("hidden");
                            current_video.play();
                        }, 500);
                    }
                    break;
                
                case pieceState.currentLines >= 100:
                    if(pieceState.currentLevel != 11){
                        pieceState.currentLevel = 11;
                        levelText.textContent = pieceState.currentLevel;

                        // Changes game music
                        current_level.pause();
                        current_level = level_11;
                        current_level.loop = true;
                        current_level.currentTime = 0;

                        // Changes level sprite
                        sprite_image.src = "resources/level_11_sprite.png";

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);

                        // Replaces gameplay video with new level video
                        current_video.classList.add("hide-video")

                        setTimeout(() => {
                            current_video.classList.add("hidden");
                            current_video.pause();

                            current_video = document.getElementById("level_11_vid");
                            current_video.classList.remove("hidden");
                            current_video.play();
                        }, 500);
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
                        current_level = level_10;
                        current_level.loop = true;
                        current_level.currentTime = 0;

                        // Changes level sprite
                        sprite_image.src = "resources/level_10_sprite.png";

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);

                        // Replaces gameplay video with new level video
                        current_video.classList.add("hide-video")

                        setTimeout(() => {
                            current_video.classList.add("hidden");
                            current_video.pause();

                            current_video = document.getElementById("level_10_vid");
                            current_video.classList.remove("hidden");
                            current_video.play();
                        }, 500);
                    }
                    break;
                
                case pieceState.currentLines >= 80:
                    if(pieceState.currentLevel != 9){
                        pieceState.currentLevel = 9;
                        levelText.textContent = pieceState.currentLevel;

                        // Changes level sprite
                        sprite_image.src = "resources/level_9_sprite.png";
                    }
                    break;
                
                case pieceState.currentLines >= 70:
                    if(pieceState.currentLevel != 8){
                        pieceState.currentLevel = 8;
                        levelText.textContent = pieceState.currentLevel;

                        // Changes game music
                        current_level.pause();
                        current_level = level_1_8;
                        current_level.loop = true;
                        current_level.currentTime = 0;

                        // Changes level sprite
                        sprite_image.src = "resources/level_8_sprite.png";

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);

                        // Replaces gameplay video with new level video
                        current_video.classList.add("hide-video")

                        setTimeout(() => {
                            current_video.classList.add("hidden");
                            current_video.pause();

                            current_video = document.getElementById("level_8_vid");
                            current_video.classList.remove("hidden");
                            current_video.play();
                        }, 500);
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
                        current_level = level_3_7;
                        current_level.loop = true;
                        current_level.currentTime = 0;

                        // Changes level sprite
                        sprite_image.src = "resources/level_7_sprite.png";

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);

                        // Replaces gameplay video with new level video
                        current_video.classList.add("hide-video")

                        setTimeout(() => {
                            current_video.classList.add("hidden");
                            current_video.pause();

                            current_video = document.getElementById("level_7_vid");
                            current_video.classList.remove("hidden");
                            current_video.play();
                        }, 500);
                    }
                    break;
                
                case pieceState.currentLines >= 50:
                    if(pieceState.currentLevel != 6){
                        pieceState.currentLevel = 6;
                        levelText.textContent = pieceState.currentLevel;

                        // Changes level sprite
                        sprite_image.src = "resources/level_6_sprite.png";
                    }
                    break;
                
                case pieceState.currentLines >= 40:
                    if(pieceState.currentLevel != 5){
                        pieceState.currentLevel = 5;
                        levelText.textContent = pieceState.currentLevel;

                        // Changes level sprite
                        sprite_image.src = "resources/level_5_sprite.png";
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
                        current_level = level_4;
                        current_level.loop = true;
                        current_level.currentTime = 0;

                        // Changes level sprite
                        sprite_image.src = "resources/level_4_sprite.png";

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);

                        // Replaces gameplay video with new level video
                        current_video.classList.add("hide-video")

                        setTimeout(() => {
                            current_video.classList.add("hidden");
                            current_video.pause();

                            current_video = document.getElementById("level_4_vid");
                            current_video.classList.remove("hidden");
                            current_video.play();
                        }, 500);
                    }
                    break;
                
                case pieceState.currentLines >= 20:
                    if(pieceState.currentLevel != 3){
                        pieceState.currentLevel = 3;
                        levelText.textContent = pieceState.currentLevel;

                        // Changes game music
                        current_level.pause();
                        current_level = level_3_7;
                        current_level.loop = true;
                        current_level.currentTime = 0;

                        // Changes level sprite
                        sprite_image.src = "resources/level_3_sprite.png";

                        // Starts song after 1 second delay
                        setTimeout(() => {
                            current_level.play();
                        }, 1000);

                        // Replaces gameplay video with new level video
                        current_video.classList.add("hide-video")

                        setTimeout(() => {
                            current_video.classList.add("hidden");
                            current_video.pause();

                            current_video = document.getElementById("level_3_vid");
                            current_video.classList.remove("hidden");
                            current_video.play();
                        }, 500);
                    }
                    break;
                
                case pieceState.currentLines >= 10:
                    if(pieceState.currentLevel != 2){
                        pieceState.currentLevel = 2;
                        levelText.textContent = pieceState.currentLevel;

                        // Changes level sprite
                        sprite_image.src = "resources/level_2_sprite.png";
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

// Sets a class on rows when animation ends
const playSpriteClearAnimation = (clearedLines) => {
    if(clearedLines == 4 || (pieceState.currentSpriteContainerAnimation == false && clearedLines !== 4)){
        // Sets animation variable to playing
        pieceState.currentSpriteContainerAnimation = true;

        // Picks a random rotation to do
        const pickedRotation = spriteContainerRotations[Math.floor(Math.random() * spriteContainerRotations.length)];

        // Sets CSS variable values
        r.style.setProperty("--X",`${pickedRotation[0]}deg`);
        r.style.setProperty("--Y",`${pickedRotation[1]}deg`);
        r.style.setProperty("--Z",`${pickedRotation[2]}deg`);
        r.style.setProperty("--Duration","5000ms");

        // Adds class to container that plays an animation
        spriteContainer.classList.add("animate-container");

        setTimeout(() => {
            // Removes the class from the container, after animation finsihes, so a new one can be played
            document.getElementById("sprite-container").classList.remove("animate-container");

            // Sets animation variable to NOT playing
            pieceState.currentSpriteContainerAnimation = false;
        }, 5000);
    }
}

const myFunc = () => {
    
}