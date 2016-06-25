import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './../ducks/friend-view-ducks.js';
import { bindActionCreators } from 'redux';
import { browserHistory, Link } from 'react-router';
import FriendEntry from './../components/FriendEntry';
import axios from 'axios';
import SearchInput, { createFilter } from 'react-search-input';

const KEYS_TO_FILTERS = ['name', 'email'];

const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
});

class FriendView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allUsers: [{ clientId: 'user1ID', name: 'user1', email: 'lala1@gmail.com'}, {clientId: 'user2ID', name: 'user2', email: 'lala2@gmail.com'}, {clientId: 'user3ID', name: 'user3', email: 'lala3@gmail.com'}, {clientId: 'user4ID', name: 'user4', email: 'lala4@gmail.com'}],
      searchTerm: ''
    }
    this.addFriend = this.addFriend.bind(this);
  }

  componentDidMount() {
    const { user, friends } = this.props;
    //call this.getAllUsers() to update state with users from DB
    this.getAllUsers();
  }

  getAllUsers () {
    instance.get('/users/users')
      .then(function (response) {
        console.log('db response for GET users', response);
        this.setState({
          allUsers: response.data
        })
      }.bind(this))
      .catch(function (error) {
        console.log(error);
        // handle user db error
      });
      ///DONT DISPLAY YOUR OWN DATA

  }

  addFriend(friend_id) {
    console.log("INSIDE addFriend", friend_id)
    this.props.actions.addFriend(friend_id)
  }

  handleSubmit() {
    console.log("FRIEND VIEW handleSubmit", this.props.friends);

    instance.post('/users/friends', {
        // user_id: 'this.props.user.clientId',
        user_id: 'Matt',
        // friends: [this.props.friends (friends_id1, friends_id2)],
        friends: this.props.friends
      })
      .then(function (response) {
        console.log('db response for POST friends', response);
        browserHistory.push('/home');
      })
      .catch(function (error) {
        console.log(error);
        // need to handle friend db error
      });
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }

  render () {
    const filteredFriends = this.state.allUsers.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    const self = this;
    return (
      <div className='FriendView-container'>
       <SearchInput className="search-input" onChange={this.searchUpdated.bind(this)} />
        {filteredFriends.map((user, i) =>  {
          return (
            <div className='FriendEntry-container' key={i} onClick={function () { this.addFriend(user.clientId) }.bind(this)}>
              <div className='FriendEntry-fields'>{user.name}</div>
              <div className='FriendEntry-fields'>{user.email}</div>
            </div>
          )
        })}
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