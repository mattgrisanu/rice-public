const intialstate = {
  preferences: {
    all: [
      'American', 'Chinese', 'Indian', 'Italian', 'Mexican', 'Korean', 'Japanese', 'Thai', 'Vietnamese', 'Breakfast', 'Pizza', 'Food Court', 'Cafe', 'Vegetarian'
    ],
  }
}

const preferences = (state = intialstate.preferences, action) => {
    switch (action.type) {
      case 'SPEAK':
        console.log('Speaking...', action.txt);

        return action.txt;
      default:
        return state;
    }
};

export default preferences;