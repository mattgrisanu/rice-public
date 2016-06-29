import React from 'react';
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

  render() {
    console.log('RestaurantViewEntry.entry', this.props);

    return (
      <div>
        <h1>RestaurantViewEntry</h1>
        <div className="row RestaurantViewEntry-GoogleMap">
          <div className="col-md-12" style={this.props.styles}>
            <GoogleMap
              center={[Number(this.props.restaurant.latitude), Number(this.props.restaurant.longitude)]}
              defaultZoom={this.props.map.initialZoom}
            >
              <div className="place" lat={this.props.restaurant.latitude} lng={this.props.restaurant.longitude}>
                <FontAwesome name="map-marker" size="2x" />
                {this.props.restaurant.name}
              </div>

            </GoogleMap>
          </div>

          <div className="row RestaurantViewEntry-RestaurantInfo">
            <div className="col-md-12">
              <h2>{this.props.restaurant.name}</h2>
              <p>
                {this.props.restaurant.address}<br/>
                {this.props.restaurant.city}, {this.props.restaurant.state}<br/>
              </p>
            </div>
          </div>

          <div className="row RestaurantViewEntry-Buttons">
            <div className="col-md-6">
              <button type="button" onClick={this.props.actions.restaurantAccept.bind(null, 1)}>Accept</button>
            </div>
            <div className="col-md-6">
              <button type="button" onClick={this.props.actions.restaurantDecline.bind(null, 1)}>Decline</button>
            </div>
          </div>
        </div>
      </div>
    );
  },
});

export default RestaurantViewEntry;
