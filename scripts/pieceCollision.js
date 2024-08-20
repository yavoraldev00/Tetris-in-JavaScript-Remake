// Function used for collision detection. Returns "true" if new piece location would collide with wall/other piece
const collisionDetection = (curPieceLocation, movedPieceLocation, pressedKey) => {
    const movedPiece = board.querySelector(`[data-cell-number="${movedPieceLocation}"]`);

    let lowerLimit = 2;
    let upperLimit = 8;
    if(movedPieceLocation < 0 || movedPieceLocation > 199){
        return true;
    }

    switch(pressedKey){
        case "ArrowRight":
            if(
                (curPieceLocation%10 == 9 && movedPieceLocation%10 == 0)
                ||
                movedPiece.classList.contains("piece")
            ){
                return true;
            };
            break;
        case "ArrowLeft":
            if(
                (curPieceLocation%10 == 0 && (movedPieceLocation%10 == 9 || movedPieceLocation == -1))
                ||
                movedPiece.classList.contains("piece")
            ){
                return true;
            }
            break;
        case "ArrowDown":
        case "ArrowUp":
            if(
                movedPieceLocation > 199
                ||
                movedPiece.classList.contains("piece")
            ){
                return true;
            }
            break;
        case "x":
        case "z":
            if(
                (curPieceLocation%10 >= 8 && movedPieceLocation%10 <= 2 || curPieceLocation%10 <= 2 && movedPieceLocation%10 >= 8)
                ||
                movedPieceLocation > 199
                ||
                movedPiece.classList.contains("piece")
            ){
                return true;
            }
            break;
        default: break;
    }
}