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
        coordinates: [1,2,11,12]
    },

    // [0,  *, *, 3]
    // [10, *, *,13]
    // [20,21,22,23]
    // [30,31,32,33]

    "s_shape": {
        coordinates: [1,2,10,11]
    },

    // [0 , *, *, 3]
    // [* , *,12,13]
    // [20,21,22,23]
    // [30,31,32,33]

    "t_shape": {
        coordinates: [1,10,11,12]
    },

    // [0,  *, 2, 3]
    // [* ,* ,* ,13]
    // [20,21,22,23]
    // [30,31,32,33]

    "z_shape": {
        coordinates: [0,1,11,12]
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
    const setPiecesArr = document.querySelectorAll(".current-piece");

    setPiecesArr.forEach((piece) => {
        piece.classList.remove("current-piece");
    })
}

// Sets current piece on board
const placePiece = (piece) => {
    piece.forEach((pieceCell) => {
        const cell = document.querySelector(`[data-cell-number="${pieceCell}"]`);

        cell.classList.add("current-piece");
    })
}

// Generates new piece
const generatePiece = () => {
    chosenPiece = tetrisPieces[pieceNames[randomPiece]]["coordinates"];
    placePiece(chosenPiece);
}

// Sets current piece on the board
const setPiece = () => {
    // Variable with all current piece locations
    var currentPieces = document.querySelectorAll(".current-piece")

    currentPieces.forEach((piece) => { // replaces the "current-piece" class with the "piece" class
        piece.classList.remove("current-piece")
        piece.classList.add("piece")
    })

    // Resets current rotation
    curRotation = 0;
}


// Random selection of Tetris piece
// const randomPiece = Math.floor(Math.random() * (pieceNames.length-1));
const randomPiece = 2;

// Randomly chosen Tetronimo
var chosenPiece = tetrisPieces[pieceNames[randomPiece]]["coordinates"];



// Current piece rotation
var curRotation = 0;

// Sets piece on board
placePiece(chosenPiece)

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