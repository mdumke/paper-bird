class Tower {
  constructor () {
    this.img = images.tower
    this.x = canvas.width + this.img.width
    this.y = this.getRandomHeight()
    this.width = this.img.width
    this.height = this.y
  }

  getRandomHeight () {
    let { minHeight: min, maxHeight: max } = config.towers
    return canvas.height - (min + Math.random() * (max - min))
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
