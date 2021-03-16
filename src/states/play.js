const playState = {
  ...state,

  score: null,

  enter () {
    playState.score = 0
    towers.nSpawned = 0
    bird.reset()
    towers.reset()
    audio.play('music', 0.3)
  },

  draw () {
    background.draw()
    towers.draw()
    ground.draw()
    bird.draw()
    flowers.draw()

    if (playState.score > 0) {
      graphics.displayScore(playState.score)
    }
  },

  update (dt) {
    background.update(dt)
    ground.update(dt)
    flowers.update(dt)
    towers.update(dt)
    bird.update(dt)
    playState.checkCollisions()
    playState.updateScore()

    if (playState.score >= config.towers.maxNumber) {
      stateMachine.change('finish')
    }
  },

  exit () {
    audio.pause('music')
  },

  checkCollisions () {
    for (let t of towers.instances) {
      if (bird.collidesWithTower(t)) {
        stateMachine.change('collision')
      }
    }
  },

  updateScore () {
    for (let t of towers.instances) {
      if (t.orientation === -1) continue

      if (t.hasPassedBird() && !t.scored) {
        t.scored = true
        playState.score += 1
        audio.play('pling', 0.5)
      }
    }
  }
}
