module.exports = {
  actions: {
    checkPref: function (pref_id) {
      return {
        type: 'ITEM_CHECKED',
        pref_id,
      };
    },
    isOnboarded: function() {
      return {
        type: 'USER_ISONBOARDED',
      };
    },
    updateName: function(name) {
      return {
        type: 'UPDATE_NAME',
        name,
      };
    },
  },
  checkPref: function (state = [], action) {
      switch (action.type) {
        // case 'ITEM_CHECKED':
        // console.log(state, "STATE")
        // var newState = []
        // if(state.indexOf(action.pref_id) === -1) {
        //   newState.push(action.pref_id)
        // }
        // return newState
          // return action.txt;
        default:
          return state;
      }
    }
};