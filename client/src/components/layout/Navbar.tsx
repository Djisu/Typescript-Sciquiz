import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { RootState } from '../../reducers';
import { logout } from '../../actions/auth';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { AuthState } from '../../reducers/auth.ts';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();

  const navigate = useNavigate();

  const auth = useSelector((state: RootState) => state.auth);
  const isAuthenticated = useSelector((state: RootState) => state.auth) as AuthState;

  const [showDropdown, setShowDropdown] = useState(false);

  const isAdmin = localStorage.getItem('isAdmin');
  const booleanValue = !!(isAdmin === 'true');

  const toggleDropdown = () => {
    if (!booleanValue) {
      alert('You are not admin.');
    }
    setShowDropdown(!showDropdown);
  };

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const authLinks = (
    <div>
      <ul>
        <li>
          <Link to="/profiles">Students</Link>
        </li>
        <li>
          <Link to="/create-stutests">Take Test</Link>
        </li>
        <li>
          <Link to="/dashboard">
            <i className="fas fa-user" />
            <span className="hide-sm">Dashboard</span>
          </Link>
        </li>
        {booleanValue && (
          <li>
            <button className="btn btn-primary" onClick={toggleDropdown}>
              Admin
            </button>
            {showDropdown && (
              <div className="dropdown">
                <ul className="dropdown-content">
                  {/* <li>
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
                  </li>*/}
                  <li>
                    <Link to="/excel-uploads">Excel File Upload</Link>
                  </li>
                  <li>
                    <Link to="/user-edit">Edit User</Link>
                  </li>
                  <li>
                    <Link to="/mark-test">Mark Test</Link>
                  </li>
                  <li>
                    <Link to="/current-test-result">Current Test Result</Link>
                  </li>
                  <li>
                    <Link to="/view-overall-stats">View Overall Test Result</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
        )}
        <li>
        <a onClick={handleLogout} href="#!">
            <i className="fas fa-sign-out-alt" />
            <span className="hide-sm">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code" /> iQuiz
        </Link>
      </h1>
      {/* <Fragment>{auth.isAuthenticated ? authLinks : guestLinks}</Fragment> */}
      <Fragment>{(auth as any).isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

export default Navbar;









