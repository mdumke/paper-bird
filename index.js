const game = {
  draw () {
    canvas.clear()
    stateMachine.draw()
  },

  update (dt) {
    stateMachine.update(dt)
  },

  async init () {
    canvas.init()
    bird.init()
    controls.init()
    audio.init()
    await images.load()
  },

  registerStates () {
    stateMachine.register('init', initState)
    stateMachine.register('title', titleState)
    stateMachine.register('play', playState)
    stateMachine.register('collision', collisionState)
    stateMachine.register('retry', retryState)
    stateMachine.register('finish', finishState)
    stateMachine.register('finish-collision', finishCollisionState)
    stateMachine.register('finish-retry', finishRetryState)
    stateMachine.register('win', winState)
  },

  async main () {
    await game.init()
    game.registerStates()
    stateMachine.change('init')

    loop.start(dt => {
      game.update(dt),
      game.draw()
    })
  }
}
