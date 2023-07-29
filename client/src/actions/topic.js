import api from '../utils/api';
import { setAlert } from './alert';

import { TOPIC_SUCCESS, TOPIC_FAIL, TOPIC_REQUEST, TOPIC_LOADED } from './types';

// Load Topics
export const loadTopics = () => async (dispatch) => {
console.log('in loadTopics');

  try {
    const res = await api.get('/topic');
    
console.log(' res.data[0]:',  res.data[0]);

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


// Create or update Question
export const createTopic = (topicData) => async (dispatch) => {
  dispatch({ type: TOPIC_REQUEST }); 

console.log('in topic action', )

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
    
  try {
    const res = await api.delete(`/${id}`);

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
