const titleState = {
  ...state,

  time: 0,

  enter () {
    audio.play('ambience')
    audio.play('pling')
    controls.spaceBarPressed = false
    graphics.hideCursor()
    titleState.time = 0
  },

  draw () {
    background.draw()
    ground.draw()
    flowers.draw()
    canvas.drawText('Paper Bird', 200, 160, 40)

    if (titleState.time > 2) {
      canvas.drawText(`Press SPACE to fly`, 200, 210, 24)
    }
  },

  update (dt) {
    background.update(dt)
    ground.update(dt)
    flowers.update(dt)

    titleState.time += dt / 1000

    if (controls.spaceBarPressed) {
      stateMachine.change('play')
    }
  },

  exit () {
    audio.pause('ambience')
  }
}
