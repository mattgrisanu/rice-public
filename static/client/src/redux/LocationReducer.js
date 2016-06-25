var intialstate =  { 
  Location: {
    city: ''
  }
}

var Location = (state = intialstate.Location, action) => {
  switch (action.type) {
    case 'CHANGE_LOCATION':
      console.log('INSIDE LocationReducer')
      return { ...state, city: action.city }
    default:
      return state;
  }
}

export default Location;