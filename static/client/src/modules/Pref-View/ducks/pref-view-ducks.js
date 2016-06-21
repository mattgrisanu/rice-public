module.exports = {
  actions: {
    'checkPref': function (pref_id) {
      return {
        type: 'ITEM_CHECKED',
        pref_id: pref_id
      };
    }
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