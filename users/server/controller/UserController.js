var User = require('./../models/UserModel.js');
var PreferenceController = require('./../controller/PreferenceController.js');

/**
* {
*   name:
*   email: 
*   user_id: 
*   preferences: [] 
* }
*/

module.exports = {
  getUsers: function (req, res) {
    User.where({}).fetchAll()
      .then(function (allUsers) {
        res.status(200).send(allUsers);
      })
      .catch(function (err) {
        console.error('Error: Fetching all users from db', err);
        res.status(500).send(err);
      });
  },

  addUser: function (req, res) {
    var user = req.body;
    var newUser = {
      name: user.name,
      email: user.email,
      clientId: user.user_id
    };

    new User(newUser).save()
      .then(function (saved) {
        console.log('Sucessfully saved => ', saved);
        PreferenceController._savePreferences(saved.id, saved.attributes.clientId, user.preferences, res);
      })
      .catch(function (err) {
        console.error('Error: Saving to database', err);
        res.status(500).send(err);
      })
  }
};