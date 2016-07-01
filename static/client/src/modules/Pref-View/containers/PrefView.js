import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './../ducks/pref-view-ducks.js';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import PrefEntry from './../components/PrefEntry';
import api from '../../../utils/api';

const userURL = 'http://localhost:3001/api';

class PrefView extends Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
     if (this.props.user.name !== prevProps.user.name) {
       this.refreshComponent();
     }
   }

   refreshComponent() {
     console.log('[PrefView] refreshComponent');
     this.saveUser();
   }

  addPref(prefId) {
    console.log('[PrefView] addPref', prefId);
    this.actions.checkPref(prefId);
  }

  saveUser() {
    var user = this.props.user.name
    console.log('new user name ==>', user);
    api(userURL, '/users/user/update', 'post', {
      name: this.props.user.name,
      email: this.props.user.email,
      isOnboarded: true,
      preferences: this.props.pickedPrefs,
    })
    .then(function (response) {
      console.log('[PrefView] response', response);
      this.props.actions.isOnboarded();
      browserHistory.push('/onboarding/addfriends');
    }.bind(this))
    .catch(function (error) {
      console.log('[PrefView] error GOING TO add new user', error);
    });
  }

  handleSubmit() {
    var userName= document.getElementById('userName').value
    if(this.props.user.name === null) {
      this.props.actions.updateName(userName);
    }
  }

  render() {
    return (
      <div className="PrefView-container">
        <form class="form-inline">
          <div class="form-group">
            <input type="text" class="form-control" id="userName" placeholder="Name"></input>
          </div>
        </form>
        <div className="PrefView-Preferences">
          {this.props.preferences.all.map((pref, i) =>  <PrefEntry {...this.props} addPref={this.addPref} key={i} pref_id={pref} />)}
        </div>
        <button onClick={this.handleSubmit.bind(this)}>Done onboarding</button>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    user: state.user,
    pickedPrefs: state.user.preferences,
    preferences: state.preferences,
  };
};

const mapDispatchToProps = function (dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
};

PrefView = connect(mapStateToProps, mapDispatchToProps)(PrefView);
export default PrefView;
