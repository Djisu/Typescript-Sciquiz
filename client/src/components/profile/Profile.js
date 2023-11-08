import React, { Fragment, useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../layout/Spinner.js';
import ProfileTop from './ProfileTop.js';
import ProfileAbout from './ProfileAbout.js';

import { getProfileById } from '../../actions/profile.js';
import { userAnsweredQuestions } from '../../actions/auth.js';
import { setAlert } from '../../actions/alert.js';
//import Chart from '../../components/profiles/Chart.js';
import PieChart from '../profiles/PieChartCorrect.js';
import { Pie } from 'react-chartjs-2';
import ProfileTestResult from './ProfileTestResult.js';

const Profile = ({ profile: { profile }, auth }) => {
  //  const topicsData = useSelector((state) => state.topics.topicsData);
  //
  //  if (topicsData.length === 0) {
  //    dispatch(setAlert('No data found for the pie chart', 'danger'));
  //    return;
  //  }

  const dispatch = useDispatch();
  //  console.log('in Profile');  //

  const { id } = useParams();

  console.log('profile::: ', profile);

  console.log('in Profile');
  console.log('id is ', id);

  const profileX = useSelector((state) => state.profile);

  if (profileX.length === 0) {
    dispatch(setAlert('No profile loaded', 'danger'));
    return;
  }

  useEffect(() => {
    dispatch(getProfileById(id));
  }, [dispatch, id]);

  //  console.log('profileX: ', profileX.profile.email);

  if (!profile || Object.keys(profile).length === 0) {
    dispatch(setAlert('No profile loaded', 'danger'));
    return <Spinner />;
  }

  // Destructure the profile object to get individual properties     getProfileById, id
  const { bio, email, name, school, status } = profile;

  console.log('email===== ', email);

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
            <ProfileTestResult />
          </div>
        </Fragment>
      )}

      <div>
        {/*{topicsData.map((topic, index) => (
          <div key={index}>
            <h2>{topic.topic}</h2>
            <PieChart
              answeredByCount={topic.answeredByCount}
              flagTrueCount={topic.flagTrueCount}
              flagFalseCount={topic.flagFalseCount}
            />
          </div>
        ))}*/}
      </div>
    </section>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
