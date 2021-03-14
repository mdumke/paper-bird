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
    minSpawnTime: 2,
    maxSpawnTime: 5,
    offsetY: 7
  },

  bird: {
    initialX: 300,
    initialY: 200,
    wingPower: 0.7
  },

  towers: {
    initialSpawnTime: 6.6,
    minSpawnTime: 1,
    maxSpawnTime: 2.5,
    missingProb: 0,
    gap: {
      sizes: [200, 220, 250, 300],
      maxDiff: 350,
      upperBoundary: 100,
      lowerBoundary: canvas.height - 100
    }
  },

  physics: {
    gravity: 2.1
  }
}
