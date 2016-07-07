module.exports = {
  actions: {
    importFriends(friendsArr) {
      return {
        type: 'IMPORT_FRIENDS',
        friendsArr,
      };
    },
    addToGroup(clientId) {
      return {
        type: 'ADD_TO_GROUP',
        clientId,
      };
    },
    importGroupPref(prefArr) {
      return {
        type: 'IMPORT_GROUP_PREF',
        prefArr,
      };
    },
    addRecs(recObj) {
      return {
        type: 'ADD_RECS',
        recs: recObj,
      };
    },
  },
};
