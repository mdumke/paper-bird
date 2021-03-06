const collisionState = {
  ...state,

  time: 0,

  animation: [
    () => {
      towers.draw()
      explosion.draw(1)
    },

    () => {
      towers.draw()
      explosion.draw(2)
      bird.draw()
    },

    () => {
      towers.draw()
      explosion.draw(3)
    }
  ],

  enter () {
    collisionState.time = 0
    collisionState.explosion = new Explosion()
    audio.play('explosion')
  },

  draw () {
    background.draw()
    towers.draw()
    ground.draw()
    flowers.draw()
    collisionState.explosion.draw()

  },

  update (dt) {
    background.update(dt, false)
    ground.update(dt)
    flowers.update(dt)
    towers.update(dt, false)
    bird.update(dt, false, -1)
    collisionState.explosion.update(dt)

    collisionState.time += dt / 1000

    if (collisionState.time > 5) {
      stateMachine.change('retry')
    }
  }
}
