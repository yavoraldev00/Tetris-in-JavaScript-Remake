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
        case "leftCollision":
            if(
                (curPieceLocation%10 <= 2 && movedPieceLocation%10 >= 8)
                ||
                movedPieceLocation > 199
                ||
                movedPiece.classList.contains("piece")
            ){
                return true;
            }
            break;
        case "rightCollision":
            if(
                (curPieceLocation%10 >= 8 && movedPieceLocation%10 <= 2)
                ||
                movedPieceLocation > 199
                ||
                movedPiece.classList.contains("piece")
            ){
                return true;
            }
            break;
        case "Collision":
            if(
                movedPiece.classList.contains("piece")
            ){
                return true;
            }
            break;
        default: break;
    }
}

const checkWallKick = (curPieceLocation, rotationDirection, leftCollision, rightCollision) => {
    // Offset is 1, unless it's I shape in position 1 or 3, and is on the left or right edge of the screen
    const leftOffset = (pieceState.currentPiece.name == "i_shape" && (pieceState.currentRotation == 3 || pieceState.currentRotation == 2) && pieceState.currentCoordinates[0]%10 == 9) ? 2 : 1;
    
    // Offset is 1, unless it's I shape in position 1 or 3, and is on the left or right edge of the screen
    const rightOffset = (pieceState.currentPiece.name == "i_shape" && (pieceState.currentRotation == 1 || pieceState.currentRotation == 0) && pieceState.currentCoordinates[0]%10 == 0) ? 2 : 1;

    // Tetris piece if it was moved one to the left
    const kickedPieceLeft = curPieceLocation.map((piece)=>{
        return piece -= leftOffset;
    })

    // Tetris piece if it was moved one to the right
    const kickedPieceRight = curPieceLocation.map((piece)=>{
        return piece += rightOffset;
    })

    // Flag used for collision checks
    let breakFlag = false;

    if(rotationDirection == "x"){ // If rotating RIGHT
        //Pushed piece LEFT and checks for collision
        if(rightCollision){
            kickedPieceLeft.forEach((piece) => {
                if(collisionDetection(null, piece, "Collision")){
                    breakFlag = true;
                }
            });

            //If NOT colliding, returls the LEFT PUSHED piece
            if(!breakFlag){
                return kickedPieceLeft;
            }else{
                return false;
            }
        }else if(leftCollision){ // If collision is on left side, when turn piece clockwise
            //Pushed piece LEFT and checks for collision
            kickedPieceRight.forEach((piece) => {
                if(collisionDetection(null, piece, "Collision")){
                    breakFlag = true;
                }
            });

            //If NOT colliding, returls the RIGHT PUSHED piece
            if(!breakFlag){
                return kickedPieceRight;
            }else{
                return false;
            }
        }
    }else if(rotationDirection == "z"){ // If rotating LEFT
        //Pushed piece RIGHT and checks for collision
        if(leftCollision){ // If collision is on left side, when turn piece counter-clockwise
            kickedPieceRight.forEach((piece) => {
                if(collisionDetection(null, piece, "Collision")){
                    breakFlag = true;
                }
            });

            //If NOT colliding, returls the RIGHT PUSHED piece
            if(!breakFlag){
                return kickedPieceRight;
            }else{
                return false;
            }
        }else if(rightCollision){ // If collision is on right side, when turn piece counter-clockwise
            //Pushed piece LEFT and checks for collision
            kickedPieceLeft.forEach((piece) => {
                if(collisionDetection(null, piece, "Collision")){
                    breakFlag = true;
                }
            });

            //If NOT colliding, returls the LEFT PUSHED piece
            if(!breakFlag){
                return kickedPieceLeft;
            }else{
                return false;
            }
        }
    }
}