const finishCollisionState = {
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
    finishCollisionState.time = 0
    finishCollisionState.explosion = new Explosion()
    audio.play('explosion')
  },

  draw () {
    background.draw()
    towers.draw()
    nest.draw()
    ground.draw()
    flowers.draw()
    finishCollisionState.explosion.draw()

  },

  update (dt) {
    finishCollisionState.explosion.update(dt)

    finishCollisionState.time += dt / 1000

    if (finishCollisionState.time > 5) {
      stateMachine.change('finish-retry')
    }
  }
}
