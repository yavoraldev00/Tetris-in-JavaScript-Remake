const pieceState = {
    curTetronimo: null,
    heldTetronimo: null,
    nextTetronimo: null,
    coordinates: [],
    ghostCoordinates: [],
    rotation: 0,

    get currentPiece() {
        return this.curTetronimo
    },

    set currentPiece(item) {
        this.curTetronimo = item
    },

    get heldPiece() {
        return this.heldTetronimo
    },

    set heldPiece(item) {
        this.heldTetronimo = item
    },

    get nextPiece() {
        return this.nextTetronimo
    },

    set nextPiece(item) {
        this.nextTetronimo = item
    },

    get currentCoordinates() {
        return this.coordinates
    },

    set currentCoordinates(item) {
        this.coordinates = item
    },

    get currentRotation() {
        return this.rotation
    },

    set currentRotation(item) {
        this.rotation = item
    },

    get currentGhostCoordinates() {
        return this.ghostCoordinates
    },

    set currentGhostCoordinates(item) {
        this.ghostCoordinates = item
    }   
}