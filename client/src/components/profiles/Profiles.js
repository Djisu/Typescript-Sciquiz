import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner.js';
import ProfileItem from './ProfileItem.js';
import { getProfiles } from '../../actions/profile.js';

const Profiles = () =>
  //    {
  //  profile: { profile, loading },
  //  createProfile,
  //  getCurrentProfile,
  //}
  {
    const dispatch = useDispatch();

    useEffect(() => {
      //  console.log('IN  dispatch(getProfiles());');

      dispatch(getProfiles());
    }, [getProfiles]);

    const profiles = useSelector((state) => state.profiles);

    //console.log('profiles XXXXXX:::', profiles.profiles);
    //console.log('typeof profiles.profiles', typeof profiles.profiles);

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
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
