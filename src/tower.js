class Tower {
  constructor (y, orientation = 1) {
    this.img = images.tower
    this.x = canvas.width + this.img.width
    this.y = y
    this.width = this.img.width
    this.height = this.y
    this.orientation = orientation
  }

  isVisible () {
    return this.x > -this.img.width
  }

  geometry () {
    return {
      x: this.x,
      y: this.y - (this.orientation == -1) * this.height,
      width: this.width,
      height: this.height
    }
  }

  update (dt) {
    this.x -= config.ground.speed * dt
  }

  draw () {
    const drawFn = this.orientation === 1
      ? canvas.drawImage
      : canvas.drawImageFlipped

    drawFn(
      this.img,
      this.x,
      this.y,
      this.img.width,
      this.img.height)
  }
}
