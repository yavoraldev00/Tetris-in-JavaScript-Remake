// Function used for collision detection. Returns "true" if new piece location would collide with wall/other piece
const collisionDetection = (curPieceLocation, movedPieceLocation, pressedKey) => {

    switch(pressedKey){
        case "ArrowRight":
            if(curPieceLocation%10 == 9 && movedPieceLocation%10 == 0){
                return true;
            };
            break;
        case "ArrowLeft":
            if(curPieceLocation%10 == 0 && (movedPieceLocation%10 == 9 || movedPieceLocation == -1)){
                return true;
            }
            break;
        case "x":
            if(curPieceLocation%10 >= 8 && movedPieceLocation%10 <= 2 || curPieceLocation%10 <= 2 && movedPieceLocation%10 >= 8){
                return true;
            }
            break;
        case "z":
            if(curPieceLocation%10 >= 8 && movedPieceLocation%10 <= 2 || curPieceLocation%10 <= 2 && movedPieceLocation%10 >= 8){
                return true;
            }
            break;
        
        default: break;
    }
}