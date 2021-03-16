const winState = {
  ...state,

  time: 0,
  changeState: false,

  enter () {
    audio.play('ending')
    audio.sounds.ambience.loop = false
    winState.time = 0
    winState.changeState = false
  },

  draw () {
    background.draw()
    bird.draw()
    towers.draw()
    nest.draw()
    ground.draw()
    flowers.draw()

    canvas.drawText('Welcome Home', 200, 160, 40)
    canvas.drawText('You are an awesome bird!', 200, 240, 24)

    if (winState.time > 15) {
      canvas.drawText('There is nothing more to say really...', 200, 310, 24)
    }

    if (winState.time > 18) {
      canvas.drawText('You did great!', 200, 350, 24)
    }

    if (winState.time > 25) {
      canvas.drawText('Press SPACE to play again.', 200, 440, 24)
    }
  },

  update (dt) {
    winState.time += dt / 1000

    if (winState.time > 18 && controls.spaceBarPressed) {
      winState.changeState = true
    }

    if (winState.changeState && !controls.spaceBarPressed) {
      stateMachine.change('title')
    }
  }
}
