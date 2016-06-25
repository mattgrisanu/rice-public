const intialstate = {
  group: {
    users: [],
    preferences: [],
  }
}

const group = (state = intialstate.group, action) => {
    switch (action.type) {
      case 'ADD_TO_GROUP':
        var groupArr = state.users.slice();
        if(groupArr.indexOf(action.clientId) === -1) {
          groupArr.push(action.clientId)
        }
        return { ...state, users: groupArr }

      case 'IMPORT_GROUP_PREF':
        return { ...state, preferences: action.prefArr}

      default:
        return state;
    }
};

export default group;