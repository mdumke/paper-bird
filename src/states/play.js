const playState = {
  ...state,

  score: null,

  enter () {
    playState.score = 0
    bird.reset()
    towers.reset()
  },

  draw () {
    towers.draw()
    bird.draw()
    graphics.displayScore(playState.score)
  },

  update (dt) {
    towers.update(dt)
    bird.update(dt)
    playState.checkCollisions()
    playState.updateScore()
  },

  checkCollisions () {
    for (let t of towers.instances) {
      if (bird.collidesWith(t)) {
        stateMachine.change('collision')
      }
    }
  },

  updateScore () {
    for (let t of towers.instances) {
      if (t.hasPassedBird() && !t.scored) {
        t.scored = true
        playState.score++
      }
    }
  }
}
