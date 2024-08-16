// Function used to rotate pieces RIGHT and LEFT
const rotatePiece = (rotationDirection) => {
    var breakFlag = false;

    if(rotationDirection == "x"){ // Rotates piece RIGHT by ADDING current rotation values, updates current rotation + 1
        // Rotates right
        const rotatedPiece = pieceState.currentCoordinates.map((piece, index) => {
            if(collisionDetection(piece, piece + pieceState.currentPiece["rotations"][pieceState.currentRotation][index], rotationDirection)){
                breakFlag = true;
            }
            return piece += pieceState.currentPiece["rotations"][pieceState.currentRotation][index];
        })

        if(breakFlag){ // if collision is detected, stops function
            return
        }

        // Sets original piece to rotation piece
        pieceState.currentCoordinates = rotatedPiece;
    
        // Updates current rotation
        (pieceState.currentRotation == 3) ? pieceState.currentRotation = 0 : pieceState.currentRotation += 1;

    }else if(rotationDirection == "z"){ // Rotates piece LEFT by SUBTRACTING current rotation values, updates current rotation - 1
        // Updates current rotation
        (pieceState.currentRotation == 0) ? pieceState.currentRotation = 3 : pieceState.currentRotation -= 1;

        // do rotation
        const rotatedPiece = pieceState.currentCoordinates.map((piece, index) => {
            if(collisionDetection(piece, piece + (pieceState.currentPiece["rotations"][pieceState.currentRotation][index] *-1), rotationDirection)){
                breakFlag = true;
            }
            return piece += (pieceState.currentPiece["rotations"][pieceState.currentRotation][index] *-1);
        })

        if(breakFlag){ // if collision is detected, stops function
            (pieceState.currentRotation == 3) ? pieceState.currentRotation = 0 : pieceState.currentRotation += 1;
            return
        }

        // Sets original piece to rotation piece
        pieceState.currentCoordinates = rotatedPiece;
    }

    // Removes piece
    removePiece();
    
    // Sets piece
    placePiece(pieceState.currentCoordinates);
};

// Function used to move piece LEFT and RIGHT
const movePiece = (movementDirection) => {
    var breakFlag = false;

    if(movementDirection == "ArrowRight"){ // Moves piece +1 to right
        // Moves RIGHT
        const movedPiece = pieceState.currentCoordinates.map((piece) => {
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
        pieceState.currentCoordinates = movedPiece;
    }else if(movementDirection == "ArrowLeft"){ // Moves piece -1 to left
        // Moves LEFT
        const movedPiece = pieceState.currentCoordinates.map((piece) => {
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
        pieceState.currentCoordinates = movedPiece;
    }else if(movementDirection == "ArrowDown"){ // Moves piece +10 down
        // Moves DOWN
        const movedPiece = pieceState.currentCoordinates.map((piece) => {
            if(collisionDetection(piece, piece+10, movementDirection)){
                breakFlag = true;
            }else{
                return piece += 10
            }
        })

        if(breakFlag){ // If collision is detected, places piece on the board and generates new one
            // Sets the piece on the board
            setPiece();

            // Generates and places a new piece on the board
            setNewPiece(pieceState.nextPiece);
            return
        }

        // Sets original piece to moved piece
        pieceState.currentCoordinates = movedPiece;
    }else if(movementDirection == "ArrowUp"){ // Moves piece to bottom of board/closest colliding piece and generates new piece
        let distance = [0,0,0,0]
        
        pieceState.currentCoordinates.forEach((piece, index) => {
            while(!collisionDetection(piece, piece+10, movementDirection)){
                distance[index] += 1;
                piece += 10;
            }
        });

        let travelDistance = Math.min(...distance);

        const movedPiece = pieceState.currentCoordinates.map((piece) => {
            return piece += (travelDistance*10)
        })

        // Sets original piece to moved piece
        pieceState.currentCoordinates = movedPiece;

        // Removes piece
        removePiece();
        
        // Sets piece
        placePiece(pieceState.currentCoordinates);

        // Sets the piece on the board
        setPiece();

        // Generates and places a new piece on the board
        setNewPiece(pieceState.nextPiece);
        return
    }

    // Removes piece
    removePiece();
    
    // Sets piece
    placePiece(pieceState.currentCoordinates);
}