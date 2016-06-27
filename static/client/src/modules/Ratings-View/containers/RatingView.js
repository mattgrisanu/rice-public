import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './../ducks/rating-view-ducks.js';
import { bindActionCreators } from 'redux';
import { browserHistory, Link } from 'react-router';
import PrefEntry from './../components/RatingEntry';
import axios from 'axios';

export default class RatingView extends Component {
  constructor (props) {

  }

  render () {
    return (
      <div className='RatingView-container'>
        
      </div>
    );
  }
};

const = mapStateToProps = state => (
  {}
);

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(actions, dispatch) };
);

RatingView = connect(mapStateToProps, mapDispatchToProps)(RatingView);