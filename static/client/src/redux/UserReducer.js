var intialstate =  { 
  user: {
      user_id: '',
      friends: [],
      preferences: []
  }
}

var user = (state = intialstate.user, action) => {
    switch (action.type) {
      case 'ITEM_CHECKED':
         // return Object.assign({}, state, {preferences: [...state.preferences, action.pref_id]})
        var prefArr = state.preferences.slice();
        if(prefArr.indexOf(action.pref_id) === -1) {
          prefArr.push(action.pref_id)
        }
        return { ...state, preferences: prefArr }

      case 'ADD_FRIEND':
        var friendArr = state.friends.slice();
        if(friendArr.indexOf(action.friend_id) === -1) {
          friendArr.push(action.friend_id)
        }
        return { ...state, friends: friendArr }
        
      default:
        return state;
    }
  }

export default user;