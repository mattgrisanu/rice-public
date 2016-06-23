import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { browserHistory, Link } from 'react-router';
// import axios from 'axios';

import { actions } from '../ducks/RestaurantView.actions';
import RestaurantViewEntry from '../components/RestaurantView.entry';

class RestaurantView extends Component {
  render() {
    return (
      <div className="RestaurantView">
        <RestaurantViewEntry />
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return state;
};

const mapDispatchToProps = function (dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
};

RestaurantView = connect(mapStateToProps, mapDispatchToProps)(RestaurantView);

export default RestaurantView;
