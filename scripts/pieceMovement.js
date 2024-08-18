// Function used to rotate pieces RIGHT and LEFT
const rotatePiece = (rotationDirection) => {
    var breakFlag = false;

    // Sound effect
    rotateSound.load();
    rotateSound.play();

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
        // Sound effect
        moveSound.load();
        moveSound.play();
        
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
        // Sound effect
        moveSound.load();
        moveSound.play();
        
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
        // Sound effect
        softDropSound.load();
        softDropSound.play();

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

            // If there is no line clears / animation going, places a new piece on the board
            if(pieceState.currentLineClearAnimation == false){
                // Generates and places a new piece on the board
                setNewPiece(pieceState.nextPiece);
            }
            
            return
        }

        // Sets original piece to moved piece
        pieceState.currentCoordinates = movedPiece;
    }else if(movementDirection == "ArrowUp"){// Moves piece to bottom of board/closest colliding piece and generates new piece
        // Sound effect
        hardDropSound.load();
        hardDropSound.play();
        
        // Sets original piece to moved piece
        pieceState.currentCoordinates = hardDropDistance();

        // Removes piece
        removePiece();
        
        // Sets piece
        placePiece(pieceState.currentCoordinates);

        // Sets the piece on the board
        setPiece();

        // If there is no line clears / animation going, places a new piece on the board
        if(pieceState.currentLineClearAnimation == false){
            // Generates and places a new piece on the board
            setNewPiece(pieceState.nextPiece);
        }

        return
    }

    // Removes piece
    removePiece();
    
    // Sets piece
    placePiece(pieceState.currentCoordinates);
}

// Function that returns a piece for a hard drop / ghost piece location
const hardDropDistance = () => {
    // Base numbers needed for each piece to move until they encouter another piece
    let distance = [0,0,0,0]

    // Adds +1 to a value, until the meet another piece / bottom of the board
    pieceState.currentCoordinates.forEach((piece, index) => {
        while(!collisionDetection(piece, piece+10, "ArrowUp")){
            distance[index] += 1;
            piece += 10;
        }
    });

    // Calculates which piece has the minimum distance
    const travelDistance = Math.min(...distance);

    // Returns an update location, where the tetronimo touches a piece at the bottom
    const movedPiece = pieceState.currentCoordinates.map((piece) => {
        return piece += (travelDistance*10)
    })

    return movedPiece;
}

// Updates the ghost piece location
const moveGhostPiece = () => {
    pieceState.ghostCoordinates = hardDropDistance();

    // Updates the ghost piece on the board
    setGhostPiece();
}