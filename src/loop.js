const loop = {
  ref: null,
  prevTime: 0,
  callback: null,

  run: time => {
    const diff = time - loop.prevTime
    const dt = isNaN(diff) ? 0 : diff
    loop.ref = requestAnimationFrame(loop.run)
    loop.callback(dt)
    loop.prevTime = time
  },

  stop: () => {
    cancelAnimationFrame(loop.ref)
  },

  start: cb => {
    loop.callback = cb
    loop.run()
  }
}
