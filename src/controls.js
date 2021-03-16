const SPACE = 32

const controls = {
  spaceBarPressed: false,
  mouseDown: false,

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

  handleMouseDown (e) {
    controls.mouseDown = true
  },

  handleMouseUp (e) {
    controls.mouseDown = false
  },

  init () {
    document.addEventListener('keydown', controls.handleKeyDown)
    document.addEventListener('keyup', controls.handleKeyUp)
    document.addEventListener('touchstart', controls.handleTouchStart)
    document.addEventListener('touchend', controls.handleTouchEnd)
    document.addEventListener('mousedown', controls.handleMouseDown)
    document.addEventListener('mouseup', controls.handleMouseUp)
  }
}
