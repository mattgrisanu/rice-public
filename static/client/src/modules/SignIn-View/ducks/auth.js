import Auth0Lock from 'auth0-lock';
import Auth0 from 'auth0-js';
import { combineReducers } from 'redux';
import { browserHistory } from 'react-router';

const DAN = '0n9MhBFbxQkiNcGumeeryy7q3seWy4oz';
const auth0Namespace = 'dconger.auth0.com';

/* Constants */
const LOCK_SUCCESS = 'LOCK_SUCCESS'
const LOCK_ERROR = 'LOCK_ERROR'
const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
const LOGOUT_SUCCESS= 'LOGOUT_SUCCESS'
const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

/* Reducer */
const defaultState = {
	isFetching: false,
	isAuthenticated: localStorage.getItem('id_token') ? true : false
}

export default function reducer(state = defaultState, { type, ...payload } = {}) {
	switch(type) {
		case LOCK_SUCCESS:
			return Object.assign({}, state, {
		        isFetching: false,
		        isAuthenticated: true,
		        errorMessage: ''
		    })
		case LOGOUT_SUCCESS:
			return Object.assign({}, state, {
		        isFetching: true,
		        isAuthenticated: false
		    })
		default: return state;
	}
}

/* Action Creators */

function showLock() {
  return {
    type: SHOW_LOCK
  }
}

function lockSuccess(profile, token) {
  return {
    type: LOCK_SUCCESS,
    profile,
    token
  }
}

function lockError(err) {
  return {
    type: LOCK_ERROR,
    err
  }
}

function getOptionsForAWS(token) {
  return {
    "id_token": token, 
    "role":"arn:aws:iam::334429795694:role/access-to-ec2-per-user",
    "principal": "arn:aws:iam::334429795694:saml-provider/auth0-provider"
  }
}

export function login() {
  const lock = new Auth0Lock(DAN, auth0Namespace);
  const params = {
      authParams: { scope: 'openid email' }
  };

  return dispatch => {
    lock.show(params, (err, profile, token) => {
      if(err) {
        dispatch(lockError(err))
        return
      }
      localStorage.setItem('profile', JSON.stringify(profile))
      localStorage.setItem('id_token', token)

      const options = getOptionsForAWS(token);

      const auth0 = new Auth0({
        domain: auth0Namespace,
        clientID: DAN,
        callbackURL: 'dummy'
      });

      auth0.getDelegationToken(options, (err, delegationResult) => {
        localStorage.setItem('awsAccessKey', delegationResult.Credentials.AccessKeyId);
        localStorage.setItem('awsSecretKey', delegationResult.Credentials.SecretAccessKey);
        localStorage.setItem('awsSessionToken', delegationResult.Credentials.SessionToken);
        dispatch(lockSuccess(profile, token))
        browserHistory.push('/home');
      });
    })
  }
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
    localStorage.removeItem('awsAccessKey')
    localStorage.removeItem('awsSecretKey')
    localStorage.removeItem('awsSessionToken')

    dispatch(receiveLogout())
  }
}

export const getUser = state => state.user;
