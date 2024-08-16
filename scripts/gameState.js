const pieceState = {
    curTetronimo: null,
    heldTetronimo: null,
    nextTetronimo: null,
    coordinates: [],

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
        return this.heldTetronimo
    },

    set nextPiece(item) {
        this.nextTetronimo = item
    },

    get curCord() {
        return this.coordinates
    },

    set curCord(item) {
        this.coordinates = item
    }   
}