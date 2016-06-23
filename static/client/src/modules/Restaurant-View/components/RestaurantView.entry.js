import React from 'react';
import GoogleMap from 'google-map-react';
import FontAwesome from 'react-fontawesome';

const RestaurantViewEntry = React.createClass({
  propTypes: {
    styles: React.PropTypes.object,
    map: React.PropTypes.object,
    user: React.PropTypes.object,
    restaurant: React.PropTypes.object,
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
      restaurant: {
        location: {
          lat: 43.6475569,
          lng: -79.4103126,
        },
      },
    };
  },

  render() {
    console.log('RestaurantViewEntry.entry', this.props);

    return (
      <div>
        <h1>RestaurantViewEntry</h1>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="row RestaurantViewEntry-GoogleMap">
              <div className="col-md-12" style={this.props.styles}>
                <GoogleMap
                  defaultCenter={[this.props.map.centerLat, this.props.map.centerLng]}
                  defaultZoom={this.props.map.initialZoom}
                >
                  <div className="place" lat={this.props.restaurant.location.lat} lng={this.props.restaurant.location.lng}>
                    <FontAwesome name="map-marker" size="2x" />
                    Place Name
                  </div>

                  <div className="place" lat={this.props.user.location.lat} lng={this.props.user.location.lng}>
                    <FontAwesome name="dot-circle-o" size="2x" />
                    Current Location
                  </div>
                </GoogleMap>
              </div>

              <div className="row RestaurantViewEntry-RestaurantInfo">
                <div className="col-md-12">

                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  },
});

export default RestaurantViewEntry;
