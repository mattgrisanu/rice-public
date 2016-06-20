import React, { Component } from 'react';
import { browserHistory } from 'react-router';

//this.props.user = {name: 'user1', email: 'lala@gmail.com'}
export default class FriendEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='FriendEntry-container' onClick={function() {this.props.addFriend(this.props.user.user_id)}.bind(this)}>
        <div className='FriendEntry-fields'>I am {this.props.user.name}</div>
        <div className='FriendEntry-fields'>Email {this.props.user.email}</div>
      </div>
    )
  }
};