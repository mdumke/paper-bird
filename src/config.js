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
    minSpawnTime: 3,
    maxSpawnTime: 15,
    offsetY: 7
  },

  bird: {
    initialX: 250,
    initialY: 200,
    wingPower: 0.7
  },

  towers: {
    minSpawnTime: 1.5,
    maxSpawnTime: 5,
    missingProb: 0.3,
    gap: {
      maxDiff: 300,
      upperBoundary: 100,
      lowerBoundary: canvas.height - 100
    }
  },

  physics: {
    gravity: 2
  }
}
