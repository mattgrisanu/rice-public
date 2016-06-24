import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './../ducks/home-view-ducks.js';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import axios from 'axios';
import Dropdown from 'react-dropdown';

const locationsArr = [
  'Las Vegas', 'San Francisco', 'Pokeball',
];

const instance = axios.create({
  baseURL: 'http://localhost:3003/api',
});

class HomeView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: locationsArr[0],
    };
    this._onSelect = this._onSelect.bind(this);
    this.axiosPost = this.axiosPost.bind(this);
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

  axiosPost() {
    const users = [this.props.user.user_id].concat(this.props.friends);
    const preferences = this.props.preferences;
    instance.post('/recommendation/getRec', {
      user_ids: users,
      preferences: {
        categories: preferences,
      }
    })
    .then(function (response) {
      console.log('db response for POST recommendation', response);
      //action call to save to store all the recs
      //yelp api call



      browserHistory.push('/restaurant');
    })
    .catch(function (error) {
      console.log(error);
      // need to handle friend db error
    });
  }

  render() {
    return (
      <div className="container HomeView-container">
        <Dropdown options={locationsArr} onChange={this._onSelect} value="Location" placeholder="Select a Location" />
        <button onClick={this.axiosPost}>Solo</button>
        <button onClick={this.axiosPost}>Group</button>
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
    preferences: state.preferences,
    location: state.location,
  };
};

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
};

HomeView = connect(mapStateToProps, mapDispatchToProps)(HomeView);
export default HomeView;
