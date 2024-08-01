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

var held_cell_num = 0;
const held_piece = document.getElementById("held-piece");

for (let i = 0; i < 4; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 4; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-cell-number", held_cell_num);
        cell.textContent = held_cell_num;
        row.appendChild(cell);
        held_cell_num += 1;
    }

    held_piece.appendChild(row);
}

var held_cell_num = 0;
const next_piece = document.getElementById("next-piece");

for (let i = 0; i < 4; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 4; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-cell-number", held_cell_num);
        cell.textContent = held_cell_num;
        row.appendChild(cell);
        held_cell_num += 1;
    }

    next_piece.appendChild(row);
}