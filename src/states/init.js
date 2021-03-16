const initState = {
  ...state,

  draw () {
    background.draw()
    ground.draw()
    flowers.draw()
    graphics.displayPlayIcon()
  },

  update (dt) {
    if (controls.mouseDown || controls.spaceBarPressed) {
      stateMachine.change('title')
    }
  }
}
