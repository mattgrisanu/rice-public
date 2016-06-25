module.exports = {
  actions: {
    changeLocation(city) {
      return {
        type: 'CHANGE_LOCATION',
        city,
      };
    },
    addRecs(recObj) {
      return {
        type: 'ADD_RECS',
        recs: recObj.items,
      };
    },
  },
};
