const rating = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_RATE_FLAG':
      return {
        ...state,
        toRate: !state.toRate
      }
  }
}