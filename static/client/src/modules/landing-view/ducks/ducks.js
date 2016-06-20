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
  reducers: (state = intialstate, action) => {
    switch (action.type) {
      case 'SPEAK':
        console.log('Speaking...', action.txt);

        return action.txt;
      default:
        return state;
    }
  }
};