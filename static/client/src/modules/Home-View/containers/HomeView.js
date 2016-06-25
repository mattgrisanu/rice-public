import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './../ducks/home-view-ducks.js';
import { bindActionCreators } from 'redux';
import { browserHistory, Link } from 'react-router';
// import axios from 'axios';
import Dropdown from 'react-dropdown';
import axios2 from './../../../utils/api';
const locationsArr = [
  'Las Vegas', 'San Francisco', 'Pokeball',
];
const businessURL = 'http://localhost:3002/api';
const recURL = 'http://localhost:5000/api';


class HomeView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: locationsArr[0],
    };
    this._onSelect = this._onSelect.bind(this);
    this.axiosSoloPost = this.axiosSoloPost.bind(this);
  }

  componentDidMount() {
    const { user, friends, location, preferences } = this.props;
    // call this.getAllUsers() to update state with users from DB
  }

  _onSelect(option) {
    this.setState({
      selected: option.value,
    });
    this.props.actions.changeLocation(option.value);
  }

  axiosSoloPost() {
    //ADD addtributes that people are looking for
    const users = [this.props.user.user_id].concat(this.props.friends);
    const userPreferences = this.props.preferences;
    const userLocation = this.props.location;
    axios2(recURL, '/restaurants', post, {
      user_ids: users,
      preferences: {
        categories: userPreferences,
        attributes: [],
      },
      location: userLocation,
    })
    .then(function (response) {
      console.log('db response for POST recommendation', response);
      this.props.actions.addRecs(response);
      //yelp api call
      axios2(businessURL, '/business/yelp', 'post', response)
        .then(function (successAdd) {
          console.log('back from saving yelp data pushing user to /restaurant', successAdd);
          browserHistory.push('/restaurant');
        });
    }.bind(this))
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="container HomeView-container">
        <Dropdown options={locationsArr} onChange={this._onSelect} value="Location" placeholder="Select a Location" />
        <button onClick={this.axiosSoloPost}>Solo</button>
        <button><Link to="/group">Make Group</Link></button>
      </div>
    );
  }
}
HomeView.propTypes = {
  user: React.PropTypes.object,
  friends: React.PropTypes.array,
  location: React.PropTypes.object,
};

const mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user,
    friends: state.user.friends,
    preferences: state.user.preferences,
    location: state.location,
  };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
};

HomeView = connect(mapStateToProps, mapDispatchToProps)(HomeView);
export default HomeView;
