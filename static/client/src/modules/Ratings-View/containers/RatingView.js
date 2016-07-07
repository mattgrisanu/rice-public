import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';

import * as actions from './../ducks/rating-view-ducks';
import RatingEntry from './../components/RatingEntry';

import getSecureApiClient from './../../../utils/aws';

const apigClient = getSecureApiClient();


export default class RatingView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: 0,
    };
  }

  handleCancel() {
    browserHistory.push('/home');
  }

  handleRatingClick(rating, lastRating) {
    if (lastRating !== undefined) {
      this.setState({ score: rating });
    }
  }

  /** POST **/
  handleSubmit(txt) {
    const body = {
      clientId: this.props.user.clientId,
      business_id: this.props.business.business_id,
      rating: this.state.score,
      review: txt,
    };

    apigClient.apiBusinessReviewPost(null, body)
      .then((response) => {
        console.log(response);
        // call action to change toRate to false in store
        this.props.actions.hasRated();
        browserHistory.push('/home');
      }).catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="RatingView-container">
        <h2>{ this.props.business.name }</h2>
        <RatingEntry onCancel={ this.handleCancel.bind(this) } onRating={ this.handleRatingClick.bind(this) } onSubmit={ this.handleSubmit.bind(this) } />
      </div>
    );
  }
}

RatingView.propTypes = {
  actions: React.PropTypes.object,
  user: React.PropTypes.object,
  business: React.PropTypes.object,
};

const mapStateToProps = state => (
  {
    user: state.user,
    business: state.restaurant,
  }
);

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators(actions, dispatch) }
);

RatingView = connect(mapStateToProps, mapDispatchToProps)(RatingView);
export default RatingView;
