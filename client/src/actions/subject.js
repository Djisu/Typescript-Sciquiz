import api from '../utils/api.js';
import { setAlert } from './alert.js';

import {
  SUBJECT_SUCCESS,
  SUBJECT_FAIL,
  SUBJECT_REQUEST,
  SUBJECT_LOADED,
  UNIC_SUBJECT_REQUEST,
  UNIC_SUBJECT_SUCCESS,
  UNIC_SUBJECT_FAIL,
  UNIC_SUBJECT_LOADED,
} from './types.js';

// Load Subjects
export const loadSubjects = () => async (dispatch) => {
  //console.log('in loadSubjects');

  try {
    const res = await api.get('/subject');

    //console.log('subject res.data[0]:',  res.data[0]);

    dispatch({
      type: SUBJECT_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SUBJECT_FAIL,
    });
  }
};

// Create or update Subject
export const createSubject = (subjectData) => async (dispatch) => {
  console.log('in  createSubject ', subjectData);

  if (subjectData.subject_name === '') {
    alert('Empty subject');
    return;
  }
  const tokenX = localStorage.getItem('token');

  if (!tokenX) {
    alert('You must login', 'danger');
    return;
  }

  dispatch({ type: SUBJECT_REQUEST });
  try {
    const res = await api.post('/subject', subjectData);

    console.log('after post subject');

    dispatch({
      type: SUBJECT_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('Subject Creation Successful', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: SUBJECT_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete Subject
export const deleteSubject = (id) => async (dispatch) => {
  dispatch({ type: SUBJECT_REQUEST });

  console.log('in deleteSubject action:', id);

  try {
    const res = await api.delete(`/subject/${id}`);

    dispatch({
      type: SUBJECT_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('Subject Removed', 'success'));
  } catch (err) {
    dispatch({
      type: SUBJECT_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Action creator for fetching unique subjects
export const fetchUniqueSubjects = () => async (dispatch) => {
  dispatch({ type: UNIC_SUBJECT_REQUEST });

  //  console.log('in action fetchUniqueSubjects');

  try {
    const res = await api.get('/unique_subjects');

    //console.log('in topics action res.data', res.data);

    const uniquesubjects = res.data;

    dispatch({ type: UNIC_SUBJECT_SUCCESS, payload: res.data });
  } catch (error) {
    console.error('Error fetching unique subjects:', error);

    dispatch({
      type: UNIC_SUBJECT_FAIL,
      error: 'Failed to fetch unique subjects',
    });
  }
};
