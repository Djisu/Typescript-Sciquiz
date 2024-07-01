import api from '../utils/api.js';
import { setAlert } from './alert.js';
import { StuTestsAction } from './action-types/stutests.js';
import { AlertAction, setAlertValue } from './action-types/alert.js';
import {
  STU_TESTS_SUCCESS,
  STU_TESTS_FAIL,
  STU_TESTS_REQUEST,
  STU_TESTS_LOADED,
} from './types.js';
import { Dispatch } from 'react';
import ActionType from './action-types/index.js';
import { RootState } from '../reducers/index.js';
import { ThunkAction } from 'redux-thunk';

interface ITestData {
  userid: string
    question: string
    answer: string
    marks: number
    pass_marks: number
    test_name: string
    subject_name: string
}

// Load Tests
export const loadStuTests = (): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<StuTestsAction>) => {
  console.log('in loadStuTests');

  try {
    const res = await api.get('/stutests');

    console.log(' res.data[0]:', res.data[0]);

    dispatch({
      type: ActionType.STU_TESTS_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ActionType.STU_TESTS_FAIL,
      payload: 'Error in getting data'
    });
  }
};

// Get Question
export const getStuTest = (testData: ITestData): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<StuTestsAction | AlertAction>) => {
  dispatch({ type: ActionType.STU_TESTS_REQUEST, payload: "Getting ready" });

  const { userid, test_name } = testData;

  try {
    const res = await api.get(`/stutests/${userid}/${test_name}`);

    dispatch({
      type: ActionType.STU_TESTS_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlertValue('Student Test obtained', 'success', '01'));
  } catch (err) {
    dispatch({
      type: ActionType.STU_TESTS_FAIL,
      payload: 'Error has occurred' // { msg: 'Error has occurred' },
    });
  }
};

// Create or update Question
export const createStuTests = (testData: ITestData): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<StuTestsAction | AlertAction>) => {
  console.log('in createStuTests action', testData);

  if (testData.question === '') {
    alert('Empty question');
    return;
  }
  const tokenX = localStorage.getItem('token');

  if (!tokenX) {
    alert('You must login');
    return;
  }

  dispatch({ type: ActionType.STU_TESTS_REQUEST, payload: 'Getting ready' });

  console.log('in createStuTests action about to post');

  try {
    const res = await api.post('/stutest', testData);

    console.log('create test successful', res.data);

    dispatch({
      type: ActionType.STU_TESTS_LOADED,
      payload: res.data,
    });

    dispatch(setAlertValue('Test Creation Successful', 'success', '01'));
  } catch (err: any) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error: any) => dispatch(setAlertValue(error.msg, 'danger', '01')));
    }

    dispatch({
      type: ActionType.STU_TESTS_FAIL,
      payload: 'Error has occurred' //{ msg: 'Error has occurred' },
    });
  }
};

// Update Tests
export const updateStuTests = (testData: ITestData): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<StuTestsAction | AlertAction>) => {
  dispatch({ type: ActionType.STU_TESTS_REQUEST, payload: 'Getting ready' });

  const { userid, test_name } = testData;

  try {
    const res = await api.put(`/stutests/${userid}/${test_name}`, testData);

    dispatch({
      type: ActionType.STU_TESTS_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlertValue('Tests Update Successful', 'success', '01'));
  } catch (err: any) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error: any) => dispatch(setAlertValue(error.msg, 'danger', '01')));
    }

    dispatch({
      type: ActionType.STU_TESTS_FAIL,
      payload: err.response.statusText //{ msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete Question
export const deleteStuTest = (testData: ITestData): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<StuTestsAction | AlertAction>) => {
  dispatch({ type: ActionType.STU_TESTS_REQUEST, payload: 'Getting ready' });

  const { userid, test_name } = testData;

  console.log('in deleteTest action');

  try {
    const res = await api.delete(`/stutest/${userid}/${test_name}`);

    dispatch({
      type: ActionType.STU_TESTS_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlertValue('Student test Removed', 'success', '01'));
  } catch (err: any) {
    dispatch({
      type: ActionType.STU_TESTS_FAIL,
      payload: err.response.statusText // { msg: err.response.statusText, status: err.response.status },
    });
  }
};
