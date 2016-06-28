import React, { Component } from 'react';
import StarRating from 'react-star-rating';
import { browserHistory } from 'react-router';

export default class RatingEntry extends Component {
  constructor (props) {
    super(props)
  }

  handleRatingClick () {
    console.log('Clicked stars !');
  }
  
  render () {
    return (
      <form target="_self" method="post">
        <StarRating name="react-star-rating" caption="Rate this component!" totalStars={5} onRatingClick={ this.handleRatingClick.bind(this) }/>
        
        <textarea name="review" cols="40" rows="10"></textarea>
        <button type="button" className="btn btn-primary">Cancel</button>
        <button type="submit" className="btn btn-primary">Submit Rating</button>
      </form>
    )
  }

}
