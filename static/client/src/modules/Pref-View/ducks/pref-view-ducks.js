module.exports = {
  actions: {
    checkPref: (pref_id) => {
      return {
        type: 'ITEM_CHECKED',
        pref_id,
      };
    },
    isOnboarded: () => {
      return {
        type: 'USER_ISONBOARDED',
      };
    },
    updateName: (name) => {
      return {
        type: 'UPDATE_NAME',
        name,
      };
    },
  },
};
