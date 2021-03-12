const canvas = {
  el: null,
  ctx: null,
  width: null,
  height: null,

  clear: () => {
    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height)
  },

  drawText: (text, x, y, color, size, fontFamily) => {
    canvas.ctx.fillStyle = color
    canvas.ctx.font = `${size}px ${fontFamily}`
    canvas.ctx.fillText(text, x, y)
  },

  drawImageFlipped: (img, x, y, w, h) => {
    canvas.ctx.save()
    canvas.ctx.scale(1, -1)
    canvas.ctx.drawImage(img, x, h - y, w, -h)
    canvas.ctx.restore()
  },

  drawImage: (img, x, y, w, h) => {
    canvas.ctx.drawImage(img, x, y, w, h)
  },

  drawCircle: (x, y, r) => {
    canvas.ctx.beginPath()
    canvas.ctx.arc(x, y, r, 0, 2 * Math.PI)
    canvas.ctx.stroke()
  },

  init: () => {
    const element = document.querySelector('#canvas')
    canvas.el = element
    canvas.ctx = element.getContext('2d')
    canvas.width = canvas.el.width
    canvas.height = canvas.el.height
  }
}
