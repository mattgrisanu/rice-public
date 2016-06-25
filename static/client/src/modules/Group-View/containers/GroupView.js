import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './../ducks/group-view-ducks.js';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import axios from 'axios';
import SearchInput, { createFilter } from 'react-search-input';

const KEYS_TO_FILTERS = ['name', 'email'];

const BusinessInstance = axios.create({
  baseURL: 'http://localhost:3002/api',
});
const RecInstance = axios.create({
  baseURL: 'http://localhost:3003/api',
});
class GroupView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
    this.addToGroup = this.addToGroup.bind(this);
  }

  componentDidMount() {
    const { user, friends, group } = this.props;
    this.getFriendsInfo();
    this.addToGroup(this.props.user.user_id);
  }

  getFriendsInfo() {
    // var user = this.props.user.usder_id
    instance.get('/users/users', {
      user_id: 'LiptonTea',
    })
      .then(function (response) {
        console.log('db response for GET users', response);
        //action to update redux store user.friends
        console.log(response.data)
        this.props.actions.importFriends(response.data)
      }.bind(this))
      .catch(function (error) {
        console.log(error);
        // handle user db error
      });

  }

  addToGroup(clientId) {
    this.props.actions.addToGroup(clientId);
  }

  handleSubmit() {
    const self = this;
    console.log("Group VIEW handleSubmit", self.props.group.users);
    const group  = self.props.group.users;
    const groupPref = self.props.group.preferences;
    const userLocation = self.props.location;

    instance.get('/users/group/preferences', {
      group,
    })
      .then(function (response) {
        console.log('db response for get friends preferences', response);
        //save response preferences back to action group preferences
        self.props.actions.importGroupPref(response.data);
        //send group preferences to axiospostRec
        RecInstance.post('/recommendation/getRec', {
          user_ids: group,
          preferences: {
            categories: groupPref,
          },
          location: userLocation,
        })
        .then(function (response) {
          console.log('db response for POST recommendation', response);
          self.props.actions.addRecs(response);
          //yelp api call
          BusinessInstance.post('/business/yelp', response)
            .then(function (successAdd) {
              console.log('back from saving yelp data pushing user to /restaurant')
              browserHistory.push('/restaurant');
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
        // need to handle friend db error
      });
    })
  }

  searchUpdated(term) {
    this.setState({searchTerm: term})
  }


  render () {
    const filteredFriends = this.props.friends.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));
    const self = this;

    return (
      <div className="GroupView-container">
        {console.log(this.props.friends)}
        <SearchInput className="search-input" onChange={this.searchUpdated.bind(this)} />
        {filteredFriends.map((user, i) =>  {
          return (
            <div className='FriendEntry-container' key={i} onClick={function () { this.addToGroup(user.clientId) }.bind(this)}>
              <div className='FriendEntry-fields'>{user.name}</div>
              <div className='FriendEntry-fields'>{user.email}</div>
            </div>
          )
        })}
        <button onClick={this.handleSubmit.bind(this)}>Submit Group</button>
      </div>
    );
  }
}


const mapStateToProps = function (state) {
  return {
    user: state.user,
    friends: state.user.friends,
    group: state.group
  };
};

const mapDispatchToProps = function (dispatch) {
  return { actions: bindActionCreators(actions, dispatch) };
};

GroupView = connect(mapStateToProps, mapDispatchToProps)(GroupView);
export default GroupView;