import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { actions } from './../ducks/rating-view-ducks.js';
import { bindActionCreators } from 'redux';
import { browserHistory, Link } from 'react-router';
import RatingEntry from './../components/RatingEntry';
import StarRating from 'react-star-rating';

// import './react-star-rating.min.css';

export default class RatingView extends Component {
  constructor (props) {
    super(props)
    // this.handleRatingClick.bind(this, pass, args, here)
  }

  handleRatingClick(e, data) {
    console.log(e, data)
    // alert('You left a ' + data.rating + ' star rating for ' + data.caption);
  } 
  render () {
    return (
      <div className='RatingView-container'>
        <h1>{ this.props.business_name }</h1>
        <form onSubmit={this.handleRatingClick}>
          <StarRating name="react-star-rating" caption="Rate this component!" totalStars={5} />
          <button type="submit" className="btn btn-primary">Submit Rating</button>
        </form>      
      </div>
    );
  }
};
        // <RatingEntry { ...this.props } />

const mapStateToProps = state => (
  {
    business_id: state.restaurant.business_id,
    business_name: state.restaurant.name,
    business_address: state.restaurant.address,
    business_city: state.restaurant.city,
    business_state:  state.restaurant.state
  }
);

const mapDispatchToProps = dispatch => (
  { actions: bindActionCreators({}, dispatch) }
);

RatingView = connect(mapStateToProps, mapDispatchToProps)(RatingView);