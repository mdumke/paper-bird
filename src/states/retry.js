const retryState = {
  ...state,

  time: 0,

  enter () {
    retryState.time = 0
    audio.play('ambience')
    audio.play('gameOver')
  },

  draw () {
    towers.draw()

    canvas.drawText('Game Over', 250, 160, '#444', 40, 'monospace')
    canvas.drawText(`Score: ${playState.score} points`, 250, 200, '#444', 24, 'monospace')

    if (retryState.time > 7) {
      canvas.drawText('Press SPACE to try again', 250, 340, '#444', 24, 'monospace')
    }
  },

  update (dt) {
    towers.update(dt, false)

    retryState.time += dt / 1000

    if (retryState.time > 7 && controls.spaceBarPressed) {
      stateMachine.change('play')
    }
  },

  exit () {
    audio.pause('ambience')
  }
}
