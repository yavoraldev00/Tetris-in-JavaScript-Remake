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
        default: break;
    }
}

const checkWallKick = (curPieceLocation, rotationDirection) => {
    // Tetris piece if it was moved one to the left
    const kickedPieceLeft = curPieceLocation.map((piece)=>{
        return piece -= 1;
    })

    // Tetris piece if it was moved one to the right
    const kickedPieceRight = curPieceLocation.map((piece)=>{
        return piece -= 1;
    })

    // Flag used for collision checks
    let breakFlag = false;

    if(rotationDirection == "x"){ // If rotating RIGHT
        //Pushed piece LEFT and checks for collision
        curPieceLocation.forEach((piece, index) => {
            if(collisionDetection(piece, kickedPieceLeft[index], "ArrowLeft")){
                breakFlag = true;
            }
        });

        if(breakFlag){ // If still coliding, pushes piece RIGHT and checks for collision
            // Resets breakFlag for next check
            breakFlag = false;

            curPieceLocation.forEach((piece, index) => {
                if(collisionDetection(piece, kickedPieceRight[index], "ArrowRight")){
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
        //If breakFlag doesn't get triggered, returns the LEFT PUSHED piece
        return kickedPieceLeft;
        
    }else if(rotationDirection == "z"){ // If rotating LEFT
        //Pushed piece RIGHT and checks for collision
        curPieceLocation.forEach((piece, index) => {
            if(collisionDetection(piece, kickedPieceRight[index], "ArrowRight")){
                breakFlag = true;
            }
        });

        if(breakFlag){ // If still coliding, pushes piece LEFT and checks for collision
            // Resets breakFlag for next check
            breakFlag = false;

            curPieceLocation.forEach((piece, index) => {
                if(collisionDetection(piece, kickedPieceLeft[index], "ArrowLeft")){
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

        //If breakFlag doesn't get triggered, returns the LEFT PUSHED piece
        return kickedPieceRight;
    }
}