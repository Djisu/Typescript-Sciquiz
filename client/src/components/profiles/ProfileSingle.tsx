import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner.ts';
import ProfileItem from './ProfileItem.ts';
import { getProfileById } from '../../actions/profile.ts';
import { RootState } from '../../reducers/index.js';
import { ThunkDispatch } from 'redux-thunk';
import { ProfilesState } from '../../reducers/profiles.ts';
import { Profile } from '../../reducers/profile.ts';

const Profiles: React.FC = () =>
  //    {
  //  profile: { profile, loading },
  //  createProfile,
  //  getCurrentProfile,
  //}
  {
    const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

    const userId: string | null = localStorage.getItem('id');

    useEffect(() => {
      console.log('IN  dispatch(getProfileById(userId));');
      if (userId){
         dispatch(getProfileById(userId));
      }
     
    }, [getProfileById]);

    const { profiles, loading, error }: ProfilesState = useSelector((state: RootState) => state.profiles);

    console.log('profiles XXXXXX:::', profiles);
    console.log('typeof profiles.profiles', typeof profiles);

    return (
      <section className="container">
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <h1 className="large text-primary">Students</h1>
            <p className="lead">
              <i className="fab fa-connectdevelop" /> Browse and connect with
              students
            </p>

            <div className="profiles">
              {profiles.length > 0 ? (
                 profiles.map((profile) => (
                  <ProfileItem key={profile?._id} profile={profile} />
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

const mapStateToProps = (state: RootState) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfileById })(Profiles);
