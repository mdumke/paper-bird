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
    maxNumber: 100,

    easy: {
      minSpawnTime: 1.2,
      maxSpawnTime: 2.5,
      gap: {
        sizes: [250, 260, 280, 310],
        maxDiff: 300,
        upperBoundary: 100,
        lowerBoundary: canvas.height - 100
      }
    },

    hard: {
      minSpawnTime: 1.0,
      maxSpawnTime: 2.0,
      gap: {
        sizes: [215, 220, 260, 270],
        maxDiff: 310,
        upperBoundary: 60,
        lowerBoundary: canvas.height - 60
      }
    }
  },

  physics: {
    gravity: 2.1
  }
}
