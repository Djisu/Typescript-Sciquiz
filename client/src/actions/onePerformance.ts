import api from '../utils/api.tsx';
import { setAlert } from './alert.tsx';

import {
  USER_PERFORMANCE_SUCCESS,
  USER_PERFORMANCE_FAIL,
  USER_PERFORMANCE_REQUEST,
  USER_PERFORMANCE_LOADED,
} from './types.tsx';
import ActionType from './action-types/index.ts';
import { Dispatch } from 'react';
import { UserPerformanceAction } from './action-types/userPerformance.ts';
import { setAlertValue, AlertAction } from './action-types/alert.ts';
import { RootState } from '../reducers/index.ts';
import { ThunkAction } from 'redux-thunk';

// Delete UserPerformance
export const getUserPerformance = (email: string): ThunkAction<void, RootState, unknown, any>  => async (
    dispatch: Dispatch<UserPerformanceAction | AlertAction>
  ) => {
  dispatch({ type: ActionType.USER_PERFORMANCE_REQUEST, payload: "Getting user performance" });

  console.log('in getUserPerformance action', email);

  try {
    const res = await api.get(`/user_performance/${email}`);

    console.log('in getUserPerformance action res.data', res.data);

    dispatch({
      type: ActionType.USER_PERFORMANCE_SUCCESS,
      payload: res.data,
    });

    //dispatch(setAlert('User performance fetched', 'success'));
  } catch (err) {
    dispatch({
      type: ActionType.USER_PERFORMANCE_FAIL,
      payload: 'Error has occurred'  //{ msg: 'Error has occurred' },
    });
  }
};
