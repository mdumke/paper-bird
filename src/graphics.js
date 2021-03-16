const graphics = {
  displayLoadingMessage () {
    canvas.drawText('Loading...', 200, 200, 20)
  },

  displayScore (score) {
    canvas.drawText(String(score || 0), 20, 48, 40)
  },

  displayPlayIcon () {
    canvas.drawTriangle(
      { x: 450, y: 230 },
      { x: 450 + 140 * Math.cos(Math.PI / 6), y: 300 },
      { x: 450, y: 370 }
    )
  },

  hideCursor () {
    if (!canvas.el.classList.contains('hide-cursor')) {
      canvas.el.classList.add('hide-cursor')
    }
  }
}

