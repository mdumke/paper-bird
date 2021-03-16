const finishRetryState = {
  ...state,

  time: 0,
  changeState: false,

  enter () {
    finishRetryState.time = 0
    finishRetryState.changeState = false
    audio.play('gameOver')
  },

  draw () {
    background.draw()
    towers.draw()
    ground.draw()
    flowers.draw()
    nest.draw()

    canvas.drawText('Game Over', 200, 160, 40)
    canvas.drawText(`Score: ${playState.score || 0} points`, 200, 210, 24)

    if (finishRetryState.time > 7) {
      canvas.drawText('Press SPACE to try again', 200, 400, 24)
    }
  },

  update (dt) {
    finishRetryState.time += dt / 1000

    if (finishRetryState.time > 7 && controls.spaceBarPressed) {
      finishRetryState.changeState = true
    }

    if (finishRetryState.changeState && !controls.spaceBarPressed) {
      stateMachine.change('title')
    }
  }
}
