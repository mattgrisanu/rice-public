import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Rater from 'react-rater';
import './../RatingViewStyles.scss';

export default class RatingEntry extends Component {
  constructor (props) {
    super(props);

    this.state = {
      review: ''
    }
  }

  handleReviewSubmit () {
    this.setState({
      review: document.getElementsByClassName('review')[0].value
    }, function () { // make ajax
      this.props.onSubmit(this.state.review);
    });
  }


  render () {
    return (
      <form target="_self" method="post">
        <Rater className="react-rater" onRate={this.props.onRating} />
        <textarea name="review" className="review" cols="40" rows="10"></textarea>
        <button type="button" className="btn btn-primary">Cancel</button>
        <button type="button" className="btn btn-primary" onClick={ this.handleReviewSubmit.bind(this) }>Submit Rating</button>
      </form>
    )
  }

}
