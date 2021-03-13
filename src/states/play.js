const playState = {
  ...state,

  draw () {
    towers.draw()
    bird.draw()
  },

  update (dt) {
    bird.update(dt)
    towers.update(dt)
  }
}
