import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory, Link } from 'react-router';
import RatingEntry from './../components/RatingEntry';

import api from './../../../utils/api';

import './../RatingViewStyles.scss';

const businessUrl = 'http://localhost:3002/api';

export default class RatingView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0
    };
  }

  handleRatingClick (rating, lastRating) {
    console.log('Clicked stars ! rating => ', rating, ', last ratings =>', lastRating);
    this.setState({ score: lastRating });
  }

  /** POST **/
  handleSubmit (txt) {
    api(businessUrl, '/business/review', 'post', {
      // business_id: business.business_id,
      rating: this.state.score,
      review: txt
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.error(error);
    });
  }

  render() {
    return (
      <div className="RatingView-container">
        <h1>{ this.props.business.name }</h1>
        <RatingEntry onRating={ this.handleRatingClick.bind(this) } onSubmit={ this.handleSubmit.bind(this) } />
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    business: state.restaurant,
  }
);

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators({}, dispatch) }
);

RatingView = connect(mapStateToProps, mapDispatchToProps)(RatingView);
export default RatingView;
