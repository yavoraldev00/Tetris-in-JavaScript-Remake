// Array containing heights of each row, used to set and adjust Tetris clear message
const rowCoordinates = Array.from(board.querySelectorAll('.row')).map(row => {
  return row.getBoundingClientRect().top;
});

// Puts the Tetris clear message next to cleared Tetris row
const updateTetrisClearMessage = (cleared_row) =>{ // Variable passed on for the heighest row cleared from Tetris
    // Variable holding the HTML element
    const tetrisClearMessage = document.getElementById("tetris-clear-message");
    
    // Adjusts the position
    tetrisClearMessage.style.left = `${board.querySelector("div").getBoundingClientRect()['right'] + 12}px`;
    tetrisClearMessage.style.top = `${rowCoordinates[cleared_row] - 10}px`;

    // Removes the "hidden" class, displaying the message
    tetrisClearMessage.classList.remove("hidden");

    // Removes the message after it's finished playing the animation
    setTimeout(() => {
       tetrisClearMessage.classList.add("hidden"); 
    }, 1250);
}