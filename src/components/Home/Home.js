import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  logout() {
    this.props.auth.logout();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
            <h4>
              You are logged in!
              <button
                onClick={() => this.logout()}
              >
                Log Out
              </button>
            </h4>
          )
        }
        {
          !isAuthenticated() && (
            <h4>
              You are not logged in! Please{' '}
              <button
                onClick={() => this.login()}
              >
                Log In
              </button>
              {' '}to continue.
            </h4>
          )
        }
      </div>
    );
  }
}

Home.propTypes = {
  auth: PropTypes.object,
  login: PropTypes.func,
  isAuthenticated: PropTypes.bool,
};

export default Home;
