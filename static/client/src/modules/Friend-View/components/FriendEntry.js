import React, { Component } from 'react';
import { browserHistory } from 'react-router';

//this.props.user = {name: 'user1', email: 'lala@gmail.com'}
export default class FriendEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='FriendEntry-container' onClick={function() {this.props.addFriend(this.props.user.clientId)}.bind(this)}>
        <div className='FriendEntry-fields'>{this.props.user.name}</div>
        <div className='FriendEntry-fields'>{this.props.user.email}</div>
      </div>
    )
  }
};