import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './../ducks/friend-view-ducks.js';
import { bindActionCreators } from 'redux';
import { browserHistory, Link } from 'react-router';
// import PrefEntry from './../components/PrefEntry';
import axios from 'axios';

class FriendView extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { user, friends } = this.props;

  }


  render () {
    return (
      <div className='FriendView-container'>
        Friend View
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