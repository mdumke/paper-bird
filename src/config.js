const config = {
  background: {
    speed: 0.04,
    height: 150
  },

  ground: {
    speed: 0.25,
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

  nest: {
    waitTime: 10,
    y: 330
  },

  towers: {
    initialSpawnTime: 6.6,
    minSpawnTime: 0.8,
    maxSpawnTime: 2.5,
    maxNumber: 5,
    gap: {
      sizes: [210, 220, 230, 280],
      maxDiff: 400,
      upperBoundary: 100,
      lowerBoundary: canvas.height - 100
    }
  },

  physics: {
    gravity: 2.1
  }
}
