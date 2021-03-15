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

    if (!stateMachine.states[key]) {
      throw new Error(`State ${key} not registered`)
      loop.stop()
    }

    stateMachine.currentState = stateMachine.states[key]
    stateMachine.currentState.enter()
  },

  draw () {
    stateMachine.currentState.draw()
  },

  update (dt) {
    stateMachine.currentState.update(dt)
  }
}
