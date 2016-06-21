import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions, reducers } from './../ducks/ducks.js';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import NavBar from './../components/NavBar'
class Landing extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { store } = this.context;
    console.log('Kat"s context', this.context, this.store, this.state, this);
  }
  // _hiddenAction () {
  //   <button onClick={ function () { 
  //         console.log('button log =>', this.props)
  //         this.props.actions.hello('asdfghj');
  //       }.bind(this) }>Sign in with AuthO</button>
  // }

  loginAuthO() {
    console.log("AJAX im logging into Auth0//Auth0 redirect to ")

  }

  render () {
    return (
      <div className='login-container'>
        <NavBar />
        {this.props.children}
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
Landing = connect(mapStateToProps, mapDispatchToProps)(Landing);
export default Landing;