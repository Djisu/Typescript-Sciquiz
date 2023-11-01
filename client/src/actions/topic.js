import api from '../utils/api.js';
import { setAlert } from './alert.js';

import {
  TOPIC_SUCCESS,
  TOPIC_FAIL,
  TOPIC_REQUEST,
  TOPIC_LOADED,
  UNIC_TOPIC_REQUEST,
  UNIC_TOPIC_SUCCESS,
  UNIC_TOPIC_FAIL,
  UNIC_TOPIC_LOADED,
} from './types.js';

// Fetch Topics
export const fetchTopics = (subjectName) => async (dispatch) => {
  //  console.log('in fetchTopics');

  dispatch({ type: TOPIC_REQUEST });

  try {
    const res = await api.get(`/topic/${subjectName}`);

    //console.log(' res.data:', res.data);

    dispatch({
      type: TOPIC_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TOPIC_FAIL,
    });
  }
};

// Load Topics
export const loadTopics = () => async (dispatch) => {
  console.log('in loadTopics');

  try {
    const res = await api.get('/topic');

    console.log(' res.data[0]:', res.data[0]);

    dispatch({
      type: TOPIC_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TOPIC_FAIL,
    });
  }
};

// Action creator for fetching unique topics
export const fetchUniqueTopics = () => async (dispatch) => {
  dispatch({ type: UNIC_TOPIC_REQUEST });

  //  console.log('in action fetchUniqueTopics');

  try {
    const res = await api.get('/unique_topics');

    //console.log('in topics action res.data', res.data);

    const uniqueTopics = res.data;

    dispatch({ type: UNIC_TOPIC_SUCCESS, payload: res.data });
  } catch (error) {
    console.error('Error fetching unique topics:', error);

    dispatch({ type: UNIC_TOPIC_FAIL, error: 'Failed to fetch unique topics' });
  }
};

// Create or update Question
export const createTopic = (topicData) => async (dispatch) => {
  dispatch({ type: TOPIC_REQUEST });

  console.log('in topic action');

  try {
    const res = await api.post('/topic', topicData);

    dispatch({
      type: TOPIC_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('Topic Creation Successful', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: TOPIC_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete Question
export const deleteTopic = (id) => async (dispatch) => {
  dispatch({ type: TOPIC_REQUEST });

  console.log('in deleteTopic action');

  try {
    const res = await api.delete(`/topic/${id}`);

    dispatch({
      type: TOPIC_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('Topic Removed', 'success'));
  } catch (err) {
    dispatch({
      type: TOPIC_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
