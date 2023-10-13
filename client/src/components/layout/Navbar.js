import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth.js';
//import SearchText from './SearchText.js';
import StuTests from '../stutest/StuTests.js';
import { useState } from 'react';
import { setAlert } from '../../actions/alert.js';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const isAdmin = localStorage.getItem('isAdmin');

  const booleanValue = isAdmin === 'true' ? true : false;

  //  console.log('isAdmin: ', isAdmin);

  const toggleDropdown = () => {
    if (!booleanValue) alert('You are not admin.');
    setShowDropdown(!showDropdown);
  };

  const authLinks = (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/profiles">Students</Link>
          </li>
          <li>
            <Link to="/create-stutests">Take Test</Link>
          </li>
          <li>
            <Link to="/show-general-stats">Test Statistics</Link>
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
              <button
                //  className="dropbtn"
                className="btn btn-primary"
                onClick={toggleDropdown}
              >
                Admin
              </button>
            )}

            {showDropdown && booleanValue && (
              <div className="dropdown">
                <ul className="dropdown-content">
                  <li>
                    <Link to="/create-difficultylevel">Difficulty</Link>
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
                  {/*<li>
                    <Link to="/create-tests">Test</Link>
                  </li>*/}
                  {/*<li>
                    <Link to="/create-user-performance">Test Result</Link>
                  </li>*/}
                  <li>
                    <Link to="/mark-test">Mark Test</Link>
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

      <div></div>
    </div>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Students</Link>
      </li>

      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      {/*<li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm">Logout</span>
        </a>
      </li>*/}
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
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
