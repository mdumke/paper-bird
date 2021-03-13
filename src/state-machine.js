const stateMachine = {
  currentState: null,
  states: {},

  register (key, state) {
    stateMachine.states[key] = state
  },

  change (key) {
    if (stateMachine.currentState) {
      stateMachine.currentState.exit()
    }

    try {
      stateMachine.currentState = stateMachine.states[key]
    } catch (e) {
      throw new Error(`State ${key} not registered`, e)
      loop.stop()
    }

    stateMachine.currentState.enter()
  },

  draw () {
    stateMachine.currentState.draw()
  },

  update (dt) {
    stateMachine.currentState.update(dt)
  }
}
