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