import api from '../utils/api.ts';
import { setAlert } from './alert.ts';

import {
  USER_PERFORMANCE_SUCCESS,
  USER_PERFORMANCE_FAIL,
  USER_PERFORMANCE_REQUEST,
  USER_PERFORMANCE_LOADED,
  ONE_PERFORMANCE_SUCCESS,
  ONE_PERFORMANCE_FAIL,
  ONE_PERFORMANCE_REQUEST,
  ONE_PERFORMANCE_LOADED,
} from './types.js';
import { UserPerformanceAction } from './action-types/userPerformance.ts';
import { Dispatch } from 'react';
import ActionType from './action-types/index.ts';
import { setAlertValue } from './action-types/alert.ts';
import { AlertAction } from './action-types/alert.ts';
import { RootState } from '../reducers/index.ts';
import { ThunkAction } from 'redux-thunk';

interface UserPerformanceData {
  email: string;
  score: number;
  userId: string;
  test_name: string;
  date: Date;
  test_details: string;
}


// Load Topics
export const loadUserPerformances = (): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<UserPerformanceAction>) => {
  //console.log('in loadUserPerformances');

  try {
    const res = await api.get('/user_performance');

    console.log(' res.data:', res.data);

    dispatch({
      type: ActionType.USER_PERFORMANCE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ActionType.USER_PERFORMANCE_FAIL,
      payload: "Error in fetching data"
    });
  }
};

// Delete UserPerformance
export const getUserPerformance = (email: string): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<UserPerformanceAction | AlertAction>) => {
  dispatch({ type: ActionType.  USER_PERFORMANCE_REQUEST, payload: 'Getting data' });

  console.log('in getUserPerformance action', email);

  try {
    const res = await api.get(`/user_performance/${email}`);

    console.log('in getUserPerformance action res.data', res.data);

    if (!res.data) {
      dispatch({
        type: ActionType.USER_PERFORMANCE_FAIL,
        payload: 'No records found!!' //{ msg: 'No records found!!' },
      });
      dispatch(setAlertValue('No records found!!', 'danger', '01'));
    }

    dispatch({
      type: ActionType.USER_PERFORMANCE_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlertValue('User performance fetched', 'success', '01'));
  } catch (err) {
    dispatch({
      type: ActionType.USER_PERFORMANCE_FAIL,
      payload: 'Error has occurred' //{ msg: 'Error has occurred' },
    });
  }
};

// Create or update Question UserPerformance
export const createUserPerformance =
  (userPerformanceData: UserPerformanceData): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<UserPerformanceAction | AlertAction>) => {
    dispatch({ type: ActionType.USER_PERFORMANCE_REQUEST, payload: 'Getting data' });

    console.log('in userperformance action');
    try {
      const res = await api.post('/user_performance', userPerformanceData);

      console.log('res.data:', res.data);

      dispatch({
        type: ActionType.USER_PERFORMANCE_SUCCESS,
        payload: res.data,
      });

      //alert('UserPerformance Creation Successful');
      dispatch(setAlertValue('UserPerformance Creation Successful', 'success', '01'));
    } catch (err: any) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error: any) => dispatch(setAlertValue(error.msg, 'danger', '01')));
      }

      dispatch({
        type: ActionType.USER_PERFORMANCE_FAIL,
        payload: 'Fetching data ailed' // { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

// Delete UserPerformance
export const deleteUserPerformance = (id: string): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<UserPerformanceAction | AlertAction>) => {
  dispatch({ type: ActionType.USER_PERFORMANCE_REQUEST, payload: 'About to delete user performance' });

  console.log('in user performance action', id);

  try {
    const res = await api.delete(`/user_performance/${id}`);

    dispatch({
      type: ActionType.USER_PERFORMANCE_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlertValue('User performance Removed', 'success', '01'));
  } catch (err) {
    dispatch({
      type: ActionType.USER_PERFORMANCE_FAIL,
      payload: 'Error has occurred'  //{ msg: 'Error has occurred' },
    });
  }
};

// Delete UserPerformance
export const updateUserPerformance = (formData: string): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<UserPerformanceAction | AlertAction>) => {
  dispatch({ type: ActionType.USER_PERFORMANCE_REQUEST, payload: ' Ready to update' });

  try {
    const res = await api.put(formData);

    dispatch({
      type: ActionType.USER_PERFORMANCE_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlertValue('User performance updated', 'success', '01'));
  } catch (err: any) {
    dispatch({
      type: ActionType.USER_PERFORMANCE_FAIL,
      payload: err.response.statusText // { msg: err.response.statusText, status: err.response.status },
    });
  }
};
