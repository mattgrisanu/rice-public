const intialstate = {
  group: {
    users: [],
    preferences: [],
    names: [],
    emails: [],
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

      case 'ADD_TO_GROUP_NAME':
        var nameArr = state.names.slice();
        nameArr.push(action.name)
        return { ...state, names: nameArr }

      case 'ADD_TO_GROUP_EMAIL':
        var emailArr = state.emails.slice();
        if(emailArr.indexOf(action.email) === -1) {
          emailArr.push(action.email)
        }
        return { ...state, emails: emailArr }


      case 'IMPORT_GROUP_PREF':
        return { ...state, preferences: action.prefArr}

      default:
        return state;
    }
};

export default group;