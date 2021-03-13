const config = {
  background: {
    speed: 0.04,
    height: 150
  },

  ground: {
    speed: 0.2,
    height: 25
  },

  flowers: {
    initialSpawnTime: 2,
    minSpawnTime: 3,
    maxSpawnTime: 6,
    offsetY: 7
  },

  bird: {
    initialX: 300,
    initialY: 200,
    wingPower: 0.7
  },

  towers: {
    initialSpawnTime: 0.5,
    minSpawnTime: 1,
    maxSpawnTime: 3,
    missingProb: 0,
    gap: {
      sizes: [200, 250, 300],
      maxDiff: 300,
      upperBoundary: 100,
      lowerBoundary: canvas.height - 100
    }
  },

  physics: {
    gravity: 2.1
  }
}
