import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import { browserHistory, Link } from 'react-router';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import * as actions from '../ducks/RestaurantView.actions';
import RestaurantViewEntry from '../components/RestaurantView.entry';

class RestaurantView extends Component {
  componentDidMount() {
    this.retrieveRestaurant();
    // const { restaurant, user } = this.props;
  }

  retrieveRestaurant() {
    console.log('[RestaurantView] retrieveRestaurant');

    // setup mock adapter
    const mock = new MockAdapter(axios);

    mock.onGet('/api/business/info').reply(200,
      {
        id: 1,
        business_id: 'tadu-ethiopian-kitchen-san-francisco-3',
        name: 'Tadu Ethopian Kitchen',
        address: '484 Ellis St',
        phone: '41577711111',
        city: 'San Francisco',
        state: 'CA',
        latitude: '37.7847934',
        longitude: '-122.4141884',
        rating: 5,
        review_count: 317,
        is_closed: '0',
        created_at: '2016-06-23T03:18:06.000Z',
        updated_at: '2016-06-23T03:18:06.000Z',
      }
    );

    // retrieve restaurant data
    axios.get('/api/business/info')
      .then(function (response) {
        console.log('[RestaurantView] /api/business/info', response.data);
        this.props.actions.restaurantUpdate(response.data);
      }.bind(this));
  }

  render() {
    if (typeof this.props.restaurant.latitude !== undefined) {
      return (
        <div className="RestaurantView">
          <RestaurantViewEntry {...this.props} />
        </div>
      );
    } else {
      return (
        <div className="RestaurantView">
          Waiting for restaurant...
        </div>
      );
    }
  }
}

const mapStateToProps = function (state) {
  return {
    // user: state.user,
    restaurant: state.restaurant,
  };
};

const mapDispatchToProps = function (dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
};

RestaurantView = connect(mapStateToProps, mapDispatchToProps)(RestaurantView);

export default RestaurantView;
