const finishState = {
  ...state,

  time: 0,

  towers: [
    {
      spawned: false,
      spawnTime: config.nest.waitTime,
      position: 400,
      orientation: 1
    },
    {
      spawned: false,
      spawnTime: config.nest.waitTime + 0.362,
      position: 400,
      orientation: 1
    },
    {
      spawned: false,
      spawnTime: config.nest.waitTime + 0.71,
      position: 400,
      orientation: 1
    },
    {
      spawned: false,
      spawnTime: config.nest.waitTime + 0.71,
      position: 410,
      orientation: -1
    }
  ],

  enter () {
    audio.play('ambience')
    nest.reset()
    finishState.time = 0
    finishState.towers.forEach(t => t.spawned = false)
  },

  draw () {
    background.draw()
    towers.draw()
    ground.draw()
    bird.draw()
    flowers.draw()
    graphics.displayScore(playState.score)
    nest.draw()
    bird.collidesWithNest(nest)
  },

  update(dt) {
    finishState.towers.forEach(t => {
      if (!t.spawned && finishState.time > t.spawnTime) {
        towers.spawnAt(t.position, t.orientation)
        t.spawned = true
      }
    })

    if (finishState.time < config.nest.waitTime + 0.35) {
      nest.reset()
    }

    finishState.time += dt / 1000

    if (finishState.time < config.nest.waitTime + 1.4) {
      background.update(dt)
      ground.update(dt)
      flowers.update(dt)
      towers.update(dt, false)
      nest.update(dt)
      bird.update(dt)
    } else {
      bird.update(dt, true, 1)
    }

    finishState.checkCollisions()
  },

  checkCollisions () {
    if (bird.collidesWithNest(nest)) {
      stateMachine.change('win')
    }

    for (let t of towers.instances) {
      if (bird.collidesWithTower(t)) {
        stateMachine.change('finish-collision')
      }
    }
  }
}
