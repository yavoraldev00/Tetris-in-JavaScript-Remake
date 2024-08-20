// Main board
const board = document.getElementById("board")
var cellNum = 0;

for (let i = 0; i < 20; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 10; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-cell-number", cellNum);
        // cell.textContent = cellNum;
        row.appendChild(cell);
        cellNum += 1;
    }

    board.appendChild(row);
}

// Held piece board
const heldPieceBoard = document.getElementById("held-piece-board");
var cellNum = 0;

for (let i = 0; i < 4; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 4; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-cell-number", cellNum);
        // cell.textContent = cellNum;
        row.appendChild(cell);
        cellNum += 1;
    }

    heldPieceBoard.appendChild(row);
    cellNum += 6;
}

// Next piece board
const nextPieceBoard = document.getElementById("next-piece-board");
var cellNum = 0;

for (let i = 0; i < 4; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 4; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-cell-number", cellNum);
        // cell.textContent = cellNum;
        row.appendChild(cell);
        cellNum += 1;
    }

    nextPieceBoard.appendChild(row);
    cellNum += 6;

}