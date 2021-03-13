const collisionState = {
  ...state,

  time: 0,

  enter () {
    collisionState.time = 0
  },

  draw () {
    towers.draw()
    bird.draw()

    canvas.drawText(
      'POW!', 250, 200, '#444', 40, 'monospace')

    canvas.drawText(
      'Press SPACE to try again', 250, 250, '#444', 24, 'monospace')
  },

  update (dt) {
    collisionState.time += dt / 1000

    if (collisionState.time > 2 && controls.spaceBarPressed) {
      stateMachine.change('play')
    }
  }
}
