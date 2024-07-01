import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfileById, getProfiles } from '../../actions/profile';
import { RootState } from '../../reducers';
import { ThunkDispatch } from 'redux-thunk';
//import { Profile } from '../../reducers/profile';
import { ProfileState } from '../../reducers/profile';
import { ProfilesState } from '../../reducers/profiles';


export interface Profile { 
  bio?: string
  email: string
  name: string;
  school: string;
  status: string;
  avatar: string
  user: string
 _id: string
}


const Profiles: React.FC = () => {
  console.log('in Profiles')
  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  // Fetch user data from local storage
  const userId: string | null = localStorage.getItem('id');
  const isAdmin = localStorage.getItem('isAdmin');

  // Use the correct selector to access the profiles state
  //
  //const {profiles}: { profiles: IProfileItem[] } = useSelector((state: RootState) => state.profiles)
  const {profiles}: ProfilesState = useSelector((state: RootState) => state.profiles)
  const {profile}: ProfileState = useSelector((state: RootState) => state.profile) 



  console.log('1 profiles:', profiles);
  console.log('2 singleProfile:', profile);

  useEffect(() => {
    const fetchData = async () => {
      if (isAdmin === 'false') {
        if (userId !== null) {
          await dispatch(getProfileById(userId));
        }       
      } else {
        console.log('IN dispatch(getProfiles())');
        await dispatch(getProfiles());
      }
    };

    // Call fetchData function on component mount
    fetchData();
  }, [dispatch, isAdmin, userId]);

  // Handle loading state
  if ((!profiles && isAdmin === 'true') || (!profile && isAdmin === 'false')) {
    return <Spinner />;
  }

  console.log('Profile prop in parent component:', profiles);

  return (
    <section className="container">
      <Fragment>
      <h1 className="large text-primary">Students</h1>
      <p className="lead">
        <i className="fab fa-connectdevelop" /> Browse and connect with students
      </p>
        <div className="profiles">
        
          {isAdmin === 'false' ? (
            profile ? (
            <ProfileItem
              key={profile.user}
              profile={{
                bio: profile.bio,
                email: profile.email,
                name: profile.name,
                school: profile.school,
                status: profile.status,
                avatar: profile.avatar,
                user: profile.user,
               _id: profile._id
              }}
            />            
            ) : (
              <p>No profile found...</p>
            )
          ) : Array.isArray(profiles) && profiles.length > 0 ? (
            profiles.map((profile) => (
            <ProfileItem
              key={profile.user}
              profile={{
                bio: profile.bio,
                email: profile.email,
                name: profile.name,
                school: profile.school,
                status: profile.status,
                avatar: profile.avatar,
                user: profile.user,
               _id: profile._id
              }}
            />           
            ))
          ) : (
            <p>No profiles found...</p>
          )}
        </div>
      </Fragment>
    </section>
  );
};


export default Profiles;

