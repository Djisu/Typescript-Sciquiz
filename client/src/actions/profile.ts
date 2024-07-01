import api from '../utils/api.ts';
import {Dispatch} from 'redux'

import {
  GET_PROFILE,
  GET_PROFILES,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
} from './types.ts';
import { AlertAction, setAlertValue } from './action-types/alert.ts';

import { ThunkAction } from 'redux-thunk';

import { RootState } from '../reducers';
import { setAlert } from './alert.ts';

interface ProfileFormData {
  school: string;
  status: string;
  bio: string;
  name: string;
  email: string | null;
  transDate?: Date;
}

// Get current users profile
export const getCurrentProfile = (): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch) => {

//console.log('in action getCurrentProfile')

if (!localStorage.token) {
  //console.log('No token found!!!')
  return 
}

  try {
    const res = await api.get('/profile/me');
    console.log('THIS IS res== , res')

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.msg },
    });
  }
};

// Get all profiles
export const getProfiles = (): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch) => {
  console.log('in NEW NEW NEW getProfiles action');

  dispatch({ type: CLEAR_PROFILE });

  try {
    const res = await api.get('/profile');

    console.log('in =========getProfileS action  res.data==', res.data);

    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err: any) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.msg },
    });
  }
};

interface ProfileResponse {
  data: any;
  status: number;
}

export const getProfileById = (userId: string): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch) => {
  console.log('in action creator getProfileById: ', userId);

  if (!localStorage.token) {
    console.log('No token found!!!')
    return 
  }

  try {
    const res: ProfileResponse = await api.get(`/profile/user/${userId}`);

    if (res.data) {
      console.log('in action creator getProfileById: res.data=== ', res.data);

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });

      const randNo = Math.floor(Math.random() * 100);

      //dispatch(setAlert('Profile found!!!', 'success'))
    } else {
      //dispatch(setAlert('No profiles found!!!', 'danger'));
      console.log('No profiles found');

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: 'Failed to get profile', status: res.status },
      });
    }
  } catch (err: any) {
    // Handle network errors or other unexpected errors
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.message || 'An error occurred', status: err.response?.status || 500 },
    });
  }
};

export const getProfileByStatus = (status: string): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch) => {
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
  } catch (err: any) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create profile
export const createProfile = (formData: ProfileFormData, edit = false): ThunkAction<Promise<void>, RootState, unknown, any> => async (dispatch: Dispatch) => {
// export const createProfile = (formData: ProfileFormData, edit = false): ThunkAction<void, RootState, unknown, any> => {
//   return async (dispatch: Dispatch) => {
    try {
      console.log('in createProfile action', formData);

      const res = await api.post('/profile', formData);

      console.log('res.data::', res.data);

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });

      //dispatch(setAlert('Profile Created', 'success'));
    } catch (err: any) {
      const { errors } = err.response.data;

      if (errors) {
        errors.forEach((error: any) => dispatch(setAlertValue(error.msg, 'danger', '01')));
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
};


// Update profile
export const updateProfile = (formData: ProfileFormData, edit = false): ThunkAction<Promise<void>, RootState, unknown, any> => async (dispatch: Dispatch) => {
//export const updateProfile = (formData: ProfileFormData, edit = true): ThunkAction<void, RootState, unknown, any> => {
  //return async (dispatch: Dispatch) => {
    try {
      console.log('in updateProfile action', formData);

      const res = await api.put('/profile', formData);

      console.log('res.data::', res.data);

      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });

      //dispatch(setAlert('Profile Updated', 'success', '01'));
    } catch (err: any) {
      const { errors } = err.response.data;

      if (errors) {
        errors.forEach((error: any) => dispatch(setAlertValue(error.msg, 'danger', '01')));
      }

      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
};


// // Create profile
// export const createProfile =
//   (formData, edit = false) =>
//   async (dispatch) => {
//     console.log('in createProfile action', formData);

//     try {
//       const res = await api.post('/profile', formData);

//       console.log('res.data::', res.data);

//       dispatch({
//         type: GET_PROFILE,
//         payload: res.data,
//       });

//       dispatch(setAlert('Profile Created', 'success'));
//     } catch (err) {
//       const {errors} = err.response.data;

//       if (errors) {
//         errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
//       }

//       dispatch({
//         type: PROFILE_ERROR,
//         payload: { msg: err.response.statusText, status: err.response.status },
//       });
//     }
//   };

// // Update profile
// export const updateProfile =
//   (formData, edit = true) =>
//   async (dispatch) => {
//     console.log('in updateProfile action', formData);

//     try {
//       const res = await api.put('/profile', formData);

//       console.log('res.data::', res.data);

//       dispatch({
//         type: GET_PROFILE,
//         payload: res.data,
//       });

//       dispatch(setAlert('Profile Updated', 'success'));
//     } catch (err) {
//       const {errors} = err.response.data;

//       if (errors) {
//         errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
//       }

//       dispatch({
//         type: PROFILE_ERROR,
//         payload: { msg: err.response.statusText, status: err.response.status },
//       });
//     }
//   };

// Delete account & profile
export const deleteAccount = (): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await api.delete('/profile');

      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: ACCOUNT_DELETED });

      alert('Your account has been permanently deleted')

      //dispatch(setAlertValue('Your account has been permanently deleted', 'success', '01'));
    } catch (err: any) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
