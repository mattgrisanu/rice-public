const intialstate = {
  preferences: {
    cuisines: [
      { name: 'American', class: 'american' },
      { name: 'Breakfast', class: 'breakfast' },
      { name: 'Cafe', class: 'cafe' },
      { name: 'Chinese', class: 'chinese' },
      { name: 'Food Court', class: 'foodcourt' },
      { name: 'Indian', class: 'indian' },
      { name: 'Japanese', class: 'japenese' },
      { name: 'Korean', class: 'korean' },
      { name: 'Mexican', class: 'mexican' },
      { name: 'Pizza', class: 'pizza' },
      { name: 'Thai', class: 'thai' },
      { name: 'Vegetarian', class: 'vegetarian' },
      { name: 'Vietnamese', class: 'vietnamese' },
    ],
  },
};

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
