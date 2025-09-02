// Sound effects

const hardDropSound = new Audio("resources/se_game_harddrop.wav");
hardDropSound.load();

const moveSound = new Audio("resources/se_game_move.wav");
moveSound.load();

const rotateSound = new Audio("resources/se_game_rotate.wav");
rotateSound.load();

const softDropSound = new Audio("resources/se_game_softdrop.wav");
softDropSound.load();

const clearSingle = new Audio("resources/se_game_single.wav");
clearSingle.load();

const clearDouble = new Audio("resources/se_game_double.wav");
clearDouble.load();

const clearTriple = new Audio("resources/se_game_triple.wav");
clearTriple.load();

const clearTetris = new Audio("resources/se_game_tetris.wav");
clearTetris.load();

const gameOver = new Audio("resources/game_over.mp3");
gameOver.load();

const Victory = new Audio("resources/victory.mp3");
Victory.load();

const pauseSound = new Audio("resources/pause.wav");
pauseSound.load();

const scoreSound = new Audio("resources/score.mp3");
scoreSound.load();

const levelUp = new Audio("resources/level_up.wav");
levelUp.load();

// Level music
const level_1 = new Audio("resources/level_1_8.mp3");
level_1.load();

const level_3 = new Audio("resources/level_3_7.mp3");
level_3.load();

const level_4 = new Audio("resources/level_4.mp3");
level_4.load();

const level_7 = level_3;

const level_8 = level_1;

const level_10 = new Audio("resources/level_10.mp3");
level_10.load();

const level_11 = new Audio("resources/level_11.mp3");
level_11.load();

const level_12 = new Audio("resources/level_12.mp3");
level_12.load();

const level_13 = new Audio("resources/level_13.mp3");
level_13.load();

const level_14 = new Audio("resources/level_14.mp3");
level_14.load();

const level_15 = new Audio("resources/level_15.mp3");
level_15.load();

const level_16 = new Audio("resources/level_16.mp3");
level_16.load();

const level_20 = new Audio("resources/level_20.mp3");
level_20.load();

// Variable holding the current level music
var current_level = level_1;

/* Functions */

// Changes the music volume
const setMusicVolume = (volume_level) => {
    if(typeof(volume_level) == "object"){
        volume_level = volume_level.textContent;
    }

    current_level.volume = volume_level / 10;

    r.style.setProperty("--Volume",`${volume_level}`);
}

// Changes the currently playing video
const changeVideo = (level) => {
    current_video.classList.add("hidden");
    current_video.pause();

    current_video = document.getElementById(`level_${level}_vid`);
    current_video.classList.remove("hidden");
    current_video.play();
}


// Changes the currently playing level theme
const changeMusic = (level) => {
    // Pauses the current level theme
    current_level.pause();

    // Changes the currently playing level theme
    switch(true){
        case level == 1: current_level = level_1; break;
        case level == 2: current_level = level_1; break;
        case level == 3: current_level = level_3; break;
        case level == 4: current_level = level_4; break;
        case level == 7: current_level = level_7; break;
        case level == 8: current_level = level_8; break;
        case level == 10: current_level = level_10; break;
        case level == 11: current_level = level_11; break;
        case level == 12: current_level = level_12; break;
        case level == 13: current_level = level_13; break;
        case level == 14: current_level = level_14; break;
        case level == 15: current_level = level_15; break;
        case level == 16: current_level = level_16; break;
        case level == 20: current_level = level_20; break;
        default: break;
    }

    // Sets the level theme to loop and start at the beginning
    current_level.loop = true;
    current_level.currentTime = 0;

    // Updates the volume to match the user selected one
    setMusicVolume(getComputedStyle(r).getPropertyValue("--Volume"));

    // Starts song after 1 second delay
    setTimeout(() => {
        current_level.play();
    }, 1000);
}