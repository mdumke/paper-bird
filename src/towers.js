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

    towers.pushTowers(towers.getSettings().dropTowerProb)
    towers.nSpawned++
  },

  pushTowers (pDrop) {
    // if necessary, drop a random tower, otherwise, add both
    const { gap, gapSize } = towers.getPosition()
    const drop = Math.random() < pDrop

    if (drop) {
      Math.random() < 0.5
        ? towers.instances.push(new Tower(gap, -1, true))
        : towers.instances.push(new Tower(gap + gapSize, 1, true))
    } else {
      towers.instances.push(new Tower(gap, -1, true))
      towers.instances.push(new Tower(gap + gapSize))
    }
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
    if (towers.nSpawned < 30) {
      return config.towers.easy
    } else if (towers.nSpawned < 70) {
      return config.towers.medium
    } else {
      return config.towers.hard
    }
  }
}
