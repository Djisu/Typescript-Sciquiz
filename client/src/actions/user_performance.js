import api from '../utils/api.js';
import { setAlert } from './alert.js';

import {
  USER_PERFORMANCE_SUCCESS,
  USER_PERFORMANCE_FAIL,
  USER_PERFORMANCE_REQUEST,
  USER_PERFORMANCE_LOADED,
} from './types.js';

// Load Topics
export const loadUserPerformances = () => async (dispatch) => {
  //console.log('in loadUserPerformances');

  try {
    const res = await api.get('/user_performance');

    console.log(' res.data[0]:', res.data[0]);

    dispatch({
      type: USER_PERFORMANCE_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: USER_PERFORMANCE_FAIL,
    });
  }
};

// Create or update Question UserPerformance
export const createUserPerformance =
  (userPerformanceData) => async (dispatch) => {
    dispatch({ type: USER_PERFORMANCE_REQUEST });

    // console.log('in userperformance action')
    try {
      const res = await api.post('/user_performance', userPerformanceData);

      console.log('res.data:', res.data);

      dispatch({
        type: USER_PERFORMANCE_SUCCESS,
        payload: res.data,
      });

      //alert('UserPerformance Creation Successful');
      dispatch(setAlert('UserPerformance Creation Successful', 'success'));
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: USER_PERFORMANCE_FAIL,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

// Delete UserPerformance
export const deleteUserPerformance = (id) => async (dispatch) => {
  dispatch({ type: USER_PERFORMANCE_REQUEST });

  console.log('in user performance action', id);

  try {
    const res = await api.delete(`/user_performance/${id}`);

    dispatch({
      type: USER_PERFORMANCE_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('User performance Removed', 'success'));
  } catch (err) {
    dispatch({
      type: USER_PERFORMANCE_FAIL,
      payload: { msg: 'Error has occured' },
    });
  }
};

// Delete UserPerformance
export const updateUserPerformance = (formData) => async (dispatch) => {
  dispatch({ type: USER_PERFORMANCE_REQUEST });

  try {
    const res = await api.put(formData);

    dispatch({
      type: USER_PERFORMANCE_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('User performance updated', 'success'));
  } catch (err) {
    dispatch({
      type: USER_PERFORMANCE_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
