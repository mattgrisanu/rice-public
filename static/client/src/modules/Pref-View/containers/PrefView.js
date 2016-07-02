import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './../ducks/pref-view-ducks.js';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import PrefEntry from './../components/PrefEntry';
import api from '../../../utils/api';
import './PrefView.scss';

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
     this.saveUser();
   }

  addPref(prefId) {
    this.actions.checkPref(prefId);
  }

  saveUser() {
    const user = this.props.user.name
    api(userURL, '/users/user/update', 'post', {
      name: user,
      email: this.props.user.email,
      isOnboarded: true,
      preferences: this.props.pickedPrefs,
    })
    .then((response) => {
      console.log('[PrefView] response', response);
      this.props.actions.isOnboarded();
      browserHistory.push('/onboarding/addfriends');
    })
    .catch((error) => {
      console.log('[PrefView] error GOING TO add new user', error);
    });
  }

  handleSubmit() {
    const userName = document.getElementById('userName').value;
    if (this.props.user.name === null) {
      this.props.actions.updateName(userName);
    } else {
      this.saveUser();
    }
  }

  render() {
    return (
      <div className="PrefView-container">
        <form className="form-inline">
          <div className="form-group">
            <input type="text" className="form-control" id="userName" placeholder="Name"></input>
          </div>
        </form>
        <div className="PrefView-Preferences">
          <div className="heading heading-cuisine"><h3>Select Your Cuisine Preferences</h3></div>

          <div className="row">
            {
              this.props.preferences.cuisines.map((pref, i) =>
                <PrefEntry {...this.props} addPref={this.addPref} key={i} pref_id={pref} />
              )
            }
          </div>
        </div>
        <button className="btn btn-lg btn-success btn-block" onClick={this.handleSubmit.bind(this)}>Save Preferences</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    pickedPrefs: state.user.preferences,
    preferences: state.preferences,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(actions, dispatch) };
};

PrefView = connect(mapStateToProps, mapDispatchToProps)(PrefView);
export default PrefView;
