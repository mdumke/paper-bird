const flowers = {
  spawnTimer: 0,
  nextSpawnTime: config.flowers.minSpawnTime,
  instances: [],

  spawn () {
    flowers.instances.push(new Flower())
  },

  setNewSpawnTime () {
    flowers.nextSpawnTime = config.flowers.minSpawnTime + Math.random() *
      config.flowers.maxSpawnTime
  },

  draw () {
    flowers.instances.forEach(f => f.draw())
  },

  update (dt) {
    flowers.instances.forEach(f => f.update(dt))
    flowers.instances = flowers.instances.filter(f => f.isVisible())

    flowers.spawnTimer += dt / 1000

    if (flowers.spawnTimer > flowers.nextSpawnTime) {
      flowers.spawn()
      flowers.spawnTimer = 0
      flowers.setNewSpawnTime()
    }
  }
}
