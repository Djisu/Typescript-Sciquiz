import api from '../utils/api';
import { setAlert } from './alert';

import { QUESTION_REQUEST, QUESTION_SUCCESS, QUESTION_FAIL, QUESTION_LOADED,
FIND_QUESTION_REQUEST, FIND_QUESTION_SUCCESS, FIND_QUESTION_FAIL } from './types';
  
// Load Difficult levels
export const loadQuestions = () => async (dispatch) => {
//console.log('in loadQuestions');

  try {
    const res = await api.get('/question');
    
//console.log(' res.data[0]:',  res.data[0]);

    dispatch({
      type: QUESTION_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: QUESTION_FAIL,
    });
  }
};

// Get Question
export const getQuestion = (questionData) => async (dispatch) => {
//  console.log('in  getQuestion ', questionData);

  dispatch({ type: QUESTION_REQUEST });  
  try {
    const res = await api.get(`/question/${questionData}`);

    dispatch({
      type: QUESTION_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('Question Request Successful', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: QUESTION_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create or update Question
export const createQuestion = (questionData) => async (dispatch) => {
  
//  console.log('in  createQuestion ', questionData);

  if (questionData.question === '') {
    alert('Empty subject');
    return;
  } 
  const tokenX = localStorage.getItem('token');

  if (!tokenX) {
    alert('You must login', 'danger');
    return;
  }

  dispatch({ type: QUESTION_REQUEST });

  try {
    const res = await api.post('/question', questionData);

    //console.log('create Question successful');

    dispatch({
      type: QUESTION_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('Question Creation Successful', 'success'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: QUESTION_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
// experiement //
// find Question
export const findQuestion = (question) => async (dispatch) => {

    //console.log('in actions findQuestion', question);

  dispatch({ type: FIND_QUESTION_REQUEST });  
  try {
    //const res = await api.get(`/question/${question}`);

    const res = await api.get(`/question/${question}`);
    //console.log('otherQuestions res.data:', res.data)

    dispatch({
      type: FIND_QUESTION_SUCCESS,
      payload: res.data,
    });
    
    //dispatch(setAlert('Question found', 'success'));
  } catch (err) {
    if (err){
        dispatch({
        type: FIND_QUESTION_FAIL,
        payload: { msg: 'Error has occured' },
      });
    }
      
  }
};

//end of experiment


// Delete Question
export const deleteQuestion = (id) => async (dispatch) => {
    
  dispatch({ type: QUESTION_REQUEST });  
  try {
    const res = await api.delete(`/${id}`);

    dispatch({
      type: QUESTION_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('Question Removed', 'success'));
  } catch (err) {
    dispatch({
      type: QUESTION_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
