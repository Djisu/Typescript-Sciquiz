import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    school,
    bio,
  },
}) => {
    console.log('name:' + name);
  return (
    <div className="profile bg-light">
      {avatar && <img src={avatar} alt="" className="round-img" />}
      {/*{!avatar && <img src={images[0]} alt="" className="round-img" />}*/}
      <div>
        <h2>{name}</h2>

        <p>{status}</p>
        <p>{school && <span> at {school}</span>}</p>

        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
