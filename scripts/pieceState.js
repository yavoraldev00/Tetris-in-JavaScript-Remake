const pieceState = {
    curTetronimo: null,
    heldTetronimo: null,
    nextTetronimo: null,
    coordinates: [],
    ghostCoordinates: [],
    lines: 0,
    level: 1,
    score: 0,
    rotation: 0,
    held: false,
    lineClearAnimation: false,
    gameActive: false,

    reset() {
        this.curTetronimo = null;
        this.heldTetronimo = null;
        this.nextTetronimo = null;
        this.coordinates = [];
        this.ghostCoordinates = [];
        this.lines = 0;
        this.level = 1;
        this.score = 0;
        this.rotation = 0;
        this.held = false;
        this.lineClearAnimation = false;
        this.gameActive = false;

        debugger;
    },

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

    get currentLines() {
        return this.lines
    },

    set currentLines(item) {
        this.lines = item
    },

    get currentLevel() {
        return this.level
    },

    set currentLevel(item) {
        this.level = item
    },

    get currentScore() {
        return this.score
    },

    set currentScore(item) {
        this.score = item
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
    },

    get currentHeld() {
        return this.held
    },

    set currentHeld(item) {
        this.held = item
    },

    get currentLineClearAnimation() {
        return this.lineClearAnimation
    },

    set currentLineClearAnimation(item) {
        this.lineClearAnimation = item
    },

    get currentGameActive() {
        return this.gameActive
    },

    set currentGameActive(item) {
        this.gameActive = item
    }
}