import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getSecureApiClient from '../../../utils/aws';
// import MockAdapter from 'axios-mock-adapter';

import * as actions from '../ducks/RestaurantView.actions';
import RestaurantViewEntry from '../components/RestaurantView.entry';

let RestaurantView = React.createClass({
  propTypes: {
    actions: React.PropTypes.object,
    restaurant: React.PropTypes.object,
    recommendation: React.PropTypes.array,
    group: React.PropTypes.object,
  },

  componentDidMount() {
    this.refreshComponent();
  },

  componentDidUpdate(prevProps) {
    if (this.props.recommendation !== prevProps.recommendation) {
      this.refreshComponent();
    }
  },

  refreshComponent() {
    const restaurant = this.retrieveRecommendations();
    this.retrieveRestaurant(restaurant);
  },

  retrieveRecommendations() {
    // mock recommendations array
    const mockRecommendations = [
      {
        cuisine: 'ethiopian',
        id: 'mock-1',
        name: 'Mock Restaurant 1',
        rating: 0.25202,
        userRated: false,
      },
      {
        cuisine: 'cafes',
        id: 'mock-2',
        name: 'Mock Restaurant 2',
        rating: 0.20202,
        userRated: false,
      },
      {
        cuisine: 'french',
        id: 'mock-3',
        name: 'Mock Restaurant 3',
        rating: 0.20202,
        userRated: false,
      },
    ];

    // retrieve restaurant recommendations from store
    const recommendations = this.props.recommendation || mockRecommendations;
    // return the next recommendation in the store
    return recommendations[0] || undefined;
  },

  retrieveRestaurant(recommendation) {
    // did we receive a restaurant?
    if (!recommendation) {
      return;
    }

    // // setup mock adapter
    // const mock = new MockAdapter(axios);

    // // mock for '/api/business/info?name=RESTAURANT.NAME'
    // mock.onGet(/\/api\/business\/info\?name\=.*/g).reply(function (config) {
    //   console.log('MOCK', config);

    //   return [
    //     200,
    //     {
    //       id: 1,
    //       business_id: 'tadu-ethiopian-kitchen-san-francisco-3',
    //       name: config.url.split('=')[1],
    //       address: '484 Ellis St',
    //       phone: '41577711111',
    //       city: 'San Francisco',
    //       state: 'CA',
    //       latitude: '37.7847934',
    //       longitude: '-122.4141884',
    //       rating: 5,
    //       review_count: 317,
    //       is_closed: '0',
    //       created_at: '2016-06-23T03:18:06.000Z',
    //       updated_at: '2016-06-23T03:18:06.000Z',
    //     },
    //   ];
    // });
    const apigClient = getSecureApiClient();
    const businessParams = {
      name: recommendation,
    };
    console.log("THIS IS THE REC", businessParams)

    apigClient.apiBusinessInfoGet(businessParams, {})
    .then(response => {
      console.log('[RestaurantView] apiBusinessInfoGet response', response);
      this.props.actions.restaurantUpdate(response.data);
    })
    .catch(error => {
      console.log('[RestaurantView] apiBusinessInfoGet error', error);
    });
  },

  render() {
    let view;

    if (this.props.restaurant.latitude) {
      view = (
        <div className="RestaurantView">
          <RestaurantViewEntry {...this.props} refresh={this.refreshComponent} />
        </div>
      );
    } else {
      view = (
        <div className="RestaurantView">
          Waiting for restaurant...
        </div>
      );
    }

    return view;
  },
});

function mapStateToProps(state) {
  return {
    restaurant: state.restaurant,
    recommendation: state.recommendation,
    group: state.group,
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
}

RestaurantView = connect(mapStateToProps, mapDispatchToProps)(RestaurantView);

export default RestaurantView;
