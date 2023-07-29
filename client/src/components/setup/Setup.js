// Bring in React, useEffect
// Bring in PropTypes
// Bring in connect
// Bring in the action
import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import SetupActions from './SetupActions';
import { getCurrentProfile } from '../../actions/profile';

// Destructure props
const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
}) => {
  // console.log('in dashboard')

  // useEffect, call the action to run once
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary" style={{ marginTop: '80px' }}>
        Setup
      </h1>
      <p className="lead">
        <i className="fas fa-user"></i>
        Welcome {user && user.name}
      </p>
      {user.isAdmin  && (
        <Fragment>
          <SetupActions />
        </Fragment>
      )}
    </Fragment>
  );
};

// getCurrentProfile: a function to retrieve the profile: an action
// auth: auth is needed for authentication
// profile: it is needed. An object holding the profile
Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

// mapStateToProps to select the needed portion of the state
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

// Wrap connect around mapStateToProps and the action. Then component name
export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
