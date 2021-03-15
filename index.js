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
    graphics.displayLoadingMessage()
    await images.load()
  },

  registerStates () {
    stateMachine.register('play', playState)
    stateMachine.register('title', titleState)
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
    audio.play('ambience')
    stateMachine.change('title')

    loop.start(dt => {
      game.update(dt),
      game.draw()
    })
  }
}
