const graphics = {
  displayLoadingMessage: () => {
    canvas.drawText('Loading...', 200, 200, 20)
  },

  displayScore: score => {
    canvas.drawText(String(score || 0), 20, 48, 40)
  }
}

