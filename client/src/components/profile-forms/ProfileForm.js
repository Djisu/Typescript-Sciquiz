import React, { useState, useEffect } from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

import DatePicker from 'react-datepicker';
import { storage } from '../../firebase';

/*
  NOTE: declare initialState outside of component
  so that it doesn't trigger a useEffect,
  we can then safely use this to construct our profileData
 */
const initialState = {
  school: '',
  status: '',
  bio: '',
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
}) => {
  const [formData, setFormData] = useState(initialState);

  const creatingProfile = useMatch('/create-profile');

  const navigate = useNavigate();

  const state = {
    button: 1,
  };

  // Image codes
  //  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const [progress, setProgress] = useState(0);

  console.log('in ProfileForm');
  //  const handleChange = (e) => {
  //    if (e.target.files[0]) {
  //      setImage(e.target.files[0]);
  //    }
  //  };

  useEffect(() => {
    // if there is no profile, attempt to fetch one
    if (!profile) getCurrentProfile();

    // if we finished loading and we do have a profile
    // then build our profileData
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { status, school, bio } = formData;

  const onChange = (e) => {
    formData.transDate = new Date();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    const editing = profile ? true : false;

    e.preventDefault();

    // Adding form data to the database
    if (state.button === 2) {
      console.log('in state.button === 2 ', formData.images);

      createProfile(formData, editing).then(() => {
        if (!editing) navigate('/dashboard');
      });
    }
  };

  return (
    <section className="container">
      <h1 className="large text-primary">
        {creatingProfile ? 'Create Your Profile' : 'Edit Your Profile'}
      </h1>
      <p className="lead">
        <i className="fas fa-user" />
        {creatingProfile
          ? ` Let's get some information to make your`
          : ' Add some changes to your profile'}
      </p>

      <small>* = required field</small>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="School"
            name="school"
            value={school}
            onChange={onChange}
          />
        </div>

        <div className="form-group">
          <select name="status" value={status} onChange={onChange}>
            <option>* Select Your Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={onChange}
          />
          <small className="form-text">
            Tell us a little bit about yourself
          </small>
        </div>
        <div>
          <Link to="/dashboard" className="primary m-3">
            Go Back
          </Link>
          <br />
          <button
            className="primary my-1"
            type="submit"
            onClick={() => (state.button = 2)}
          >
            Edit Profile
          </button>
        </div>
      </form>
    </section>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  ProfileForm
);
