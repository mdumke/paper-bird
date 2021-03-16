class Explosion {
  constructor () {
    this.time = 0
    this.frames = [
      () => {
        this.drawImage(1)
      },

      () => {
        this.drawImage(2)
        bird.draw()
      },

      () => {
        this.drawImage(3)
      }
    ]
  }

  draw () {
    if (this.time < 0.15) {
      this.frames[0]()
    } else if (this.time < 0.3) {
      this.frames[1]()
    } else if (this.time < 0.45) {
      this.frames[2]()
    } else if (this.time < 0.6) {
      this.frames[0]()
    } else if (this.time < 0.7) {
      this.frames[1]()
    } else if (this.time < 0.8) {
      this.frames[2]()
    }
  }

  update (dt) {
    this.time += dt / 1000
  }

  drawImage (id) {
    switch (id) {
      case 1:
        canvas.drawImage(images.pow1,
          bird.x - 54, bird.y - 30,
          images.pow1.width * 1.0, images.pow1.height * 1.0)
        break
      case 2:
        canvas.drawImage(images.pow2,
          bird.x - 35, bird.y - 25,
          images.pow2.width * 0.7, images.pow2.height * 0.8)
        break
      case 3:
        canvas.drawImage(images.pow3,
          bird.x - 15, bird.y - 10,
          images.pow3.width * 0.7, images.pow3.height * 0.8)
        break
    }
  }
}
