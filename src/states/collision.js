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
    towers.draw()
    collisionState.explosion.draw()

  },

  update (dt) {
    towers.update(dt, false)
    bird.update(dt, true)
    collisionState.explosion.update(dt)

    collisionState.time += dt / 1000

    if (collisionState.time > 5) {
      stateMachine.change('retry')
    }
  }
}
