const initState = {
  ...state,

  draw () {
    background.draw()
    ground.draw()
    flowers.draw()
    graphics.displayPlayIcon()
    canvas.drawText('Paper Bird', 200, 160, 40)
  },

  update (dt) {
    if (controls.mouseDown || controls.spaceBarPressed) {
      stateMachine.change('title')
    }
  }
}
