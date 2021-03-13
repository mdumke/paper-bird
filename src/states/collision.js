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
  },

  draw () {
    towers.draw()
    collisionState.explosion.draw()

    if (collisionState.time > 2) {
      canvas.drawText(
        'Press SPACE to try again', 250, 250, '#444', 24, 'monospace')
    }
  },

  update (dt) {
    towers.update(dt)
    bird.update(dt, true)
    collisionState.explosion.update(dt)

    collisionState.time += dt / 1000

    if (collisionState.time > 1 && controls.spaceBarPressed) {
      stateMachine.change('play')
    }
  }
}
