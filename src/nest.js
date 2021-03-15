const nest = {
  x: null,
  y: null,

  draw () {
    canvas.ctx.drawImage(images.nest, nest.x, nest.y)
  },

  update (dt) {
    nest.x -= config.ground.speed * dt
  },

  reset () {
    nest.x = canvas.width
    nest.y = config.nest.y
  },

  geometry () {
    return {
      x: nest.x + 8,
      y: nest.y + 35,
      width: 180,
      height: 60
    }
  }
}
