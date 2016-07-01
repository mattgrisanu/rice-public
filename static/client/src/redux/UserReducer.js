var intialstate =  {
  user: {
      clientId: '',
      friends: [],
      preferences: [],
      isOnboarded: false
  }
}

var user = (state = intialstate.user, action) => {
    switch (action.type) {
      case 'ITEM_CHECKED':
        var prefArr = state.preferences.slice();
        if(prefArr.indexOf(action.prefId) === -1) {
          prefArr.push(action.prefId)
        }
        return { ...state, preferences: prefArr }

      case 'UPDATE_NAME':
        return { ...state, name: action.name }
        
      case 'ADD_FRIEND':
        var friendArr = state.friends.slice();
        if(friendArr.indexOf(action.friendId) === -1) {
          friendArr.push(action.friendId)
        }
        return { ...state, friends: friendArr }

      case 'IMPORT_FRIENDS':
        return { ...state, friends: action.friendsArr}

      case 'LOCK_SUCCESS':
        console.log('LOCK_SUCCESS', action.profile);

        return {
          ...state,

          clientId: action.profile.clientId,
          name: action.profile.name,
          email: action.profile.email,
          isOnboarded: action.profile.isOnboarded || false
        }

      case 'USER_ISONBOARDED':
        return {
          ...state,
          isOnboarded: true

        }
      case 'IMPORT_PREFS':
        return {
          ...state,
          preferences: action.prefsArr
        }

      default:
          return state;
    }
  }

export default user;
