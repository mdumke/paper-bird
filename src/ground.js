const ground = {
  offsetX: 0,
  loopingPoint: 1331,

  update (dt) {
    ground.offsetX = (ground.offsetX - config.ground.speed * dt)
      % ground.loopingPoint
  },

  draw () {
    canvas.drawImage(
      images.ground,
      ground.offsetX,
      canvas.height - config.ground.height + 2,
      images.ground.width,
      config.ground.height)
  },

  init () {
    ground.offsetX = 0
  }
}
