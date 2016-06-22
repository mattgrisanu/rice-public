import React from 'react';
import Navbar from '../components/Navbar';

function CoreLayout({ children }) {
  return (
    <div className="app" id="app">
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

CoreLayout.propTypes = {
  children: React.PropTypes.element,
};

export default CoreLayout;
