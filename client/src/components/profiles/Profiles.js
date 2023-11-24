import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner.js';
import ProfileItem from './ProfileItem.js';
import { getProfileById, getProfiles } from '../../actions/profile.js';

const Profiles = () => {
  console.log('in Profiles');

  const dispatch = useDispatch();

  // Fetch user data from local storage
  const userId = localStorage.getItem('id');
  const isAdmin = localStorage.getItem('isAdmin');

  // Use the correct selector to access the profiles state
  const profiles = useSelector((state) => state.profiles.profiles);
  const singleProfile = useSelector((state) => state.profile.profile);

  console.log('profiles::', profiles);
  console.log('singleProfile::', singleProfile);

  useEffect(() => {
    const fetchData = async () => {
      if (isAdmin === 'false') {
        console.log('IN dispatch(getProfileById(userId));', userId);
        await dispatch(getProfileById(userId));
      } else {
        console.log('IN dispatch(getProfiles())');
        await dispatch(getProfiles());
      }
    };

    // Call fetchData function on component mount
    fetchData();
  }, [dispatch, isAdmin, userId]);

  // Handle loading state
  if (
    (!profiles && isAdmin === 'true') ||
    (!singleProfile && isAdmin === 'false')
  ) {
    return <Spinner />;
  }

  return (
    <section className="container">
      <Fragment>
        <h1 className="large text-primary">Students</h1>
        <p className="lead">
          <i className="fab fa-connectdevelop" /> Browse and connect with
          students
        </p>

        <div className="profiles">
          {isAdmin === 'false' ? (
            singleProfile ? (
              <ProfileItem key={singleProfile._id} profile={singleProfile} />
            ) : (
              <p>No profile found...</p>
            )
          ) : Array.isArray(profiles) ? (
            profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <p>No profiles found...</p>
            )
          ) : (
            <ProfileItem key={profiles._id} profile={profiles} />
          )}
        </div>
      </Fragment>
    </section>
  );
};

Profiles.propTypes = {
  // Add any prop types if needed
};

export default Profiles;

//import React, { Fragment, useEffect } from 'react';
//import { useSelector, useDispatch } from 'react-redux';
//import PropTypes from 'prop-types';
//import Spinner from '../layout/Spinner.js';
//import ProfileItem from './ProfileItem.js';
//import { getProfileById, getProfiles } from '../../actions/profile.js';
//
//const Profiles = () => {
//  console.log('in Profiles');
//
//  const dispatch = useDispatch();
//
//  const userId = localStorage.getItem('id');
//  const isAdmin = localStorage.getItem('isAdmin');
//
//  // Use the correct selector to access the profiles state
//  //  const profile = useSelector((state) => state.profile.profile); REMEMBER TO REVERSE WHEN NOT WORKING
//  // Use the correct selector to access the profiles state
//  const profiles = useSelector((state) => state.profile.profiles);
//
//  console.log('profiles::', profiles);
//
//  //  console.log('profile::', profile);
//
//  useEffect(() => {
//    if (isAdmin === 'false') {
//      console.log('IN  dispatch(getProfileById(userId));', userId);
//      dispatch(getProfileById(userId));
//    } else {
//      console.log('IN  dispatch(getProfiles())');
//      dispatch(getProfiles());
//    }
//  }, [dispatch, isAdmin, userId]);
//
//  // Handle loading state
//  if (profile === null) {
//    return <Spinner />;
//  }
//
//  return (
//    <section className="container">
//      <Fragment>
//        <h1 className="large text-primary">Students</h1>
//        <p className="lead">
//          <i className="fab fa-connectdevelop" /> Browse and connect with
//          students
//        </p>
//
//        <div className="profiles">
//          {Array.isArray(profiles) ? (
//            profiles.length > 0 ? (
//              profiles.map((profile) => (
//                <ProfileItem key={profile._id} profile={profile} />
//              ))
//            ) : (
//              <p>No profiles found...</p>
//            )
//          ) : (
//            <ProfileItem key={profiles._id} profile={profiles} />
//          )}
//        </div>
//      </Fragment>
//    </section>
//  );
//};
//
//Profiles.propTypes = {
//  // Add any prop types if needed
//};
//
//export default Profiles;
