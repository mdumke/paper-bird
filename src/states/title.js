const titleState = {
  ...state,

  draw () {
    canvas.drawText(
      'Paper Bird. Press Space to Play. Press Space to Fly.',
      170, 200, '#444', 24, 'monospace')
  },

  update (dt) {
    if (controls.spaceBarPressed) {
      stateMachine.change('play')
    }
  }
}
