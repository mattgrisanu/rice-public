var intialstate =  {
  restaurant: {
    restaurant_id: ''
  }
}

var restaurant = (state = intialstate.restaurant, action) => {
    switch (action.type) {
      case 'SPEAK':
        console.log('Speaking...', action.txt);

        return action.txt;

      case 'RESTAURANT_UPDATE':
        console.log('reducer RESTAURANT_UPDATE', action);
        return action.restaurant;

      default:
        return state;
    }
  }

export default restaurant;
