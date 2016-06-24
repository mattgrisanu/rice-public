import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './../ducks/pref-view-ducks.js';
import { bindActionCreators } from 'redux';
import { browserHistory, Link } from 'react-router';
import PrefEntry from './../components/PrefEntry';
import axios from 'axios';

/*testData from Auth0
{ email: '',
  name: '', given_name: '', family_name: '',
  picture: '',
  clientId: ''
}
*/
class PrefView extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { preferences, pickedPrefs } = this.props;
    //update state.user.user_id = tesetData.clientId
  }

  addPref(pref_id) {
    console.log("INSIDE addpref", pref_id)
    this.actions.checkPref(pref_id)
  }

  handleSubmit() {
    //somewhere we have testData
    console.log('in PREF VIEW handleSubmit', this.props.pickedPrefs)
    
    const instance = axios.create({
      baseURL: 'http://localhost:3001/api'
    });
    console.log(instance.post);

    instance.post('/users/users', {
        user_id: 'Matt',
        name: 'Matt',
        email: 'Matt@matt.com',
        preferences: this.props.pickedPrefs
      })
      .then(function (response) {
        console.log('db response from Pref View', response);
        browserHistory.push('/onboarding/addfriends');
      })
      .catch(function (error) {
        console.log('DB error', error);
        // handle db error
      });
        // browserHistory.push('/onboarding/addfriends');
    

  }

  render () {
    return (
      <div className='PrefView-container'>
        {this.props.preferences.all.map((pref, i) =>  <PrefEntry {...this.props} addPref={this.addPref} key={i} pref_id={pref} />)}
        <button onClick={this.handleSubmit.bind(this)}>Done onboarding</button>
      </div>
    );
  }
}


const mapStateToProps = function (state) {
  return {
    pickedPrefs: state.user.preferences,
    preferences: state.preferences
  }
}

const mapDispatchToProps = function (dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

PrefView = connect(mapStateToProps, mapDispatchToProps)(PrefView);
export default PrefView;