import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login, getUser, logoutUser } from '../ducks/auth';
import './Signin.scss';

class SignIn extends Component {
	render() {
		const { user: { isFetching, isAuthenticated }, loginStart, logoutUser } = this.props;
		return (
			<div className="SignInView">
				<div className="row">
					<div className="col-md-12">
						<div className="rice-signin"></div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<button className="btn btn-lg btn-success btn-block" onClick={loginStart}>Login</button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
  user: getUser(state),
});

const mapDispatchToProps = dispatch => ({
	loginStart() {
		dispatch(login());
	},
	logoutUser() {
		dispatch(logoutUser());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
