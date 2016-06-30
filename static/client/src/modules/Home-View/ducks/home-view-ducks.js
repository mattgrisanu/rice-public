module.exports = {
  actions: {
    changeLocation(city) {
      return {
        type: 'CHANGE_LOCATION',
        city,
      };
    },
    addRecs(recObj) {
      console.log("IM HERE")
      return {
        type: 'ADD_RECS',
        recs: recObj.response,
      };
    },
    importPreferences(prefsArr) {
      return {
        type: 'IMPORT_PREFS',
        prefsArr,
      };
    },
    importFriends(friendsArr) {
      return {
        type: 'IMPORT_FRIENDS',
        friendsArr,
      };
    },
  },
};
