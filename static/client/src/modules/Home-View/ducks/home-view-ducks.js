module.exports = {
  actions: {
    'changeLocation': function (city) {
      return {
        type: 'CHANGE_LOCATION',
        city
      }
    }
  }
};