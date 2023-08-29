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

const Profile = ({ getProfileById, profile: { profile }, auth }) => {
  //  console.log('in Profile');

  const { id } = useParams();

  //  console.log('id==', id);

  const dispatch = useDispatch();

  useEffect(() => {
    getProfileById(id);
  }, [getProfileById, id]);

  const profileX = useSelector((state) => state.profile);

  //const auth = useSelector((state) => state.auth);

  //  console.log('XXXXXXX in Profile prolife=========', profileX);
  //
  //  if (!profile) {
  //    console.log('There is no profile loaded');
  //  }
  const answeredQuestions = useSelector((state) => state.userAnsweredQuestions);
  //  const [userAnsweredQuestions] = useSelector(
  //    (state) => state.userAnsweredQuestions
  //  );

  console.log(' answeredQuestions:', answeredQuestions.userAnsweredQuestions);

  useEffect(() => {
    console.log('in dispatch(userAnsweredQuestions(id));');

    dispatch(userAnsweredQuestions(id));
  }, [dispatch]);

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
        </Fragment>
      )}
      <p>Total Questions Answered: {answeredQuestions.userAnsweredQuestions}</p>
      {/*<div>
        <ul>
          <p>List of questions answered</p>
          {answeredQuestions &&
            answeredQuestions.map((question, index) => {
              return <li key={index}>{question}</li>;
            })}
        </ul>
        
      </div>*/}
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
