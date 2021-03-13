const collisionState = {
  ...state,

  draw () {
    towers.draw()
    bird.draw()

    canvas.drawText(
      'POW!', 250, 200, '#444', 40, 'monospace')

    canvas.drawText(
      'Press SPACE to try again', 250, 250, '#444', 24, 'monospace')
  },

  update (dt) {
    towers.update(dt)

    if (controls.spaceBarPressed) {
      stateMachine.change('play')
    }
  }
}
