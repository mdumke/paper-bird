const game = {
  draw () {
    canvas.clear()
    background.draw()
    towers.draw()
    bird.draw()
    ground.draw()
    flowers.draw()
  },

  update (dt) {
    background.update(dt)
    bird.update(dt)
    ground.update(dt)
    flowers.update(dt)
    towers.update(dt)
  },

  async init () {
    canvas.init()
    bird.init()
    controls.init()
    graphics.displayLoadingMessage()
    await images.load()
  },

  async main () {
    await game.init()

    loop.start(dt => {
      game.update(dt),
      game.draw()
    })
  }
}
