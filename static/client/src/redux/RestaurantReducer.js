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
      default:
        return state;
    }
  }

export default restaurant;