module.exports = {
  actions: {'hello': function (txt) {
      return {
        type: 'SPEAK',
        txt: txt
      };
    }},
  reducers: (state = [], action) => {
    switch (action.type) {
      case 'SPEAK':
        console.log('Speaking...', action.txt);

        return action.txt;
      default:
        return state;
    }
  }
};