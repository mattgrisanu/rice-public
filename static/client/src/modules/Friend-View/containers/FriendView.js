import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './../ducks/friend-view-ducks.js';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
// import FriendEntry from './../components/FriendEntry';
import SearchInput, { createFilter } from 'react-search-input';
import axios2 from './../../../utils/api';
import axios from 'axios';

const userURL = 'http://localhost:3001/api';
const instance = axios.create({
  baseURL: 'http://localhost:3001/api',
});
const KEYS_TO_FILTERS = ['name', 'email'];

class FriendView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allUsers: [],
      searchTerm: '',
    };
    this.addFriend = this.addFriend.bind(this);
  }

  componentWillMount() {
    this.getAllUsers();
  }

  getAllUsers() {
    instance.get('/users/users')
      .then((response) => {
        this.setState({
          allUsers: response.data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  addFriend(friendId) {
    this.props.actions.addFriend(friendId);
  }

  handleSubmit() {
    axios2(userURL, '/users/friends/new', 'post', {
      clientId: this.props.user.clientId,
      friends: this.props.friends,
    })
    .then((response) => {
      browserHistory.push('/home');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  searchUpdated(term) {
    this.setState({
      searchTerm: term,
    });
  }

  render() {
    const filteredFriends = this.state.allUsers.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    const self = this;
    return (
      <div className="FriendView-container">
       <SearchInput className="search-input" onChange={this.searchUpdated.bind(this)} />
        {filteredFriends.map((user, i) => {
          if (user.clientId !== self.props.user.clientId) {
            return (
              <div className="FriendEntry-container" key={i} onClick={() => { this.addFriend(user.clientId); }}>
                <div className="FriendEntry-fields">{user.name}</div>
                <div className="FriendEntry-fields">{user.email}</div>
              </div>
            );
          }
        })}
        <button onClick={this.handleSubmit.bind(this)}>Done onboarding</button>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    friends: state.user.friends,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) };
};

FriendView = connect(mapStateToProps, mapDispatchToProps)(FriendView);
export default FriendView;
