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
    addToGroupName(name) {
      return {
        type: 'ADD_TO_GROUP_NAME',
        name,
      };
    },
    addToGroupEmail(email) {
      return {
        type: 'ADD_TO_GROUP_EMAIL',
        email,
      };
    },
    importGroupPref(prefArr) {
      return {
        type: 'IMPORT_GROUP_PREF',
        prefArr,
      };
    },
    addRecs(recArr) {
      return {
        type: 'ADD_RECS',
        recs: recArr,
      };
    },
  },
};
