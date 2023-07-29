import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import SearchText from './SearchText';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const isAdmin = localStorage.getItem('isAdmin')

  const booleanValue = isAdmin === 'true' ? true : false;

  const authLinks = (
    <div>
      <ul>
        <li>
          <Link to="/profiles">Students</Link>
        </li>

        <li>
          <SearchText />
        </li>
        <li>
          <Link to="/dashboard">
            {' '}
            <i className="fas fa-user" />{' '}
            <span className="hide-sm">Dashboard</span>
          </Link>
        </li>

        <li>
          {booleanValue && (
            <div className="dropdown">
              <Link to="#admin">
                Admin <i className="fa fa-caret-down"></i>
              </Link>
              <ul className="dropdown-content">
                <li>
                  <Link to="/create-difficultylevel">Difficulty Level</Link>
                </li>
                <li>
                  <Link to="/create-topic">Topic</Link>
                </li>
                <li>
                  <Link to="/create-subject">Subject</Link>
                </li>
                <li>
                  <Link to="/create-question">Question</Link>
                </li>
                <li>
                  <Link to="/create-tests">Test</Link>
                </li>
                <li>
                  <Link to="/create-user-performance">Test Result</Link>
                </li>
              </ul>
            </div>
          )}
        </li>

        <li>
          <a onClick={logout} href="#!">
            <i className="fas fa-sign-out-alt" />{' '}
            <span className="hide-sm">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );

  const guestLinks = (
    <ul>
      <li>
        <SearchText />
      </li>
      <li>
        <Link to="/profiles">Students</Link>
      </li>

      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> iQuiz
        </Link>
      </h1>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
