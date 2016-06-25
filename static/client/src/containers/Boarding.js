import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export default function checkBoarded(Component, { withValue, redirectTo }) {
  class CompletedComponent extends React.Component {
    static propTypes = {
      user: PropTypes.object.isRequired,
      dispatch: PropTypes.func.isRequired
    };

    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      const { dispatch } = this.props;

      if (this._shouldRedirect()) {
        dispatch(push(redirectTo));
      }
    }

    _shouldRedirect() {
      return this.props.user.boarded === withValue;
    }

    render() {
      return (
        <div className="boarded">
          { !this._shouldRedirect() ? <Component {...this.props} /> : null }
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      user: state.user
    };
  };

  return connect(mapStateToProps)(CompletedComponent);
}
