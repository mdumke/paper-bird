const winState = {
  ...state,

  time: 0,

  enter () {
    audio.play('ending')
    winState.time = 0
  },

  draw () {
    background.draw()
    bird.draw()
    towers.draw()
    nest.draw()
    ground.draw()
    flowers.draw()

    canvas.drawText('Welcome Home', 200, 160, 40)

    if (winState.time) {
      canvas.drawText('You are an awesome bird!', 200, 210, 24)
    }

    if (winState.time > 13 && winState.time < 17.5) {
      canvas.drawText('There is nothing more to say really...', 200, 400, 24)
    }

    if (winState.time > 18 && winState.time < 21) {
      canvas.drawText('You did great!', 200, 400, 24)
    }

    if (winState.time > 22) {
      canvas.drawText('Press SPACE to play again.', 200, 400, 24)
    }
  },

  update (dt) {
    winState.time += dt / 1000

    if (winState.time > 18 && controls.spaceBarPressed) {
      stateMachine.change('title')
    }
  }
}
