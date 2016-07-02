import React, { Component } from 'react';

export default class PrefEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
    };
  }

  handleSelect() {
    this.props.addPref(this.props.pref_id.name);
    this.setState({ selected: true });
  }

  render() {
    return (
      <div className="col-md-4">
        <div
          onClick={this.handleSelect.bind(this)}
          className={'option ' + this.props.pref_id.class + ' ' + (this.state.selected ? 'selected' : null)}
        >
          <span>{this.props.pref_id.name}</span>
        </div>
      </div>
    );
  }
}
