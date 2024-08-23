// Object storing various states of the game
gameState = {};

const startGameMsg = document.querySelector("#start-msg");
const startGameButton = document.querySelector("#start-game");

const pauseGameMsg = document.querySelector("#pause-msg");
const pauseGameButton = document.querySelector("#pause-msg");

const beginGame = () => {
    startGameMsg.classList.add("hidden");
};

const pauseGame = () => {
    pauseGameMsg.classList.remove("hidden")
};

const unpauseGame = () => {
    pauseGameMsg.classList.add("hidden")
};

startGameButton.addEventListener("click", beginGame);
pauseGameButton.addEventListener("click", unpauseGame);

// Detects pressed key
document.addEventListener("keydown", (e)=> {
    // Can only controll if no animation is playing
    if(pieceState.currentLineClearAnimation == false){
        // Variable that stores pressed key
        const pressedKey = e.key;
    
        if(pressedKey == "x" || pressedKey == "z"){ // If "x" or "z" are pressed, rotates piece
            rotatePiece(pressedKey)
        }else if(pressedKey == "ArrowRight" || pressedKey == "ArrowLeft" || pressedKey == "ArrowDown" || pressedKey == "ArrowUp"){ // If directional keys are perssed, moves piece
            movePiece(pressedKey)
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
})