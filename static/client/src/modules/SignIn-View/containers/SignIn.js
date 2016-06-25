import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login, getUser, logoutUser } from '../ducks/auth';

class SignIn extends Component {
	render() {
		const { user: { isFetching, isAuthenticated }, loginStart, logoutUser } = this.props;
		return (
			<div className="center-block w-xxl w-auto-xs p-y-md">
			  <div className="navbar">
			    <div className="pull-center">
			    </div>
			  </div>
			  <div className="p-a-md box-color r box-shadow-z1 text-color m-a">
			    <div className="m-b text-sm">Sign in Below</div>
			    <div>
			      <button onClick={loginStart}>
			      	Login
			      </button>

			      <button onClick={logoutUser}>
			      	Logout
			      </button>
			    </div>
			  </div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
  user: getUser(state)
});

const mapDispatchToProps = dispatch => ({
	loginStart() {
		dispatch(login());
	},
	logoutUser() {
		dispatch(logoutUser());
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
