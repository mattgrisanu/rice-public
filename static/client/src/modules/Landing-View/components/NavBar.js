import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Rice</Link>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><Link to="/onboarding/preferences" className="pure-menu-link">Start Onboarding preferences</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
