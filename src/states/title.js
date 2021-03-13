const titleState = {
  ...state,

  draw () {
    canvas.drawText(
      'WIP: Paper Bird. Press SPACE to Play. Press SPACE to Fly.',
      130, 200, '#444', 24, 'monospace')
  },

  update (dt) {
    if (controls.spaceBarPressed) {
      stateMachine.change('play')
    }
  }
}
