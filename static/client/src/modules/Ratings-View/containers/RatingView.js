import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { actions } from './../ducks/rating-view-ducks.js';
import { bindActionCreators } from 'redux';
import { browserHistory, Link } from 'react-router';
// import RatingEntry from './../components/RatingEntry';
// import StarRating from 'react-star-rating';
import Rater from 'react-rater';
import './../RatingViewStyles.scss';
// import './react-star-rating.min.css';

export default class RatingView extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { business } = this.props;
    //update state.user.user_id = tesetData.clientId
  }

  handleRate(rating, lastRating) {
    console.log('clicked rating: ', lastRating);
  }
  render() {
    return (
      <div className="RatingView-container">
        <h1>{ this.props.business.name }</h1>
        <Rater className="react-rater" onRate={this.handleRate.bind(this)} />

      </div>
    );
  }
}
        // <RatingEntry { ...this.props } />

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
