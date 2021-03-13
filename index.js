const game = {
  draw () {
    canvas.clear()
    background.draw()
    stateMachine.draw()
    ground.draw()
    flowers.draw()
  },

  update (dt) {
    background.update(dt)
    ground.update(dt)
    flowers.update(dt)
    stateMachine.update(dt)
  },

  async init () {
    canvas.init()
    bird.init()
    controls.init()
    graphics.displayLoadingMessage()
    await images.load()
  },

  registerStates () {
    stateMachine.register('play', playState)
    stateMachine.register('title', titleState)
  },

  async main () {
    await game.init()
    game.registerStates()
    stateMachine.change('title')

    loop.start(dt => {
      game.update(dt),
      game.draw()
    })

  }
}
