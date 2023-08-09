import api from '../utils/api';
import { setAlert } from './alert';

import { STU_TESTS_SUCCESS, STU_TESTS_FAIL, STU_TESTS_REQUEST, STU_TESTS_LOADED } from './types';

// Load Tests
export const loadStuTests = () => async (dispatch) => {
console.log('in loadStuTests');

  try {
    const res = await api.get('/stutests');
    
    console.log(' res.data[0]:',  res.data[0]);

    dispatch({
      type: STU_TESTS_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: STU_TESTS_FAIL,
    });
  }
};

// Get Question
export const getStuTest = (testData) => async (dispatch) => {
  dispatch({ type: STU_TESTS_REQUEST }); 

  const { userid, test_name } = testData;

  try {
    const res = await api.get(`/stutests/${userid}/${test_name}`);

    dispatch({
      type: STU_TESTS_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('Student Test obtained', 'success'));
  } catch (err) {
    dispatch({
      type: STU_TESTS_FAIL,
      payload: { msg: 'Error has occued' },
    });
  }
};

// Create or update Question
export const createStuTests = (testData) => async (dispatch) => {
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

  dispatch({ type: STU_TESTS_REQUEST });

 console.log('in createStuTests action about to post');

  try {
    const res = await api.post('/stutest', testData);

    console.log('create test successful', res.data);

    dispatch({
      type: STU_TESTS_LOADED,
      payload: res.data,
    });

    dispatch(setAlert('Test Creation Successful', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: STU_TESTS_FAIL,
      payload: { msg: 'Error has occured' },
    });
  }
};

// Update Tests
export const updateStuTests =
  (testData) => async (dispatch) => {
    dispatch({ type: STU_TESTS_REQUEST });

    const { userid, test_name } = testData;

    try {
      const res = await api.put(`/stutests/${userid}/${test_name}`, testData);

      dispatch({
        type: STU_TESTS_SUCCESS,
        payload: res.data,
      });

      dispatch(setAlert('Tests Update Successful', 'success'));
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: STU_TESTS_FAIL,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

// Delete Question
export const deleteStuTest = (testData) => async (dispatch) => {
  dispatch({ type: STU_TESTS_REQUEST });

  const {userid, test_name} = testData

  console.log('in deleteTest action')
     
  try {
    const res = await api.delete(`/stutest/${userid}/${test_name}`);

    dispatch({
      type: STU_TESTS_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('Student test Removed', 'success'));
  } catch (err) {
    dispatch({
      type: STU_TESTS_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
