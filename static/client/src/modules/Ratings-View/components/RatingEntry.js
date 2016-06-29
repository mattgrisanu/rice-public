import React, { Component } from 'react';
// import './react-star-rating.min.scss';
// import StarRating from 'react-star-rating';
import { browserHistory } from 'react-router';
import api from './../../../utils/api';

const businessUrl = 'http://localhost:3002/api';

export default class RatingEntry extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    this.handleSubmit();
  }

  handleRatingClick () {
    console.log('Clicked stars !');
  }
  
  /** POST
  * Assume get both stars and review
  */
  handleSubmit () { // pass down to entry and access local state in ratingEntry
    // review < 255 char
    // rating: integers and between 0 and 5, inclusive

    api(businessUrl, '/business/review', 'post', {
      business_id: 'Tea',
      rating: 5,
      review: 'asdfhgndbrt'
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.error(error);
    });
  }

  /**
  * onHover => highlight
  * onclick => send to state, stop highlight, fix color
  *
  *
  *
  *
  */  
  render () {
    return (
      <form target="_self" method="post">
        
        <textarea name="review" cols="40" rows="10"></textarea>
        <button type="button" className="btn btn-primary">Cancel</button>
        <button type="submit" className="btn btn-primary">Submit Rating</button>
      </form>
    )
  }

}
