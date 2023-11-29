import React, { Fragment, useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { Link, useParams, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../layout/Spinner.js';
import ProfileTop from './ProfileTop.js';
import ProfileAbout from './ProfileAbout.js';

import { getProfileById, getProfiles } from '../../actions/profile.js';
import { userAnsweredQuestions } from '../../actions/auth.js';
import { setAlert } from '../../actions/alert.js';
import PieChart from '../profiles/PieChartCorrect.js';
import { Pie } from 'react-chartjs-2';
import ProfileTestResult from './ProfileTestResult.js';
import ProfileMarkTest from './ProfileMarkTest.js';

const Profile = ({ profile: { profile }, auth }) => {
  const dispatch = useDispatch();
  //  console.log('in Profile');  //

  const isAdmin = localStorage.getItem('isAdmin');

  const booleanValue = isAdmin === 'true' ? true : false;

  //  console.log('isAdmin: ', isAdmin);

  //  if (!booleanValue) {
  //    setAlert('You are not admin.', 'danger');
  //
  //    return <Navigate to="/dashboard" />;
  //  }

  const { id } = useParams();

  //  console.log('profile::: ', profile);
  //
  //  console.log('in Profile');
  //  console.log('id is ', id);

  const profileX = useSelector((state) => state.profile);

  if (profileX.length === 0) {
    dispatch(setAlert('No profile loaded', 'danger'));
    return;
  }

  useEffect(() => {
    //console.log('in useEffect   dispatch(getProfileById(id));', id);

    dispatch(getProfileById(id));
  }, [dispatch, id]);

  //  console.log('profileX: ', profileX.profile.email);

  if (!profile || Object.keys(profile).length === 0) {
    dispatch(setAlert('No profile loaded', 'danger'));
    return <Spinner />;
  }

  // Destructure the profile object to get individual properties     getProfileById, id
  const { bio, email, name, school, status } = profile;

  //  console.log('email===== ', email);

  return (
    <section className="container">
      {profile === null ? (
        <Spinner />
      ) : (
        <Fragment>
          <Link to="/profiles" className="btn btn-light">
            Back To Profiles
          </Link>

          {auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            )}

          <div className="profile-grid my-1">
            <ProfileTop profile={profile} />
            <ProfileAbout profile={profile} />
          </div>

          {/*{auth.isAuthenticated &&
            auth.loading === false &&
            auth.user._id === profile.user._id && (*/}
          <div className=" d-flex flex-column">
            <div className="col-md-6">
              <ProfileMarkTest userId={profile.user._id} />
            </div>
            <div className="col-md-6">
              <ProfileTestResult userId={profile.user._id} />
            </div>
          </div>
          {/*)}*/}
        </Fragment>
      )}
    </section>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
