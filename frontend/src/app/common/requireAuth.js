import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { goBack } from 'connected-react-router';


export default function (WrappedComponent) {

  class Authenticate extends React.Component {

    // static propTypes = {
    //   isAuthenticated: Prop
    //   redirect: PropTypes.func.isRequired
    // };

    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      const { isAuthenticated, redirect } = this.props;

      if (!isAuthenticated) {
          redirect()
      }
    }

    render() {
      return (
        <div>
          { this.props.isAuthenticated ? <WrappedComponent {...this.props} /> : null }
        </div>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  };

  const mapDispatchToProps = (dispatch) => bindActionCreators({
    redirect: () => goBack()
  }, dispatch)

  // Authenticate.propTypes = PropTypes

  return connect(mapStateToProps, mapDispatchToProps)(Authenticate);
}