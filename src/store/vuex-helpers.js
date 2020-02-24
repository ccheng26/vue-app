export const set = key => (state, val) => {
  state[key] = val
}

export const get = key => (state) => {
  return state[key]
}