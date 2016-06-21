import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './../ducks/friend-view-ducks.js';
import { bindActionCreators } from 'redux';
import { browserHistory, Link } from 'react-router';
import FriendEntry from './../components/FriendEntry';
import axios from 'axios';

class FriendView extends Component {

  constructor(props) {
    super(props)
    this.state = {
      allUsers: [{clientId: 'user1ID', name: 'user1', email: 'lala@gmail.com'}, {clientId: 'user2ID', name: 'user1', email: 'lala@gmail.com'}, {clientId: 'user3ID', name: 'user1', email: 'lala@gmail.com'}, {clientId: 'user4ID', name: 'user1', email: 'lala@gmail.com'}]
    }
  }

  componentDidMount() {
    const { user, friends } = this.props;
    //call this.getAllUsers() to update state with users from DB
  }

  getAllUsers () {
    // axios.get('/api/users/users')
    //   .then(function (response) {
    //     console.log(response);
    //     this.setState = {
    //       allUsers: [response]
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

  }

  addFriend(friend_id) {
    console.log("INSIDE addFriend", friend_id)
    this.actions.addFriend(friend_id)
  }

  handleSubmit() {
    console.log("pushed handleSubmit")
    // axios.post('/api/users/friends', {
    //     user_id: 'this.props.user.clientId',
    //     friends: [this.props.friends (friends_id1, friends_id2)],
    //   })
    //   .then(function (response) {
    //     console.log(response);
          //browserHistory.push('/home');
    //   })
    //   .catch(function (error) {
    //     console.log(error);
          //need to handle user db error
    //   });
  }


  render () {
    return (
      <div className='FriendView-container'>
        {this.state.allUsers.map((user, i) =>  <FriendEntry {...this.props} addFriend={this.addFriend} key={i} user={user} />)}
        <button onClick={this.handleSubmit.bind(this)}>Done onboarding</button>
      </div>
    );
  }
}


const mapStateToProps = function (state) {
  return {
    user: state.user,
    friends: state.user.friends
  }
}

const mapDispatchToProps = function (dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

FriendView = connect(mapStateToProps, mapDispatchToProps)(FriendView);
export default FriendView;