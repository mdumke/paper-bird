const background = {
  offset: 0,
  loopingPoint: 2846,

  update (dt) {
    background.offset = (background.offset - config.background.speed * dt)
      % background.loopingPoint
  },

  draw () {
    canvas.drawImage(
      images.background,
      background.offset,
      canvas.height - config.background.height,
      images.background.width,
      config.background.height)
  },

  init () {
    background.offset = 0
  }
}
