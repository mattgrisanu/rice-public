import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './../ducks/home-view-ducks.js';
import { bindActionCreators } from 'redux';
import { browserHistory, Link } from 'react-router';
// import axios from 'axios';
import Dropdown from 'react-dropdown';
import axios2 from './../../../utils/api';
import './HomeView.scss';
const locationsArr = [
  'Las Vegas', 'San Francisco', 'Pokeball',
];
const businessURL = 'http://localhost:3002/api';
const recURL = 'http://first-371241559.us-east-1.elb.amazonaws.com/query';
const userURL = 'http://localhost:3001/api';


class HomeView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: locationsArr[0],
    };
    this._onSelect = this._onSelect.bind(this);
    this.axiosSoloPost = this.axiosSoloPost.bind(this);
  }
  componentWillMount() {
    this.importPreferences();
    this.getFriendsInfo();
  }

  componentDidMount() {
    this.getFriendsInfo();
    const { user, friends, location, preferences } = this.props;
    // call this.getAllUsers() to update state with users from DB
  }


  getFriendsInfo() {
    const user = this.props.user.clientId;

    axios2(userURL, '/users/friends', 'post', {
      clientId: user,
    })
      .then(function (response) {
        console.log('db response for post users', response);
        //action to update redux store user.friends
        console.log(response.data)
        this.props.actions.importFriends(response.data);
      }.bind(this))
      .catch(function (error) {
        console.log(error);
        // handle user db error
      });
  }

  importPreferences() {
    const user = this.props.user.clientId;
    axios2(userURL, '/users/preferences', 'post', {
      clientId: user,
    })
    .then(function(response) {
      //call action to update user (response.data)
      this.props.actions.importPreferences(response.data);
    }.bind(this))
    .catch(function(err) {
      console.error(err);
    });
  }

  _onSelect(option) {
    this.setState({
      selected: option.value,
    });
    this.props.actions.changeLocation(option.value);
  }

  axiosSoloPost() {
    //ADD addtributes that people are looking for
    const users = [this.props.user.clientId].concat(this.props.friends);
    const userPreferences = this.props.preferences;
    const userLocation = this.props.location;
    // axios2(recURL, '/filtered_recs', 'post', {
    //   // user_ids: users,
    //   // preferences: {
    //   //   categories: userPreferences,
    //   //   attributes: [],
    //   // },
    //   // location: userLocation,
    //   users: users[0],
    //   query: userPreferences[0],
    // })
    // .then(function (response) {
    //   console.log('db response for POST recommendation', response);
    var response = {
    response: [{
      cuisine: "cafes",
      id: "unlessstring",
      name: "The Beat Coffeehouse & Records",
      rating: 0.20202,
      userRated: false
    },
    {
      cuisine: "french",
      id: "unlessstring",
      name: "Sunrise Coffee",
      rating: 0.20202,
      userRated: false
    }]
  }
      this.props.actions.addRecs(response);
      axios2(businessURL, '/business/yelp', 'post', response)
        .then(function (successAdd) {
          console.log('back from saving yelp data pushing user to /restaurant', successAdd.config.data);
          browserHistory.push('/restaurant');
        });
    // }.bind(this))
    // .catch(function (error) {
    //   console.error(error);
    // });
    //ERASE AFTER DAN's REC is up
          // browserHistory.push('/restaurant');

  }

  render() {
    return (
      <div className="HomeView-container">
        <div className="option option-solo" onClick={this.axiosSoloPost.bind(null)}><h3>Get a Solo Recommendation</h3></div>
        <Link to="/group"><div className="option option-group"><h3>Get a Group Recommendation</h3></div></Link>
        { this.props.restaurant.toRate ? <Link to="/rating"><div className="option option-rating"><h3>Rate Your Last Restaurant</h3></div></Link> : null }

        <div className="option option-location"><h3>Select Your Location</h3></div>
        <Dropdown options={locationsArr} onChange={this._onSelect} value={locationsArr[0]} placeholder="Select Your Location" />
      </div>
    );
  }
}
HomeView.propTypes = {
  user: React.PropTypes.object,
  friends: React.PropTypes.array,
  location: React.PropTypes.object,
  restaurant: React.PropTypes.object,
};

const mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user,
    friends: state.user.friends,
    preferences: state.user.preferences,
    location: state.location,
    restaurant: state.restaurant,
  };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
};

HomeView = connect(mapStateToProps, mapDispatchToProps)(HomeView);
export default HomeView;
