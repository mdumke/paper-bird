const towers = {
  prevGap: canvas.height / 2,
  nSpawned: 0,
  spawnTimer: 0,
  spawnTime: config.towers.initialSpawnTime,
  instances: [],

  draw () {
    towers.instances.forEach(t => t.draw())
  },

  update (dt, spawnNew = true) {
    towers.instances.forEach(t => t.update(dt))
    towers.instances = towers.instances.filter(t => t.isVisible())

    if (!spawnNew) return

    towers.spawnTimer += dt / 1000

    if (towers.spawnTimer > towers.spawnTime) {
      towers.spawn()
      towers.spawnTimer = 0
      towers.setSpawnTime()
    }
  },

  reset () {
    towers.prevGap = canvas.height / 2
    towers.spawnTimer = 0
    towers.spawnTime = config.towers.initialSpawnTime
    towers.instances = []
  },

  spawn () {
    if (towers.nSpawned >= config.towers.maxNumber) {
      return
    }

    const { gap, gapSize } = towers.getPosition()

    towers.instances.push(new Tower(gap, -1))
    towers.instances.push(new Tower(gap + gapSize))
    towers.nSpawned++
  },

  spawnAt (gap, orientation = 1) {
    towers.instances.push(new Tower(gap, orientation))
  },

  setSpawnTime () {
    towers.spawnTime = utils.urand(
      towers.getSettings().minSpawnTime,
      towers.getSettings().maxSpawnTime
    )
  },

  getPosition () {
    let gap = towers.getSettings().gap
    let size = utils.sample(gap.sizes)
    let newGap = towers.prevGap + utils.urand(-gap.maxDiff / 2, gap.maxDiff / 2)

    newGap = Math.max(newGap, gap.upperBoundary)
    newGap = Math.min(newGap, gap.lowerBoundary - size)

    towers.prevGap = newGap

    return {
      gap: newGap,
      gapSize: size
    }
  },

  getSettings () {
    return towers.nSpawned < config.towers.maxNumber / 3
      ? config.towers.easy
      : config.towers.hard
  }
}
