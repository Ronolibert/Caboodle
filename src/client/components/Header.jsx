import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '../config';

class Header extends React.Component {

  constructor(props) {
    super(props);

    this.auth0 = new Auth0({
      domain: AUTH0_DOMAIN,
      clientID: AUTH0_CLIENT_ID,
      callbackOnLocationHash: true,
      callbackURL: window.location.origin,
    });

    this.lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN);
  }

  render() {
    return (
      <nav>
        <div className="logo"><Link to="/">C</Link></div>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    router: state.routing,
  };
}


export default connect(mapStateToProps)(Header);
