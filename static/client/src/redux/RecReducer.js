const intialstate = {
  recommendation: [],
};

const recommendation = (state = intialstate.recommendation, action) => {
  switch (action.type) {
    case 'ADD_RECS':
      console.log('INSIDE RecReducer', action);
      return action.recs;

    case 'RESTAURANT_DECLINE':
      console.log('[Reducer Recommendation] RESTAURANT_DECLINE');
      return [
        ...state.slice(1),
      ];

    default:
      return state;
  }
};

export default recommendation;
