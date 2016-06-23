import React from 'react';
import GoogleMap from 'google-map-react';
import FontAwesome from 'react-fontawesome';

const RestaurantViewEntry = React.createClass({
  propTypes: {
    initialZoom: React.PropTypes.number,
    mapCenterLat: React.PropTypes.number,
    mapCenterLng: React.PropTypes.number,
    styles: React.PropTypes.object,
    locUser: React.PropTypes.object,
    locRestaurant: React.PropTypes.object,
  },

  getDefaultProps() {
    return {
      initialZoom: 14,
      mapCenterLat: 43.6425569,
      mapCenterLng: -79.4073126,
      styles: {
        height: '400px',
      },
      locUser: {
        lat: 43.6425569,
        lng: -79.4073126,
      },
      locRestaurant: {
        lat: 43.6475569,
        lng: -79.4103126,
      },
    };
  },

  render() {
    return (
      <div>
        <h1>RestaurantViewEntry</h1>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6" style={this.props.styles}>
            <GoogleMap
              defaultCenter={[this.props.mapCenterLat, this.props.mapCenterLng]}
              defaultZoom={this.props.initialZoom}
            >
              <div className="place" lat={this.props.locRestaurant.lat} lng={this.props.locRestaurant.lng}>
                <FontAwesome name="map-marker" size="2x" />
                Place Name
              </div>

              <div className="place" lat={this.props.locUser.lat} lng={this.props.locUser.lng}>
                <FontAwesome name="dot-circle-o" size="2x" />
                Current Location
              </div>
            </GoogleMap>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  },
});

export default RestaurantViewEntry;
