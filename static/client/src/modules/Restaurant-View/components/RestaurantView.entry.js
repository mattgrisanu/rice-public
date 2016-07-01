import React from 'react';
import { browserHistory } from 'react-router';
import GoogleMap from 'google-map-react';
import FontAwesome from 'react-fontawesome';
import './RestaurantView.entry.scss';

const RestaurantViewEntry = React.createClass({
  propTypes: {
    styles: React.PropTypes.object,
    map: React.PropTypes.object,
    user: React.PropTypes.object,
    restaurant: React.PropTypes.object,
    restaurantAccept: React.PropTypes.func,
    restaurantDecline: React.PropTypes.func,
  },

  getDefaultProps() {
    return {
      map: {
        initialZoom: 14,
        centerLat: 43.6425569,
        centerLng: -79.4073126,
      },
      styles: {
        height: '400px',
      },
      user: {
        location: {
          lat: 43.6425569,
          lng: -79.4073126,
        },
      },
    };
  },

  handleAccept() {
    this.props.actions.restaurantAccept();
    browserHistory.push('/rating');
  },

  handleDecline() {
    this.props.actions.restaurantDecline();
  },

  render() {
    console.log('RestaurantViewEntry.entry', this.props);

    return (
      <div>
        <h2>{this.props.restaurant.name}</h2>
        <div className="row RestaurantViewEntry-GoogleMap">
          <div className="col-md-12" style={this.props.styles}>
            <GoogleMap
              center={[Number(this.props.restaurant.latitude), Number(this.props.restaurant.longitude)]}
              defaultZoom={this.props.map.initialZoom}
            >
              <div className="place" lat={this.props.restaurant.latitude} lng={this.props.restaurant.longitude}>
                <FontAwesome name="map-marker" size="2x" />
              </div>

            </GoogleMap>
          </div>
        </div>

        <div className="row RestaurantViewEntry-RestaurantInfo">
          <div className="col-md-12">
            <div className="address">
              <i className="fa fa-building-o" aria-hidden="true"></i> {this.props.restaurant.address}<br/>
              {this.props.restaurant.city}, {this.props.restaurant.state}<br/>
            </div>
            <div className="phone">
              <i className="fa fa-phone" aria-hidden="true"></i> {this.props.restaurant.phone}
            </div>
          </div>
        </div>

        <div className="row RestaurantViewEntry-Buttons">
          <div className="col-md-6 text-center">
            <button type="button" className="btn btn-danger btn-lg" onClick={this.handleDecline}>Decline</button>
          </div>
          <div className="col-md-6 text-center">
            <button type="button" className="btn btn-success btn-lg" onClick={this.handleAccept}>Accept</button>
          </div>
        </div>
      </div>
    );
  },
});

export default RestaurantViewEntry;
