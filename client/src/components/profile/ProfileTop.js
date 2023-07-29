import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    status,
    school,
    images,
    user: { name, avatar },
  },
}) => {
  return (
    <div className="profile-top bg-primary p-2">
      {/*<img className="round-img my-1" src={avatar} alt="" />*/}

      {avatar && <img src={avatar} alt="" className="round-img" />}
      {!avatar && <img src={images[0]} alt="" className="round-img" />}
      <h1 className="large">{name}</h1>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
