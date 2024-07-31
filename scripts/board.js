const board = document.getElementById("board")
var cell_num = 0;

for (let i = 0; i < 20; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 10; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-cell-number", cell_num);
        cell.textContent = cell_num;
        row.appendChild(cell);
        cell_num += 1;
    }

    board.appendChild(row);
}

//Tetris pieces

tetrisPieces = {
    // Guide to initial coordinates

    // [0, 1, 2, 3]
    // [10,11,12,13]
    // [20,21,22,23]
    // [30,31,32,33]

    // **NOTE**: coordinates for pieces are written left-right (important for rotation)

    // -----------------

    "i_shape": [10,11,12,13],

    // [0, 1, 2, 3]
    // [*, *, *, *]
    // [20,21,22,23]
    // [30,31,32,33]


    "j_shape": [0,10,11,12],

    // [*, 1, 2, 3]
    // [* ,* ,* ,13]
    // [20,21,22,23]
    // [30,31,32,33]


    "l_shape": [2,10,11,12],

    // [0, 1, *, 3]
    // [*, *, *,13]
    // [20,21,22,23]
    // [30,31,32,33]

    "o_shape": [1,2,11,12],

    // [0,  *, *, 3]
    // [10, *, *,13]
    // [20,21,22,23]
    // [30,31,32,33]

    "s_shape": [1,2,10,11],

    // [0 , *, *, 3]
    // [* , *,12,13]
    // [20,21,22,23]
    // [30,31,32,33]

    "t_shape": [1,10,11,12],

    // [0,  *, 2, 3]
    // [* ,* ,* ,13]
    // [20,21,22,23]
    // [30,31,32,33]

    "z_shape": [0,1,11,12]

    // [ *, *, 2, 3]
    // [10,* ,* ,13]
    // [20,21,22,23]
    // [30,31,32,33]
}

const pieceNames = ["i_shape","j_shape","l_shape","o_shape","s_shape","t_shape","z_shape"]

const randomPiece = Math.floor(Math.random() * (pieceNames.length-1));

const chosenPiece = tetrisPieces[pieceNames[randomPiece]];


chosenPiece.forEach(pieceCell => {
    const cell = document.querySelector(`[data-cell-number="${pieceCell}"]`);

    if (cell) {
        cell.classList.add("piece");
    }
});