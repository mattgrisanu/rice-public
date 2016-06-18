import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions, reducers } from './../ducks/ducks.js';
import { bindActionCreators } from 'redux';


class Landing extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { store } = this.context;
    console.log('Kat"s context', this.context, this.store, this.state, this);
  }

  render () {
    return (
      <div>
        <button onClick={ function () { 
          console.log('button log =>', this.props)
          this.props.actions.hello('asdfghj');
        }.bind(this) }>Sign in with AuthO</button>
        <button>Sign Up</button>
        {console.log('top level div =>', this.props)}
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return state;
}

const mapDispatchToProps = function (dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);