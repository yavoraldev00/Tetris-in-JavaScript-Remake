// Object storing various states of the game

// Variables that show / hide menu screens

// const startGameMsg = document.querySelector("#start-msg");
const pauseGameMsg = document.querySelector("#pause-msg");
// const gameOverMsg = document.querySelector("#game-over-msg");

// Variable that stores the currently playing video
var current_video = document.getElementById("level_1_vid");

const beginGame = () => {
    document.querySelector("#start-msg").classList.add("hidden");

    // Starts the game by setting a piece on the board
    startGame();
};

// Pauses the game
const pauseGame = () => {
    // Shows pause message
    pauseGameMsg.classList.remove("hidden")
 
    // Pauses the game from playing
    pieceState.currentGameActive = false;

    // Pauses music
    current_level.pause();

    // Pauses the gameplay video
    current_video.pause();

    // Plays pause sound effect
    pauseSound.currentTime = 0;
    pauseSound.play();
};

const unpauseGame = () => {
    pauseGameMsg.classList.add("hidden")

    // Sets the game state to be active, allowing controlls
    pieceState.currentGameActive = true;

    // Un-pauses music
    current_level.play();

    // Un-pauses the gameplay video
    current_video.play();
};

// Shows game over screen
const gameOverScreen = () => {
    document.querySelector("#game-over-msg").classList.remove("hidden");

    // Game Over sound
    gameOver.currentTime = 0;
    gameOver.play();
};

// Shows game victory screen
const gameVictoryScreen = () => {
    document.querySelector("#game-victory-msg").classList.remove("hidden");

    // Victory sound
    Victory.currentTime = 0;
    Victory.play();
};

// Finishes the game
const endGame = () => {
    // Stops the game
    pieceState.currentGameActive = false;
    
    // Stops background sprite animation
    document.getElementById("sprite").classList.remove("animate-idle");

    // Removes the class from the container, so any current animation stops
    document.getElementById("sprite-container").classList.remove("animate-container");

    // Stops the automatic block falling interval
    clearInterval(timerId);

    // Stops currently playing music
    current_level.pause();

    // Stops currently playing video
    current_video.pause(); 
};

// Updates the game score
// Only for player movements
const updateScore = (increaseBy, playerMovement = false) => {

    if(playerMovement !== false){
        // Increases the score by the generated points
        pieceState.currentScore = pieceState.currentScore + increaseBy;
    
        // Updates the displayed score
        document.getElementById("score").textContent = pieceState.currentScore;
    }
};

// Automatic movement timer, moves the piece down at an interval

let timerId; // Store the timer ID to clear it later
let intervalTime = 1500; // How fast the block automatically drops, becomes faster (lower time), when lines are cleared

function startTimer() {
  timerId = setInterval(() => {
    if (pieceState.gameActive && !pieceState.currentLineClearAnimation) {
      movePiece("ArrowDown"); // Move the piece down automatically
    }
  }, intervalTime); // 1000 milliseconds = 1 second
}

// Detects pressed key
document.addEventListener("keydown", (e)=> {
    // Can only controll if no animation is playing
    
    if(pieceState.gameActive){ // Only allows game to play while the game is active
        if(pieceState.currentLineClearAnimation == false){
            // Variable that stores pressed key
            const pressedKey = e.key;
        
            if(pressedKey == "x" || pressedKey == "z"){ // If "x" or "z" are pressed, rotates piece
                rotatePiece(pressedKey)
            }else if(pressedKey == "ArrowRight" || pressedKey == "ArrowLeft" || pressedKey == "ArrowDown" || pressedKey == "ArrowUp"){ // If directional keys are perssed, moves piece
                movePiece(pressedKey, e)
            }else if(pressedKey == "a"){ // If directional keys are perssed, moves piece
                updateHeldPiece()
            }else if(pressedKey == "Escape"){
                pauseGame();
            }
        
            if(pieceState.currentLineClearAnimation == false){
                moveGhostPiece();
            }
        
            // console.log(pieceState.currentRotation)
        }

        // If the game is paused, the Escape key is pressed and the pause message is showing, allows to unpause the game
    }else if(!pieceState.gameActive && e.key == "Escape" && !pauseGameMsg.classList.contains("hidden")){
        unpauseGame();
    }
})