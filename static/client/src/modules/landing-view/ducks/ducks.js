var intialstate = {
    user: {
      user_id: '',
      friends: [],
      preferences: []
    },
    restaurant: {
      restaurant_id: ''
    },
    preferences: {
      all: [
        'American', 'Chinese', 'Indian', 'Italian', 'Mexican', 'Korean', 'Japanese', 'Thai', 'Vietnamese', 'Breakfast', 'Pizza', 'Food Court', 'Cafe', 'Vegetarian'
        ]
    }
  }
module.exports = {
  actions: {'hello': function (txt) {
      return {
        type: 'SPEAK',
        txt: txt
      };
    }
  },
  user: (state = intialstate.user, action) => {
    switch (action.type) {
      case 'ITEM_CHECKED':
        console.log(state, "STATE")
         // return Object.assign({}, state, {preferences: [...state.preferences, action.pref_id]})
        var prefArr = state.preferences.slice();
        if(prefArr.indexOf(action.pref_id) === -1) {
          prefArr.push(action.pref_id)
        }
        return {...state, preferences: prefArr }
      default:
        return state;
    }
  },
  restaurant: (state = intialstate.restaurant, action) => {
    switch (action.type) {
      case 'SPEAK':
        console.log('Speaking...', action.txt);

        return action.txt;
      default:
        return state;
    }
  },
  preferences: (state = intialstate.preferences, action) => {
    switch (action.type) {
      case 'SPEAK':
        console.log('Speaking...', action.txt);

        return action.txt;
      default:
        return state;
    }
  }
};