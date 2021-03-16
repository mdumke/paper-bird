const graphics = {
  displayLoadingMessage () {
    canvas.drawText('Loading...', 200, 200, 20)
  },

  displayScore (score) {
    canvas.drawText(String(score || 0), 20, 48, 40)
  },

  displayPlayIcon () {
    canvas.drawTriangle(
      { x: 465, y: 245 },
      { x: 465 + 110 * Math.cos(Math.PI / 6), y: 300 },
      { x: 465, y: 355 }
    )
  },

  hideCursor () {
    if (!canvas.el.classList.contains('hide-cursor')) {
      canvas.el.classList.add('hide-cursor')
    }
  }
}

