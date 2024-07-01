import React from 'react';
import { useParams } from 'react-router-dom';

import { Profile } from '../../reducers/profile';

interface IProfileTopProps {
  profile: Profile | Profile[];
}

const ProfileTop: React.FC<IProfileTopProps> = ({ profile }) => {
  console.log('in ProfileTop: ', profile)

  const profileData = Array.isArray(profile) ? profile[0] : profile;

  console.log('in ProfileTop profile: ', profileData);
  console.log('avatar: ', `https:${profileData?.avatar}`);

  return (
    <div className="profile-top bg-primary p-2">
      <img
        className="round-img my-1"
        src={`https:${profileData?.avatar}`}
        alt=""
      />
      <h1 className="large">{profileData?.name}</h1>
      <p className="lead">{profileData?.status}</p>
      <p>{profileData?.school}</p>
      {/* <div className="icons my-1">
        <a href={`mailto:${profileData?.email}`}>
          <i className="fas fa-envelope fa-2x"></i>
        </a>
      </div> */}
    </div>
  );
};

export default ProfileTop;









// import React from 'react';
// import { useParams } from 'react-router-dom';
// //import { Profile } from '../../reducers/profile';
// import { ProfileDataProps } from '../../App';
// import { ProfileState } from '../../reducers/profile';
// import { AuthState } from '../../reducers/auth';

// export interface Profile { 
//   bio?: string
//   email: string
//   name: string;
//   school: string;
//   status: string;
//   avatar: string
//   userName: string
//  _id: string
// }

// interface IProps {
//   profile: ProfileState;
// }

// const ProfileTop: React.FC<IProps> = ({ profile }) => {
//   const id = useParams();

//   const { profile: profileParam} = useParams();



//   console.log('in ProfileTop: profile', profile.profile)


//   if (profile.profile){
//       console.log('profile.profile[avatar]== ', profile.profile.avatar) 
//   }


//   return (
//     <div className="profile-top bg-primary p-2">
//    {profile?.profile && (
//       <>
//         <img src={profile.profile?.avatar || 'https://via.placeholder.com/150'} alt="" className="round-img" />
//         <h1 className="large">{profile.profile.name}</h1>
//       </>
//     )}
//   </div>
//   );
// };

// export default ProfileTop;
