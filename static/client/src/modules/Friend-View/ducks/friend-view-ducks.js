module.exports = {
  actions: {
    addFriend: (friendId) => {
      return {
        type: 'ADD_FRIEND',
        friendId,
      };
    },
    getAllUsers: () => {
      return {
        type: 'GET_ALL_USERS',
      };
    },
  },
};
