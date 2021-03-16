const retryState = {
  ...state,

  time: 0,

  enter () {
    retryState.time = 0
    audio.play('gameOver', 0.5)
  },

  draw () {
    background.draw()
    towers.draw()
    ground.draw()
    flowers.draw()

    canvas.drawText('Game Over', 200, 160, 40)
    canvas.drawText(
      `Score: ${playState.score || 0} point${playState.score == 1 ? '' : 's'}`,
      200, 200, 24)

    if (retryState.time > 7) {
      canvas.drawText('Press SPACE to try again', 200, 340, 24)
    }
  },

  update (dt) {
    background.update(dt)
    ground.update(dt)
    flowers.update(dt)
    towers.update(dt, false)

    retryState.time += dt / 1000

    if (retryState.time > 7 && controls.spaceBarPressed) {
      stateMachine.change('play')
    }
  }
}
