// Variable containing HTML element for level up message
const level_up_container = document.getElementById("level-up-message");

// Array containing heights of each row, used to set and adjust Tetris clear message
const rowCoordinates = Array.from(board.querySelectorAll('.row')).map(row => {
  return row.getBoundingClientRect().top;
});

// Puts the Tetris clear message next to cleared Tetris row
const updateTetrisClearMessage = (cleared_row) =>{ // Variable passed on for the heighest row cleared from Tetris
    // Variable holding the HTML element
    const tetrisClearMessage = document.getElementById("tetris-clear-message");
    
    // Adjusts the position
    tetrisClearMessage.style.left = `${board.querySelector("div").getBoundingClientRect()['right'] + 12}px`;
    tetrisClearMessage.style.top = `${rowCoordinates[cleared_row] - 10}px`;

    // Removes the "hidden" class, displaying the message
    tetrisClearMessage.classList.remove("hidden");

    // Removes the message after it's finished playing the animation
    setTimeout(() => {
       tetrisClearMessage.classList.add("hidden"); 
    }, 1250);
}

// Plays an animation on the background sprite when lines are cleared
const playSpriteClearAnimation = (clearedLines) => {
  if(pieceState.currentSpriteContainerAnimation == false){
      // Sets animation variable to playing
      pieceState.currentSpriteContainerAnimation = true;

      var spinFactor;
      var scaleFactor;

      switch(clearedLines){
          case 1:
              spinFactor = 1;
              scaleFactor = 1;
              break;
          case 2:
          case 3:
              spinFactor = 2;
              scaleFactor = 1.2;
              break;
          case 4:
              spinFactor = 15;
              scaleFactor = 1.5;
              break;
          default:
              spinFactor = 0;
              scaleFactor = 1;
              break;
      }

      // Picks a random rotation to do
      const pickedRotation = spriteContainerRotations[Math.floor(Math.random() * spriteContainerRotations.length)];

      // Sets CSS variable values
      r.style.setProperty("--X",`${pickedRotation[0]*spinFactor}deg`);
      r.style.setProperty("--X-mid",`${pickedRotation[0]*spinFactor / 2}deg`);
      r.style.setProperty("--Y",`${pickedRotation[1]*spinFactor}deg`);
      r.style.setProperty("--Y-mid",`${pickedRotation[1]*spinFactor / 2}deg`);
      r.style.setProperty("--Z",`${pickedRotation[2]*spinFactor}deg`);
      r.style.setProperty("--Z-mid",`${pickedRotation[2]*spinFactor / 2}deg`);
      r.style.setProperty("--Duration","1500ms");
      r.style.setProperty("--Scale",`${scaleFactor}`);

      // Adds class to container that plays an animation
      spriteContainer.classList.add("animate-container");

      setTimeout(() => {
          // Removes the class from the container, after animation finsihes, so a new one can be played
          document.getElementById("sprite-container").classList.remove("animate-container");

          // Sets animation variable to NOT playing
          pieceState.currentSpriteContainerAnimation = false;
      }, 1250);
  }
}

// Updates the text for lines, level, score, changes the currently playing video, music and grahpics
const updateLevelTextAndMusic = (currentLevel) => {
  // Changes level sprite
  updateLevelSprite(currentLevel);

  // Replaces gameplay video with new level video
  if([1, 3, 4, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].includes(currentLevel)){ // Array with levels containing new video
    updateVideo(pieceState.currentLevel);
  }

  // Changes game music
  if([1, 3, 4, 7, 8, 10, 11, 12, 13, 14, 15, 16, 20].includes(currentLevel)){ // Array with levels containing new music
    changeMusic(pieceState.currentLevel);
  }

  // Updates the piece falling speed
  if([4, 7, 10, 13, 16, 19].includes(currentLevel)){ // Array with levels where fall speed increases
    updateMovementSpeed(currentLevel);
  }
}

// Updates the background video
const updateVideo = (currentLevel) => {
  current_video.classList.add("hide-video")

  setTimeout(() => {
      current_video.classList.add("hidden");
      current_video.pause();

      current_video = document.getElementById(`level_${currentLevel}_vid`);
      current_video.classList.remove("hidden");
      current_video.play();
  }, 500);
}

// Updates the sprite image
const updateLevelSprite = (currentLevel) => {
  sprite_image.src = `resources/level_${currentLevel}_sprite.png`;
}

// Plays level up animation
const playLevelUpAnimation = () => {
  level_up_container.classList.remove("hidden");
  levelUp.currentTime = 0;
  levelUp.play();

  setTimeout(() => {
    level_up_container.classList.add("hidden");
  }, 2000);
}

// Game victory animations
const playVictoryAnimations = () => {
  // Shows Congratulations message and palys victory fanfare
  document.getElementById("congratulations-message").classList.remove("hidden");
  Victory_intro.currentTime = 0;
  Victory_intro.play();

  // Plays the record animation and victory music after delay
  setTimeout(() => {
    document.getElementById("congratulations-message").classList.add("hidden");
    document.getElementById("score-message").classList.remove("hidden");

    // Sets the record score in records message
    document.getElementById("victory-score").textContent = pieceState.score;

    // Add score sound effect
    levelUp.currentTime = 0;
    levelUp.play();

    // Shows the restart music after a short delay
    setTimeout(() => {
      Victory.currentTime = 0;
      Victory.play();

      document.getElementById("victory").classList.remove("hidden");
    }, 2500);
  }, 5000);
}