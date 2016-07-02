import React, { Component } from 'react';

export default class PrefEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-4">
        <div
          onClick={function () {this.props.addPref(this.props.pref_id.name)}.bind(this)}
          className={'option ' + this.props.pref_id.class}
        >
          <span>{this.props.pref_id.name}</span>
        </div>
      </div>
    );
  }
}
