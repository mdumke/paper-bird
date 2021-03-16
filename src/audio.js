const audio = {
  soundOn: true,

  init () {
    audio.sounds.music.loop = true
  },

  play (name, volume = 1) {
    if (!audio.sounds[name]) {
      return console.log(`${name} not found`)
    }

    if (audio.soundOn) {
      const sound = audio.sounds[name]
      sound.currentTime = 0
      sound.volume = volume
      sound.play()
    }
  },

  pause (name) {
    audio.sounds[name].pause()
  },

  sounds: {
    ambience: document.querySelector('#ambience'),
    music: document.querySelector('#music'),
    flap: document.querySelector('#flap'),
    gameOver: document.querySelector('#game-over'),
    explosion: document.querySelector('#explosion'),
    ending: document.querySelector('#ending'),
    pling: document.querySelector('#pling')
  }
}
