const gameState = {
    curTetronimo: "",
    heldTetronimo: null,
    nextTetronimo: null,
    coordinates: [],

    get currentPiece() {
        return this.curTetronimo
    },

    set currentPiece(item) {
        this.curTetronimo = item
    }
}