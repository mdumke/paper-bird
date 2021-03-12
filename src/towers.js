const towers = {
  spawnTimer: 0,
  instances: [],

  spawn () {
    towers.instances.push(new Tower())
  },

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

    if (towers.spawnTimer > 3) {
      towers.spawn()
      towers.spawnTimer = 0
    }
  }
}
