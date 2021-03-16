const titleState = {
  ...state,

  enter () {
    audio.sounds.ambience.loop = false
  },

  draw () {
    background.draw()
    ground.draw()
    flowers.draw()
    canvas.drawText('Paper Bird', 200, 160, 40)
    canvas.drawText(`Press SPACE to play`, 200, 240, 24)
    canvas.drawText(`Press SPACE to fly`, 200, 278, 24)
  },

  update (dt) {
    background.update(dt)
    ground.update(dt)
    flowers.update(dt)

    if (controls.spaceBarPressed) {
      stateMachine.change('play')
    }
  }
}
