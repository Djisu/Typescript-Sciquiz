import api from '../utils/api.js';
import { setAlert } from './alert.js';

import {
  TESTS_SUCCESS,
  TESTS_FAIL,
  TESTS_REQUEST,
  TESTS_LOADED,
} from './types.js';

// Load Tests
export const loadTests = () => async (dispatch) => {
  console.log('in action loadTests');

  try {
    const res = await api.get('/tests');

    console.log(' res.data:', res.data);

    dispatch({
      type: TESTS_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TESTS_FAIL,
    });
  }
};

// Load Tests Questions Only
export const loadTestsQuestions =
  ({ test_name }) =>
  async (dispatch) => {
    console.log('in loadTests');

    try {
      const res = await api.get(`/tests/${test_name}`);

      console.log(' res.data[0]:', res.data[0]);

      dispatch({
        type: TESTS_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: TESTS_FAIL,
      });
    }
  };

// Get Question
export const getTest = (id) => async (dispatch) => {
  dispatch({ type: TESTS_REQUEST });

  try {
    const res = await api.get(`/tests/${id}`);

    dispatch({
      type: TESTS_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('Tests obtained', 'success'));
  } catch (err) {
    dispatch({
      type: TESTS_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create or update Question
export const createTests = (testData) => async (dispatch) => {
  console.log('in createTest action', testData);

  if (testData.question === '') {
    alert('Empty question');
    return;
  }
  const tokenX = localStorage.getItem('token');

  if (!tokenX) {
    alert('You must login');
    return;
  }

  dispatch({ type: TESTS_REQUEST });

  try {
    const res = await api.post('/tests', testData);

    console.log('create test successful', res.data);

    dispatch({
      type: TESTS_LOADED,
      payload: res.data,
    });

    dispatch(setAlert('Test Creation Successful', 'success'));
  } catch (err) {
    //const errors = err.response.data.errors;

    if (err) {
      //  errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      dispatch(setAlert(err.msg, 'danger'));
    }

    dispatch({
      type: TESTS_FAIL,
      payload: { msg: 'Error has occured' },
    });
  }
};

// Update Tests
export const updateTests =
  (formData, edit = false) =>
  async (dispatch) => {
    dispatch({ type: TESTS_REQUEST });

    try {
      const res = await api.put('/', formData);

      dispatch({
        type: TESTS_SUCCESS,
        payload: res.data,
      });

      dispatch(setAlert('Tests Update Successful', 'success'));
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: TESTS_FAIL,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

// Delete Question
export const deleteTest = (id) => async (dispatch) => {
  dispatch({ type: TESTS_REQUEST });

  console.log('in deleteTest action');

  try {
    const res = await api.delete(`/tests/${id}`);

    dispatch({
      type: TESTS_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('Tests Removed', 'success'));
  } catch (err) {
    dispatch({
      type: TESTS_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
