// Object storing various states of the game

// Variables that show / hide menu screens
const startGameMsg = document.querySelector("#start-msg");
const pauseGameMsg = document.querySelector("#pause-msg");
const gameOverMsg = document.querySelector("#game-over-msg");

const beginGame = () => {
    startGameMsg.classList.add("hidden");

    // Starts the game by setting a piece on the board
    startGame();
};

const pauseGame = () => {
    pauseGameMsg.classList.remove("hidden")

    // Pauses the game
    pieceState.currentGameActive = false;
};

const gameOverScreen = () => {
    gameOverMsg.classList.remove("hidden")
};

const unpauseGame = () => {
    pauseGameMsg.classList.add("hidden")

    // Sets the game state to be active, allowing controlls
    pieceState.currentGameActive = true;
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
                pauseGame()
            }
        
            if(pieceState.currentLineClearAnimation == false){
                moveGhostPiece();
            }
        
            console.log(pieceState.currentRotation)
        }
    }
})