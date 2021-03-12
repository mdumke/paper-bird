const utils = {
  urand (min, max) {
    return max === undefined
      ? Math.random() * max
      : min + Math.random() * (max - min)
  },

  sample (values) {
    return values[Math.floor(Math.random() * values.length)]
  }
}
