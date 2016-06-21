import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { actions } from './../ducks/home-view-ducks.js';
import { bindActionCreators } from 'redux';
import { browserHistory, Link } from 'react-router';
// import PrefEntry from './../components/PrefEntry';
import axios from 'axios';

class HomeView extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { user, checkPref } = this.props;

  }

  handleSubmit() {
    //somewhere we have testData
    console.log('in HOME VIEW handleSubmit', this.props.pickedPrefs);
    // const instance = axios.create({
    //   baseURL: 'http://localhost:3001/api'
    // });
    // console.log('axios instance' ,instance);

    // instance.post('/users/users', {
    //     user_id: 'testData.clientID',
    //     name: 'testData.name',
    //     email: 'testData.email',
    //     preferences: this.props.pickedPrefs
    //   })
    //   .then(function (response) {
    //     console.log('Response from POST to /api/users/users =>', response);
    //     browserHistory.push('/home');
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  render () {
    return (
      <div className='HomeView-container'>
        Home View
      </div>
    );
  }
}


const mapStateToProps = function (state) {
  console.log("mapStateSTATE", state)
  return {
    pickedPrefs: state.checkPref,
    user: state.data.user
  }
}

const mapDispatchToProps = function (dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

HomeView = connect(mapStateToProps, mapDispatchToProps)(HomeView);
export default HomeView;