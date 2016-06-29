import React from 'react';
import Navbar from '../components/Navbar';
import './Core.scss';

function CoreLayout({ children }) {
  return (
    <div className="app" id="app">
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <h1>Rice</h1>
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
