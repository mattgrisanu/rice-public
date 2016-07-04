import React, { Component } from 'react';
import Rater from 'react-rater';
import './RatingEntry.scss';

export default class RatingEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      review: '',
    };
  }

  handleReviewSubmit() {
    this.setState({
      review: document.getElementsByClassName('review')[0].value,
    }, function () {
      this.props.onSubmit(this.state.review);
    });
  }


  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form target="_self" method="post">
            <div className="form-group">
              <Rater className="react-rater" onRate={this.props.onRating} />
            </div>
            <div className="form-group">
              <textarea name="review" className="form-control review" cols="40" rows="10"></textarea>
            </div>

            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <button type="button" className="btn btn-lg btn-danger btn-block">Cancel</button>
                </div>
                <div className="col-md-6">
                  <button type="button" className="btn btn-lg btn-success btn-block" onClick={ this.handleReviewSubmit.bind(this) }>Submit Rating</button>
                </div>
              </div>
            </div>
          </form>

        </div>
      </div>
    );
  }
}

RatingEntry.propTypes = {
  onSubmit: React.PropTypes.func,
  onRating: React.PropTypes.func,
};
