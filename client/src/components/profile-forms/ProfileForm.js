import React, { useState, useEffect } from 'react';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import {
  createProfile,
  updateProfile,
  getCurrentProfile,
} from '../../actions/profile.js';

//  NOTE: declare initialState outside of component
//  so that it doesn't trigger a useEffect,
//  we can then safely use this to construct our profileData
// */
const initialState = {
  school: '',
  status: '',
  bio: '',
  name: '',
  email: '',
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
}) => {
  const [formData, setFormData] = useState(initialState);

  const creatingProfile = useMatch('/create-profile');

  const navigate = useNavigate();

  const dispatch = useDispatch();

  //  console.log('in ProfileForm profile====', profile);

  const userEmail = localStorage.getItem('email');

  useEffect(() => {
    // if there is no profile, attempt to fetch one
    if (!profile) {
      getCurrentProfile();
    }

    // if we finished loading and we do have a profile
    // then build our profileData
    if (!loading && profile) {
      const profileData = { ...initialState };

      for (const key in profile) {
        if (key in profileData) {
          profileData[key] = profile[key];
        }
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const { status, school, bio, name, email } = formData;

  const onChange = (e) => {
    formData.transDate = new Date();

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    //console.log('in const onSubmit');

    formData.email = userEmail;

    const editing = !!profile;

    //console.log('editing==', editing);
    e.preventDefault();

    if (editing) {
      console.log('in updateProfile formData==', formData);
      // Dispatch a plain action object for updating profile
      dispatch(updateProfile(formData, editing));
    } else {
      // Dispatch an asynchronous action using Redux Thunk for creating profile
      dispatch((dispatch) => {
        // Dispatch the createProfile action and handle the Promise returned by it
        dispatch(createProfile(formData, editing)).then(() => {
          console.log('in createProfile formData==', formData);
          
          // After successfully creating the profile, navigate to the dashboard
          if (!editing) {
            navigate('/dashboard');
          }
        }).catch(error => {
          // Handle any errors that occur during profile creation
          console.error('Error creating profile:', error);
        });
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
          ? ` Let's get some information to make your profile`
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

        <small className="form-text">Tell us a little bit about yourself</small>
        <div className="form-group">
          <textarea
            placeholder="A short bio of yourself"
            name="bio"
            value={bio}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        {/*<div className="form-group">
          <input
            type="email"
            placeholder="Email address"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>*/}
        <div>
          <Link to="/dashboard" className="primary m-3">
            Go Back
          </Link>
          <br />
          <button className="primary my-1" type="submit">
            {creatingProfile ? ` Create Profile` : 'Edit Profile'}
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
