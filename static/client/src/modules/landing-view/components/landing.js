import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
// const Landing = React.createClass({

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <button>Sign in with AuthO</button>
        <button>Sign Up</button>
        {console.log(this.props)}
      </div>
    );
  }
// });
}
export default connect()(Landing);