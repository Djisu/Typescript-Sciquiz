import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { userAnsweredQuestions } from '../../actions/auth.tsx';
import { Profile } from '../../reducers/profile.ts';

interface IProps {
  profile: {
    [key: string]: string;
    avatar: string;
    bio: string;
    email: string;
    name: string;
    school: string;
    status: string;
    userName: string;
    _id: string;
  }[];
}

interface IProfileAboutProps {
  profile: Profile | Profile[];
}
//   profile: Profile | Profile[];
// }

// interface ProfileProps extends Profile {
//   name: string;
// }

interface User {
  name: string;
  email: string;
  isAdmin: string;
  avatar: string;
}


const ProfileAbout: React.FC<IProfileAboutProps> = ({
  profile
}) => {
  const id = useParams();

  console.log('in ProfileAbout=== ', profile);
 // console.log('typeof profile: ', typeof profile)

  const profileData = Array.isArray(profile) ? profile[0] : profile;

  const { bio, school, name } = profileData

  console.log('bio, school, name: ', bio, school, name);

  const dispatch = useDispatch();

  return (
    <div className="profile-about bg-light p-2">
      {bio && (
        <Fragment>
          <h2 className="text-primary">{name.trim().split(' ')[0]}'s Bio</h2>
          <p>{bio}</p>
          <div className="line" />
          <p className="text-primary">{name}</p>
          <p className="text-primary">{school}</p>
        </Fragment>
      )}
    </div>
  );
};

// ProfileAbout.propTypes = {
//   profile: PropTypes.object.isRequired,
// };

export default ProfileAbout;
