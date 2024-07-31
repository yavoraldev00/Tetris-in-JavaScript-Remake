// Function used to rotate pieces RIGHT and LEFT
const rotatePiece = (rotationDirection) => {
    var breakFlag = false;

    if(rotationDirection == "x"){ // Rotates piece RIGHT by ADDING current rotation values, updates current rotation + 1
        // Rotates right
        const rotatedPiece = chosenPiece.map((piece, index) => {
            if(collisionDetection(piece, piece + tetrisPieces['i_shape']['rotations'][curRotation][index], rotationDirection)){
                breakFlag = true;
            }
            return piece += tetrisPieces['i_shape']['rotations'][curRotation][index];
        })

        if(breakFlag){ // if collision is detected, stops function
            return
        }

        // Sets original piece to rotation piece
        chosenPiece = rotatedPiece;
    
        // Updates current rotation
        (curRotation == 3) ? curRotation = 0 : curRotation += 1;

    }else if(rotationDirection == "z"){ // Rotates piece LEFT by SUBTRACTING current rotation values, updates current rotation - 1
        // Updates current rotation
        (curRotation == 0) ? curRotation = 3 : curRotation -= 1;

        // do rotation
        const rotatedPiece = chosenPiece.map((piece, index) => {
            if(collisionDetection(piece, piece + (tetrisPieces['i_shape']['rotations'][curRotation][index] *-1), rotationDirection)){
                breakFlag = true;
            }
            return piece += (tetrisPieces['i_shape']['rotations'][curRotation][index] *-1);
        })

        if(breakFlag){ // if collision is detected, stops function
            (curRotation == 3) ? curRotation = 0 : curRotation += 1;
            return
        }

        // Sets original piece to rotation piece
        chosenPiece = rotatedPiece;
    }

    // Removes piece
    removePiece();
    
    // Sets piece
    placePiece(chosenPiece);
};

// Function used to move piece LEFT and RIGHT
const movePiece = (movementDirection) => {
    var breakFlag = false;

    if(movementDirection == "ArrowRight"){ // Moves piece +1 to right
        // Moves RIGHT
        const movedPiece = chosenPiece.map((piece) => {
            if(collisionDetection(piece, piece+1, movementDirection)){
                breakFlag = true;
            }else{
                return piece += 1
            }
        })

        if(breakFlag){ // if collision is detected, stops function
            return
        }

        // Sets original piece to moved piece
        chosenPiece = movedPiece;
    }else if(movementDirection == "ArrowLeft"){ // Moves piece -1 to left
        // Moves LEFT
        const movedPiece = chosenPiece.map((piece) => {
            if(collisionDetection(piece, piece-1, movementDirection)){
                breakFlag = true;
            }else{
                return piece -= 1
            }
        })

        if(breakFlag){ // if collision is detected, stops function
            return
        }

        // Sets original piece to moved piece
        chosenPiece = movedPiece;
    }else if(movementDirection == "ArrowDown"){ // Moves piece +10 down
        // Moves DOWN
        const movedPiece = chosenPiece.map((piece) => {
            if(collisionDetection(piece, piece+10, movementDirection)){
                breakFlag = true;
            }else{
                return piece += 10
            }
        })

        if(breakFlag){ // if collision is detected, stops function
            // SET PIECE ON BOARD
            debugger;
            return
        }

        // Sets original piece to moved piece
        chosenPiece = movedPiece;
    }

    // Removes piece
    removePiece();
    
    // Sets piece
    placePiece(chosenPiece);
}