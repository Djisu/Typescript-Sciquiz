import { useParams } from 'react-router-dom';
import api from '../utils/api.js';
import { setAlert } from './alert.js';

import {
  TESTS_SUCCESS,
  TESTS_FAIL,
  TESTS_REQUEST,
  TESTS_LOADED,
  PUT_TEST_REQUEST,
  PUT_TEST_SUCCESS,
  PUT_TEST_FAIL,
  SCORE_TEST_REQUEST,
  SCORE_TEST_SUCCESS,
  SCORE_TEST_FAIL,
  SCORE_QUESTION_REQUEST,
  SCORE_QUESTION_SUCCESS,
  SCORE_QUESTION_FAIL,
  OVERALL_SCORE_QUESTION_REQUEST,
  OVERALL_SCORE_QUESTION_SUCCESS,
  OVERALL_SCORE_QUESTION_FAIL,
  DELETE_CANDIDATE_TESTS_REQUEST,
  DELETE_CANDIDATE_TESTS_SUCCESS,
  DELETE_CANDIDATE_TESTS_FAIL,
  EACH_TOPIC_REQUEST,
  EACH_TOPIC_SUCCESS,
  EACH_TOPIC_FAIL,
  SELECTED_TEST_REQUEST,
  SELECTED_TEST_SUCCESS,
  SELECTED_TEST_FAIL,
  TESTS_UNMARKED_SUCCESS,
  TESTS_UNMARKED_FAIL,
  TESTS_UNMARKED_REQUEST,
  TESTS_UNMARKED_LOADED,
} from './types.js';

