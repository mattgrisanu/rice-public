var intialstate =  { 
  recommendation: ""
}

var recommendation = (state = intialstate.recommendation, action) => {
  switch (action.type) {
    case 'ADD_RECS':
      console.log('INSIDE RecReducer')
      return action.recs
    default:
      return state;
  }
}

export default recommendation;