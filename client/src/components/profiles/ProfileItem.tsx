import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IProfileState } from '../../reducers/types/Profile';
import { AuthState } from '../../reducers/auth';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
//import { Profile } from '../../reducers/profile';
//import { User } from '../../actions/action-types/user';

interface IProfileItemProps {
  profile: {
    bio?: string
    email: string
    name: string;
    school: string;
    status: string;
    avatar: string
    user: string
  _id: string
  } 
}

const ProfileItem: React.FC<IProfileItemProps> = ({ profile }) => {
  const auth: AuthState = useSelector((state: RootState) => state.auth);

  // Inside ProfileItem component
  console.log('in  ProfileItem:', profile);

  return (
    <div className="profile bg-light">
      {profile.avatar && <img src={profile.avatar} alt="" className="round-img" />}
      <div>
        <h2>{profile.name}</h2>
        <p>{profile.status}</p>
        <p>{profile.school && <span> at {profile.school}</span>}</p>
       
        <Link to={`/profileData/${profile}/${auth}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default ProfileItem;
