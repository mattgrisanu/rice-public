import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="container">
          <Link className="navbar-brand" to="/">Rice</Link>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="onboarding/preferences">Onboarding</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}

export default Navbar;
