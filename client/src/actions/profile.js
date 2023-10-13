import api from '../utils/api.js';
import { setAlert } from './alert.js';

import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
} from './types.js';

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/

// Get current users profile
export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await api.get('/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.msg },
    });
  }
};

// Get all profiles
export const getProfiles = () => async (dispatch) => {
  console.log('in getProfiles action');

  dispatch({ type: CLEAR_PROFILE });

  try {
    const res = await api.get('/profile');

    console.log('in getProfileS action  res.data==', res.data);

    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.msg },
    });
  }
};

// Get profile by ID
export const getProfileById = (userId) => async (dispatch) => {
  //  console.log('in  getProfileById: ', userId);

  try {
    const res = await api.get(`/profile/user/${userId}`);

    if (res.data) {
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    } else {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: 'Failed to get profile', status: res.status },
      });
    }
  } catch (err) {
    // Handle network errors or other unexpected errors
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: 'An error occurred', status: 500 }, // You can customize this message
    });
  }
};

// Get profile by status

export const getProfileByStatus = (status) => async (dispatch) => {
  //   console.log('in getProfileByStatus, status is:', status)

  try {
    const res = await api.get(`/profile/${status}`);

    if (res) {
      console.log('res==', res);
      localStorage.setItem('status', JSON.stringify(res));
    }

    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create or update profile
export const createProfile =
  (formData, edit = false) =>
  async (dispatch) => {
    console.log('in createProfile action', formData);

    try {
      const res = await api.post('/profile', formData);

      console.log('res.data::', res.data);

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });

      dispatch(setAlert('Profile Created', 'success'));
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

// Create or update profile
export const updateProfile =
  (formData, edit = true) =>
  async (dispatch) => {
    console.log('in updateProfile action', formData);

    try {
      const res = await api.put('/profile', formData);

      console.log('res.data::', res.data);

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });

      dispatch(setAlert('Profile Updated', 'success'));
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

// Delete account & profile
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await api.delete('/profile');

      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: ACCOUNT_DELETED });

      dispatch(setAlert('Your account has been permanently deleted'));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
