import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './../ducks/rating-view-ducks.js';
import { bindActionCreators } from 'redux';
import { browserHistory, Link } from 'react-router';
import RatingEntry from './../components/RatingEntry';

// import './react-star-rating.min.css';

export default class RatingView extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='RatingView-container'>
        <RatingEntry />
      </div>
    );
  }
};

// const = mapStateToProps = state => (
//   {}
// );

// const mapDispatchToProps = dispatch => (
//   { actions: bindActionCreators(actions, dispatch) };
// );

// RatingView = connect(mapStateToProps, mapDispatchToProps)(RatingView);