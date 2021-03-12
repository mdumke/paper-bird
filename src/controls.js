const SPACE = 32

const controls = {
  spaceBarPressed: false,

  handleKeyDown (e) {
    if (e.keyCode === SPACE) {
      e.preventDefault()
      controls.spaceBarPressed = true
    }
  },

  handleKeyUp (e) {
    if (e.keyCode === SPACE) {
      e.preventDefault()
      controls.spaceBarPressed = false
    }
  },

  handleTouchStart (e) {
    e.preventDefault()
    controls.spaceBarPressed = true
  },

  handleTouchEnd (e) {
    e.preventDefault()
    controls.spaceBarPressed = false
  },

  init () {
    document.addEventListener('keydown', controls.handleKeyDown)
    document.addEventListener('keyup', controls.handleKeyUp)
    document.addEventListener('touchstart', controls.handleTouchStart)
    document.addEventListener('touchend', controls.handleTouchEnd)
  }
}
