//Tetris pieces
tetrisPieces = {
    // Guide to initial coordinates

    // [0, 1, 2, 3]
    // [10,11,12,13]
    // [20,21,22,23]
    // [30,31,32,33]

    // **NOTE**: coordinates for pieces are written left-right (important for rotation)

    // -----------------

    "i_shape": {
        name:"i_shape",
        color: "bg-blue-300",
        coordinates: [10,11,12,13],
        rotations: [
            [-8,   1, 10, 19],
            [21,  10, -1,-12],
            [8,   -1,-10,-19],
            [-21,-10,  1, 12]
        ]
    },

    // [0, 1, 2, 3]
    // [*, *, *, *]
    // [20,21,22,23]
    // [30,31,32,33]


    "j_shape": {
        name:"j_shape",
        color: "bg-blue-600",
        coordinates: [0,10,11,12],
        rotations: [
            [2 ,  -9,0,  9],
            [20,  11,0,-11],
            [-2,   9,0, -9],
            [-20,-11,0, 11]
        ]
    },

    // [*, 1, 2, 3]
    // [* ,* ,* ,13]
    // [20,21,22,23]
    // [30,31,32,33]


    "l_shape": {
        name:"l_shape",
        color: "bg-orange-400",
        coordinates: [2,10,11,12],
        rotations: [
            [ 20, -9,0,  9],
            [ -2, 11,0,-11],
            [-20,  9,0, -9],
            [  2,-11,0, 11]
        ]
    },

    // [0, 1, *, 3]
    // [*, *, *,13]
    // [20,21,22,23]
    // [30,31,32,33]

    "o_shape": {
        name:"o_shape",
        color: "bg-yellow-300",
        coordinates: [1,2,11,12],
        rotations: [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ]
    },

    // [0,  *, *, 3]
    // [10, *, *,13]
    // [20,21,22,23]
    // [30,31,32,33]

    "s_shape": {
        name:"s_shape",
        color: "bg-green-400",
        coordinates: [1,2,10,11],
        rotations: [
            [ 11, 20, -9, 0],
            [  9, -2, 11, 0],
            [-11,-20,  9, 0],
            [ -9,  2,-11, 0]
        ]
    },

    // [0 , *, *, 3]
    // [* , *,12,13]
    // [20,21,22,23]
    // [30,31,32,33]

    "t_shape": {
        name:"t_shape",
        color: "bg-purple-600",
        coordinates: [1,10,11,12],
        rotations: [
            [ 11, -9,0,   9],
            [  9, 11,0, -11],
            [-11,  9,0,  -9],
            [ -9,-11,0,  11]
        ]
    },

    // [0,  *, 2, 3]
    // [* ,* ,* ,13]
    // [20,21,22,23]
    // [30,31,32,33]

    "z_shape": {
        name:"z_shape",
        color: "bg-red-500",
        coordinates: [0,1,11,12],
        rotations: [
            [  2, 11, 0,   9],
            [ 20,  9, 0, -11],
            [ -2,-11, 0,  -9],
            [-20, -9, 0,  11]
        ]
    }
    // [ *, *, 2, 3]
    // [10,* ,* ,13]
    // [20,21,22,23]
    // [30,31,32,33]
}

// Piece names used to generate Tetronimo
const pieceNames = ["i_shape","j_shape","l_shape","o_shape","s_shape","t_shape","z_shape"]

// Removes current piece from board
const removePiece = () => {
    const setPiecesArr = board.querySelectorAll(".current-piece");

    setPiecesArr.forEach((piece) => {
        piece.classList.remove("current-piece");
        piece.classList.remove( `${pieceState.curTetronimo.name + "-color"}` );
    })
}

// Sets current piece on board
const placePiece = (piece) => {
    piece.forEach((pieceCell) => {
        const cell = board.querySelector(`[data-cell-number="${pieceCell}"]`);

        cell.classList.add("current-piece");
        cell.classList.add( `${pieceState.curTetronimo.name + "-color"}` );
    })
}

// Generates new piece
const generatePiece = () => {
    let breakFlag = false;

    let randomPiece = Math.floor(Math.random() * 7)

    chosenPiece = tetrisPieces[pieceNames[randomPiece]]["coordinates"];

    // Sets the randomly chosen piece as the current piece in pieceState
    pieceState.currentPiece = structuredClone(tetrisPieces[pieceNames[randomPiece]]);

    // let chosenPiece2 = pieceState.currentPiece["coordinates"];
    
    adjustedPiece = chosenPiece.map((piece) => {
        return piece += 3;
    })

    chosenPiece = adjustedPiece;
    placePiece(chosenPiece);

    chosenPiece.forEach((pieces) => {
        if(collisionDetection(pieces, pieces, "ArrowDown")){
            breakFlag = true;
        }
    })

    if(breakFlag){
        alert("YOU LOSE")
    }
}

// Sets current piece on the board
const setPiece = () => {
    // Variable with all current piece locations
    var currentPieces = board.querySelectorAll(".current-piece")

    currentPieces.forEach((piece) => { // replaces the "current-piece" class with the "piece" class
        piece.classList.remove("current-piece")
        piece.classList.add("piece")
    })

    // Resets current rotation
    curRotation = 0;

    // Checks and clears any lines
    checkForLineClear()
}

// Randomly chosen Tetronimo
var chosenPiece;

// Current piece rotation
var curRotation = 0;

// Current cleared lines
var clearedLines = 0;

// Generates a piece to start the game
generatePiece();

// Sets cleared lines score
var lineScore = document.getElementById("lines");
lineScore.textContent = clearedLines;


// Detects pressed key
document.addEventListener("keydown", (e)=> {
    // Variable that stores pressed key
    const pressedKey = e.key;

    if(pressedKey == "x" || pressedKey == "z"){ // If "x" or "z" are pressed, rotates piece
        rotatePiece(pressedKey)
    }else if(pressedKey == "ArrowRight" || pressedKey == "ArrowLeft" || pressedKey == "ArrowDown" || pressedKey == "ArrowUp"){ // If directional keys are perssed, moves piece
        movePiece(pressedKey)
    }

    console.log(curRotation)
})