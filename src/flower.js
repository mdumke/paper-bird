class Flower {
  constructor () {
    this.img = Math.random() < 0.5
      ? images.flower1
      : images.flower2
    this.x = canvas.width + this.img.width
    this.y = canvas.height - this.img.height - 10
  }

  isVisible () {
    return this.x > -this.img.width
  }

  update (dt) {
    this.x -= config.ground.speed * dt
  }

  draw () {
    canvas.drawImage(
      this.img,
      this.x,
      this.y,
      this.img.width,
      this.img.height)
  }
}
