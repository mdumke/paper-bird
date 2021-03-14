const bird = {
  x: null,
  y: null,
  vy: null,

  draw () {
    canvas.ctx.drawImage(images.bird, bird.x, bird.y)

    bird.vy > 0
      ? canvas.ctx.drawImage(images.wingUp, bird.x + 28, bird.y - 20)
      : canvas.ctx.drawImage(images.wingDown, bird.x + 28, bird.y + 25)
  },

  collidesWith (tower) {
    return (
      bird.frontCircleCollides(tower) ||
      bird.backCircleCollides(tower))
  },

  frontCircleCollides (tower) {
    return geometry.rectangleInCircle(tower.geometry(), {
      x: bird.x + 69,
      y: bird.y + 27,
      r: 17
    })
  },

  backCircleCollides (tower) {
    return geometry.rectangleInCircle(tower.geometry(), {
      x: bird.x + 43,
      y: bird.y + 30,
      r: 17
    })
  },

  update (dt, moveHorizontally = false) {
    if (moveHorizontally) {
      bird.x -= config.ground.speed * dt
      return
    }

    if (controls.spaceBarPressed && bird.vy > 0) {
      bird.vy = -config.bird.wingPower
      audio.play('flap', 0.7)
    }

    bird.vy += config.physics.gravity * dt / 1000
    bird.y += bird.vy * dt

    if (bird.y > canvas.height - 80) {
      bird.y = canvas.height - 80
    }
  },

  reset () {
    bird.x = config.bird.initialX
    bird.y = config.bird.initialY
    bird.vy = 0
  },

  init () {
    bird.reset()
  }
}
