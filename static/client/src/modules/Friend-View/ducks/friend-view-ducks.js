module.exports = {
  actions: {
    'addFriend': function (friend_id) {
      return {
        type: 'ADD_FRIEND',
        friend_id: friend_id
      };
    },
    'getAllUsers': function() {
      return {
        type: 'GET_ALL_USERS'
      }
    }
  }
}