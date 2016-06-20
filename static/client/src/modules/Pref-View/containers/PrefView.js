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
  clientID: ''
}
*/
class PrefView extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { preferences, checkPref } = this.props;

    // <PrefEntry pref_id={pref} onClick={function() { this.addPref(pref) }.bind(this)} />
  }

  addPref(pref_id) {
    console.log("INSIDE addpref", pref_id)
    this.actions.checkPref(pref_id)
  }

  handleSubmit() {
    //somewhere we have testData
    console.log('in handleSubmit', this.props.pickedPrefs)
    // axios.post('/api/users/users', {
    //     id: 'testData.clientID',
    //     name: 'testData.name',
    //     email: 'testData.email',
    //     preferences: this.props.pickedPrefs
    //   })
    //   .then(function (response) {
    //     console.log(response);
          //browserHistory.push('/authenciatedlandingpage);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
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
  console.log("mapStateSTATE", state)
  return {
    pickedPrefs: state.checkPref,
    preferences: state.data.preferences
  }
}

const mapDispatchToProps = function (dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

PrefView = connect(mapStateToProps, mapDispatchToProps)(PrefView);
export default PrefView;