import api from '../utils/api.js';
import { setAlert } from './alert.js';

import {
  DIFFICULTY_LEVEL_SUCCESS,
  DIFFICULTY_LEVEL_FAIL,
  DIFFICULTY_LEVEL_REQUEST,
  DIFFICULTY_LEVEL_LOADED,
  UNIC_DIFFICULTY_LEVEL_REQUEST,
  UNIC_DIFFICULTY_LEVEL_SUCCESS,
  UNIC_DIFFICULTY_LEVEL_FAIL,
  UNIC_DIFFICULTY_LEVEL_LOADED,
} from './types.js';

// Load User
export const loadDifficultyLevels = () => async (dispatch) => {
  console.log('in loadDifficultyLevels');

  try {
    const res = await api.get('/difficulty_level');

    console.log(' res.data[0]:', res.data[0]);

    dispatch({
      type: DIFFICULTY_LEVEL_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: DIFFICULTY_LEVEL_FAIL,
    });
  }
};

// Create or update profile
export const createDifficultyLevel =
  (difficultyLevelData) => async (dispatch) => {
    console.log('in  createDifficultyLevel ', difficultyLevelData);

    if (difficultyLevelData.level === '') {
      alert('Empty difficultyLevelData');
      return;
    }
    const tokenX = localStorage.getItem('token');

    if (!tokenX) {
      alert('You must login', 'danger');
      return;
    }

    dispatch({ type: DIFFICULTY_LEVEL_REQUEST });

    try {
      const res = await api.post('/difficulty_level', difficultyLevelData);

      console.log('after post difficultyLevelData');

      dispatch({
        type: DIFFICULTY_LEVEL_SUCCESS,
        payload: res.data,
      });

      dispatch(setAlert('difficultyLevel Creation Successful', 'success'));
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: DIFFICULTY_LEVEL_FAIL,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

// Delete difficulty level
export const deleteDifficultyLevel = (id) => async (dispatch) => {
  dispatch({ type: DIFFICULTY_LEVEL_REQUEST });

  console.log('in deleteDifficultyLevel action');

  try {
    const res = await api.delete(`/difficulty_level/${id}`);

    dispatch({
      type: DIFFICULTY_LEVEL_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('Difficulty level Removed', 'success'));
  } catch (err) {
    dispatch({
      type: DIFFICULTY_LEVEL_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Action creator for fetching unique topics
export const fetchUniqueDifficultyLevels = () => async (dispatch) => {
  dispatch({ type: UNIC_DIFFICULTY_LEVEL_REQUEST });

  //  console.log('in action fetchUniqueTopics');

  try {
    const res = await api.get('/unique_difficultylevels');

    //console.log('in topics action res.data', res.data);

    const uniqueTopics = res.data;

    dispatch({ type: UNIC_DIFFICULTY_LEVEL_SUCCESS, payload: res.data });
  } catch (error) {
    console.error('Error fetching unique topics:', error);

    dispatch({
      type: UNIC_DIFFICULTY_LEVEL_FAIL,
      error: 'Failed to fetch unique topics',
    });
  }
};
