import React, { Component } from 'react';
import { browserHistory } from 'react-router';

export default class PrefEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div onClick={function() {this.props.addPref(this.props.pref_id)}.bind(this)} className='PrefEntry-circle'>Hi {this.props.pref_id}</div>
    )
  }
};