import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner.js';
import ProfileItem from './ProfileItem.js';
import { getProfileById } from '../../actions/profile.js';

const Profiles = () =>
  //    {
  //  profile: { profile, loading },
  //  createProfile,
  //  getCurrentProfile,
  //}
  {
    const dispatch = useDispatch();

    const userId = localStorage.getItem('id');

    useEffect(() => {
      console.log('IN  dispatch(getProfileById(userId));');

      dispatch(getProfileById(userId));
    }, [getProfileById]);

    const profiles = useSelector((state) => state.profiles);

    console.log('profiles XXXXXX:::', profiles.profiles);
    console.log('typeof profiles.profiles', typeof profiles.profiles);

    return (
      <section className="container">
        {profiles.loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <h1 className="large text-primary">Students</h1>
            <p className="lead">
              <i className="fab fa-connectdevelop" /> Browse and connect with
              students
            </p>

            <div className="profiles">
              {profiles.profiles.length > 0 ? (
                profiles.profiles.map((profile) => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
              ) : (
                <h4>No profiles.profiles found...</h4>
              )}
            </div>
          </Fragment>
        )}
      </section>
    );
  };

Profiles.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfileById })(Profiles);
