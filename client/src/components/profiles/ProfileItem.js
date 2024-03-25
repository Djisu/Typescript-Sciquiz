import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    school, // Assuming you meant school instead of company
    location, // Assuming this property is present in your data
    skills, // Assuming this property is present in your data
    images, // Assuming this property is present in your data
  },
}) => {
  console.log('in ProfileItem');

  return (
    <div className="profile bg-light">
      {avatar && <img src={avatar} alt="" className="round-img" />}
      <div>
        <h2>{name}</h2>
        <p>{status}</p>
        <p>{school && <span> at {school}</span>}</p>
        {/* Additional properties */}
        <p>{location && <span>Location: {location}</span>}</p>
        <p>{skills && <span>Skills: {skills.join(', ')}</span>}</p>
        <p>{images && <span>Images: {images.join(', ')}</span>}</p>
     
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
