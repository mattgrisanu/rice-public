const intialstate = {
  restaurant: {
    restaurant_id: '',
  },
};

const restaurant = (state = intialstate.restaurant, action) => {
  switch (action.type) {
    case 'SPEAK':
      console.log('Speaking...', action.txt);

      return action.txt;

    case 'RESTAURANT_UPDATE':
      console.log('reducer RESTAURANT_UPDATE', action);
      return action.restaurant;

    case 'RESTAURANT_ACCEPT':
      console.log('reducer RESTAURANT_ACCEPT', action);
      return {
        ...state,
        toRate: true
      };

    case 'RESTAURANT_DECLINE':
      console.log('reducer RESTAURANT_DECLINE', action);
      return {
        ...state,
      };

    case 'TOGGLE_RATE_FLAG':
      return {
        ...state,
        toRate: !state.toRate
      }

    default:
      return state;
  }
};

export default restaurant;
