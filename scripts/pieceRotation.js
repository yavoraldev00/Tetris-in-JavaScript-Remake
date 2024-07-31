
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
        coordinates: [0,10,11,12]
    },

    // [*, 1, 2, 3]
    // [* ,* ,* ,13]
    // [20,21,22,23]
    // [30,31,32,33]


    "l_shape": {
        coordinates: [2,10,11,12]
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

// Random selection of Tetris piece
const randomPiece = Math.floor(Math.random() * (pieceNames.length-1));

// Randomly chosen Tetronimo
var chosenPiece = tetrisPieces[pieceNames[0]]["coordinates"];

// Set chosen piece on board
chosenPiece.forEach(piece => {
    const cell = document.querySelector(`[data-cell-number="${piece}"]`);

    if (cell) {
        cell.classList.add("piece");
    }
});

var curRotation = 0;

// Removes current piece from board
const removePiece = () => {
    const setPiecesArr = document.querySelectorAll(".piece");

    setPiecesArr.forEach((piece) => {
        piece.classList.remove("piece");
    })
}

// Sets current piece on board
const setPiece = (piece) => {
    // set pieces

    piece.forEach((pieceCell) => {
        const cell = document.querySelector(`[data-cell-number="${pieceCell}"]`);

        cell.classList.add("piece");
    })
}

// Rotates piece RIGHT by ADDING current rotation values, updates current rotation + 1
const rotatePieceRight = () => {
    // Removes piece
    removePiece();

    // do rotation
    const rotatedPiece = chosenPiece.map((piece, index) => {
        return piece += tetrisPieces['i_shape']['rotations'][curRotation][index];
    })

    chosenPiece = rotatedPiece

    // Sets piece
    setPiece(chosenPiece);

    // Updates current rotation
    (curRotation == 3) ? curRotation = 0 : curRotation += 1;
};

// Rotates piece LEFT by SUBTRACTING current rotation values, updates current rotation - 1
const rotatePieceLeft = () => {
    // Removes piece
    removePiece();

    // Updates current rotation
    (curRotation == 0) ? curRotation = 3 : curRotation -= 1;

    // do rotation
    const rotatedPiece = chosenPiece.map((piece, index) => {
        return piece -= tetrisPieces['i_shape']['rotations'][curRotation][index];
    })

    chosenPiece = rotatedPiece

    // Sets piece
    setPiece(chosenPiece);
};

document.addEventListener("keydown", (e)=> {
    const pressedKey = e.key;

    if(pressedKey == "x"){
        rotatePieceRight()
    }
    if(pressedKey == "z"){
        rotatePieceLeft()
    }

    console.log(curRotation)
})