// Load Tests
export const loadTests = () => async (dispatch) => {
  //  console.log('IN ACTION loadTests');
  dispatch({ type: TESTS_REQUEST });

  try {
    const res = await api.get('/tests');

    //console.log('IN ACTION loadTests res.data:', res.data);

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

// Load Unmarked Tests
export const loadTestsUnmarked = () => async (dispatch) => {
  console.log('IN ACTION loadTestsUnmarked');

  dispatch({ type: TESTS_UNMARKED_REQUEST });

  try {
    const randNum = Math.floor(Math.random() * 1000000);

    const res = await api.get(`/testsUnmarked/unmarked/${randNum}`);

    console.log('IN ACTION loadTestsUnmarked res.data:', res.data);

    if (!res.data) {
      dispatch(setAlert('No tests NOT mark!!!', 'danger'));
    }

    dispatch({
      type: TESTS_UNMARKED_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TESTS_UNMARKED_FAIL,
    });
  }
};

// Load Tests Questions Only
export const loadTestsUserid = (userId) => async (dispatch) => {
  console.log('in action creator loadTestsUserid ', userId);

  dispatch({ type: TESTS_REQUEST });

  const randNum = Math.floor(Math.random() * 1000000);

  try {
    const res = await api.get(`/tests/${randNum}/${userId}`);

    console.log('TESTS FOUND!!! res.data:', res.data);

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
export const getTest = (test_name) => async (dispatch) => {
  console.log('in  getTest::', test_name);

  if (test_name.length == 0) {
    dispatch(setAlert('Tests name not found', 'danger'));
  }

  dispatch({ type: SELECTED_TEST_REQUEST });

  try {
    const res = await api.get(`/tests/${test_name}`);

    console.log('SELECTED TEST FETCHED res.data: ', res.data);

    dispatch({
      type: SELECTED_TEST_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log('Error ocurred', err);

    dispatch({
      type: SELECTED_TEST_FAIL,
      payload: { msg: 'Error has occured' },
    });
    dispatch(setAlert('Error in fetching data', 'danger'));
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
    dispatch(setAlert('Test Creation failed', 'danger'));
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

export const postAnswer =
  (questionId, userAnswers, testName, userId) => async (dispatch) => {
    console.log('in postAnswer = ', questionId, userAnswers, testName, userId);

    dispatch({ type: PUT_TEST_REQUEST });

    try {
      console.log('before await api.put(/updateDocument)');

      // Make the PUT request to the API endpoint
      const response = await api.put(`/tests/${testName}/${questionId}`, {
        answer_flag: userAnswers,
        userId: userId,
      });

      console.log('AFTER await api.put(/api/updateDocument)');

      // Handle the response from the server if needed.  questionId, userAnswers, testName
      console.log(response.data);

      // Dispatch a success action
      dispatch({ type: PUT_TEST_SUCCESS, payload: response.data });
      dispatch(setAlert('Answer updated successfully', 'success'));
    } catch (error) {
      // Handle errors if the request fails.
      console.error(error);

      // Dispatch an error action
      dispatch({ type: PUT_TEST_FAIL, payload: error.msg });
      dispatch(setAlert('Failed to update answer', 'danger'));
    }
  };

export const score_test = (name, userId) => async (dispatch) => {
  dispatch({ type: SCORE_QUESTION_REQUEST });

  console.log('in score_test action creator :: ', name);

  //Generate a random number
  const randNum = Math.floor(Math.random() * 1000000);

  try {
    const res = await api.get(`/tests/${name}/${userId}/${randNum}`);

    console.log('score_test action creator res.data== ', res.data);

    if (res.data.length > 0) {
      dispatch({ type: SCORE_QUESTION_SUCCESS, payload: res.data });

      dispatch(setAlert('Test scored succesfully', 'success'));
    } else {
      dispatch(setAlert('No result found', 'danger'));
    }
  } catch (error) {
    dispatch({ type: SCORE_QUESTION_FAIL, payload: error.message });
    dispatch(setAlert('Error in scoring candidate', 'danger'));
  }
};

export const score_individual_test = (testname, userId) => async (dispatch) => {
  dispatch({ type: EACH_TOPIC_REQUEST });

  console.log('in score_individual_test action creator :: ', testname);

  //Generate a random number
  const randNum = Math.floor(Math.random() * 1000000);

  try {
    const res = await api.get(`/scoreCandidate/${testname}/${randNum}`);

    console.log(
      'in score_individual_test action creator res.data== ',
      res.data
    );

    dispatch({ type: EACH_TOPIC_SUCCESS, payload: res.data });

    dispatch(setAlert('Test scored succesfully', 'success'));
  } catch (error) {
    dispatch({ type: EACH_TOPIC_FAIL, payload: error.message });
    dispatch(setAlert('Error in scoring candidate', 'danger'));
  }
};

export const overall_score_test = (testName) => async (dispatch) => {
  dispatch({ type: OVERALL_SCORE_QUESTION_REQUEST });

  console.log('in overall_score_test action creator:: ', testName);
  try {
    const res = await api.get(`/scoreCandidate/${testName}`);

    console.log('in overall_score_test action creator res.data== ', res.data);

    if (res.data.length > 0) {
      dispatch({ type: OVERALL_SCORE_QUESTION_SUCCESS, payload: res.data });
      dispatch(setAlert('Test scored successfully', 'success'));
    } else {
      dispatch(setAlert('No tests found for candidate!!', 'danger'));
    }
  } catch (error) {
    dispatch({ type: OVERALL_SCORE_QUESTION_FAIL, payload: error.message });
    dispatch(setAlert('Error in scoring candidate', 'danger'));
  }
};

// Delete Question
export const deleteCandidateTests = (testName) => async (dispatch) => {
  dispatch({ type: DELETE_CANDIDATE_TESTS_REQUEST });

  console.log('in deleteCandidateTests action');

  try {
    const res = await api.delete(`/scoreCandidate/${testName}`);

    dispatch({
      type: DELETE_CANDIDATE_TESTS_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlert('Tests Removed', 'success'));
  } catch (err) {
    dispatch({
      type: DELETE_CANDIDATE_TESTS_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
