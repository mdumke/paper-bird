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

  collidesWithTower (tower) {
    if (bird.y < -40) {
      return bird.x + 69 > tower.x && bird.x < tower.x + tower.width
    }

    return (
      bird.frontCircleCollidesWithRect(tower.geometry()) ||
      bird.backCircleCollidesWithRect(tower.geometry()))
  },

  collidesWithNest (nest) {
    return (
      bird.frontCircleCollidesWithRect(nest.geometry()) ||
      bird.backCircleCollidesWithRect(nest.geometry()))
  },

  frontCircleCollidesWithRect (rect) {
    return geometry.rectangleInCircle(rect, {
      x: bird.x + 69,
      y: bird.y + 27,
      r: 15
    })
  },

  backCircleCollidesWithRect (rect) {
    return geometry.rectangleInCircle(rect, {
      x: bird.x + 43,
      y: bird.y + 30,
      r: 15
    })
  },

  update (dt, moveY = true, xDirection = 0) {
    bird.x += xDirection * config.ground.speed * dt

    if (!moveY) return

    if (controls.spaceBarPressed && bird.vy > -0.2) {
      bird.vy = -config.bird.wingPower
      audio.play('flap', 0.7)
    }

    bird.vy += config.physics.gravity * dt / 1000
    bird.y += bird.vy * dt

    if (bird.y > canvas.height - 74) {
      bird.y = canvas.height - 74
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
