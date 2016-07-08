import React from 'react';
import { Link } from 'react-router';
import './Core.scss';

function CoreLayout({ children }) {
  return (
    <div className="app" id="app">
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Link to="/home"><h1 className="heading">Rice</h1></Link>
          </div>
          <div className="col-md-3"></div>
        </div>

        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 Core">
            {children}
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

CoreLayout.propTypes = {
  children: React.PropTypes.element,
};

export default CoreLayout;
