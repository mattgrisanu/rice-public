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
        case 'ITEM_CHECKED':
        console.log(state, "STATE")
        return [action.pref_id, ...state]
          // return action.txt;
        default:
          return state;
      }
    }
};