const graphics = {
  displayLoadingMessage: () => {
    canvas.drawText('Loading...', 200, 200, '#444', 20, 'monospace')
  },

  displayScore: score => {
    canvas.drawText(String(score), 20, 40, '#444', 32, 'monospace')
  }
}

