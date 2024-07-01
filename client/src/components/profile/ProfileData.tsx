import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner.tsx';
import ProfileTop from './ProfileTop.tsx';
import ProfileAbout from './ProfileAbout.tsx';
import { getProfileById } from '../../actions/profile.ts';
import ProfileTestResult from './ProfileTestResult.tsx';
import ProfileMarkTest from './ProfileMarkTest.tsx';
//import { RootState } from '../../reducers';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { Profile } from '../../reducers/profile.ts';
//import { ProfileState } from '../../reducers/profile.ts';
//import { AuthState } from '../../reducers/auth.ts';
import { RootState } from '../../reducers/index.ts';
import { ProfileDataProps } from '../../App.tsx';

// bio: profile.bio,
// email: profile.email,
// name: profile.name,
// school: profile.school,
// status: profile.status,
// avatar: profile.avatar,
// user: profile.user,
// _id: profile._id

interface IProfileItemProps {
  profile: {
    [key: string]: string;
    bio: string
    email: string
    name: string;
    school: string;
    status: string;
    avatar: string
    user: string
    _id: string
  }[],
  auth: AuthState
}

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean | null;
  loading: boolean;
  user: {
    _id: string;
    name: string;
    email: string;
    avatar: string;
    isAdmin: string;
  } | null;
  userSignin: {
    userInfo: string | null ;
  };
}

interface ProfileState {
  profile: Profile | null;
  loading: boolean;
  error: string | null;
}

interface IProps {
  profile: ProfileState;
  //auth: AuthState;
}

type ParamTypes = {
  _id: string;
};

interface ProfileMarkTestProp {
  userId?: string
}

const ProfileData: React.FC<ProfileDataProps> = ({ profile, auth }) => {
  
  console.log('in components/profile/ProfileData.tsx   OOOOOOOO')

  // Access the `profile` and `auth` parameters from the URL
  const { profile: profileParam, auth: authParam } = useParams();

  const profileData = Array.isArray(profile) ? profile[0] : profile;



  let userId = localStorage.getItem('id')

  console.log('userId== ', userId)

  console.log('profile prop: ', profile)
  console.log('profile.profile: ', profile.profile)

  console.log('auth prop: ', auth)

  console.log('Array.isArray(profile.profile)', Array.isArray(profile.profile))

  if (profile.profile) {
    if (Array.isArray(profile.profile)) {
      console.log('profile.profile.user== ', profile.profile.user);

      if (auth.user){
        console.log('auth.user._id === ', auth.user._id)
      }
      
      console.log('profileData[0].user === ', profile.profile[0].user)
    } 
  }
  

  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  const isAdmin = localStorage.getItem('isAdmin');
  const booleanValue = !!(isAdmin === 'true');

  useEffect(() => {
    if (typeof userId === 'string') {
      dispatch(getProfileById(userId));
    }
  }, [dispatch, userId]);

  if (profile.loading || profile.profile === null) {
    return <Spinner />;
  }

  userId = profile.profile._id

  // const ProfileMarkTest: React.FC<ProfileMarkTestProp> = ({ userId }) => {
  //   return <div>ProfileMarkTest</div>;
  // };

  // const ProfileTestResult: React.FC<ProfileMarkTestProp> = ({ userId }) => {
  //   return <div>ProfileTestResult</div>;
  // };

  return (
    <section className="container">
      <>
        {auth.isAuthenticated && auth.loading === false && auth.user && profile.profile && (
          <>
            {auth.user._id === profileData.profile[0].user ? (
              <Link to="/edit-profile" className="btn btn-dark">
                Edit Profile
              </Link>
            ) : (
              auth.user.isAdmin && (
                <Link to="/profiles" className="btn btn-light">
                  Back To Profiles
                </Link>
              )
            )}
          </>
        )}
        <div className="profile-grid my-1">
          {profile.profile && <ProfileTop profile={profile.profile} />}
          {profile.profile && <ProfileAbout profile={profile.profile} />}
        </div>
        <div className="d-flex flex-column" style={{ alignItems: 'flex-start' }}>
          {profileData.profile[0].user && <ProfileMarkTest userId={profileData.profile[0].user} />}
          {/* {profileData.profile[0].user && <ProfileTestResult userId={profileData.profile[0].user} />} */}
        </div>
      </>
    </section>
  );
}

const mapStateToProps = (state: RootState) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(ProfileData);