const towers = {
  prevGap: canvas.height / 2,
  spawnTimer: 0,
  spawnTime: config.towers.minSpawnTime,
  instances: [],

  draw () {
    towers.instances.forEach(f => f.draw())
  },

  update (dt) {
    towers.instances.forEach(t => t.update(dt))
    towers.instances = towers.instances.filter(t => t.isVisible())

    for (let t of towers.instances) {
      if (bird.collidesWith(t)) {
        loop.stop()
      }
    }

    towers.spawnTimer += dt / 1000

    if (towers.spawnTimer > towers.spawnTime) {
      towers.spawn()
      towers.spawnTimer = 0
      towers.setSpawnTime()
    }
  },

  spawn () {
    const { gap, gapSize } = towers.getPosition()

    if (Math.random() > config.towers.missingProb) {
      towers.instances.push(new Tower(gap, -1))
    }

    if (Math.random() > config.towers.missingProb) {
      towers.instances.push(new Tower(gap + gapSize))
    }
  },

  setSpawnTime () {
    towers.spawnTime = utils.urand(
      config.towers.minSpawnTime,
      config.towers.maxSpawnTime)
  },

  getPosition () {
    let gap = config.towers.gap
    let size = utils.sample([200, 250, 300, 350])
    let newGap = towers.prevGap + utils.urand(-gap.maxDiff / 2, gap.maxDiff / 2)

    newGap = Math.max(newGap, gap.upperBoundary)
    newGap = Math.min(newGap, gap.lowerBoundary - size)

    towers.prevGap = newGap

    return {
      gap: newGap,
      gapSize: size
    }
  }
}
