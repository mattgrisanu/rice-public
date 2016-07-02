module.exports = {
  actions: {
    checkPref: (prefId) => {
      return {
        type: 'ITEM_CHECKED',
        prefId,
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
