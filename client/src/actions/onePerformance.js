import api from '../utils/api.js';
import { setAlert } from './alert.js';

import {
  USER_PERFORMANCE_SUCCESS,
  USER_PERFORMANCE_FAIL,
  USER_PERFORMANCE_REQUEST,
  USER_PERFORMANCE_LOADED,
} from './types.js';

// Delete UserPerformance
export const getUserPerformance = (email) => async (dispatch) => {
  dispatch({ type: USER_PERFORMANCE_REQUEST });

  console.log('in getUserPerformance action', email);

  try {
    const res = await api.get(`/user_performance/${email}`);

    console.log('in getUserPerformance action res.data', res.data);

    dispatch({
      type: USER_PERFORMANCE_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('User performance fetched', 'success'));
  } catch (err) {
    dispatch({
      type: USER_PERFORMANCE_FAIL,
      payload: { msg: 'Error has occured' },
    });
  }
};
