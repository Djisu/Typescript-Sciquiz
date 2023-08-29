import { useParams } from 'react-router-dom';
import api from '../utils/api.js';
import { setAlert } from './alert.js';

import {
  QUESTION_REQUEST,
  QUESTION_SUCCESS,
  QUESTION_FAIL,
  QUESTION_LOADED,
  FIND_QUESTION_REQUEST,
  FIND_QUESTION_SUCCESS,
  FIND_QUESTION_FAIL,
  SELECTED_QUESTION_REQUEST,
  SELECTED_QUESTION_SUCCESS,
  SELECTED_QUESTION_FAIL,
  COUNTED_QUESTION_REQUEST,
  COUNTED_QUESTION_SUCCESS,
  COUNTED_QUESTION_FAIL,
  COUNTED_QUESTION_LOADED,
} from './types.js';

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
    if (err) {
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
  console.log('in deleteQuestion action:', id);

  dispatch({ type: QUESTION_REQUEST });
  try {
    const res = await api.delete(`/question/${id}`);

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

export const selectQuestions =
  (
    checkedTopics,
    checkedDifficultylevels,
    checkedSubjects,
    userId,
    noofquestions
  ) =>
  async (dispatch) => {
    dispatch({ type: SELECTED_QUESTION_REQUEST });

    console.log(
      'checkedTopics, checkedDifficultylevels, userId==',
      checkedTopics,
      checkedDifficultylevels,
      checkedSubjects,
      userId,
      noofquestions
    );

    try {
      console.log('in selectQuestions about to get');

      noofquestions = parseInt(noofquestions);

      //  const url = `/question/${checkedTopics}/${checkedDifficultyLevels}/${userId}`;
      const res = null;

      // Check null values
      if (
        checkedTopics.length > 0 &&
        checkedDifficultylevels.length > 0 &&
        checkedSubjects.length > 0 &&
        noofquestions > 0
      ) {
        res = await api.get(
          `/question/${checkedTopics}/${checkedDifficultylevels}/${checkedSubjects}/${userId}/${noofquestions}`
        );
      }

      console.log('res.data==', res.data);

      dispatch({ type: SELECTED_QUESTION_SUCCESS, payload: res.data });
    } catch (error) {
      console.error('Error fetching question:', error);
      dispatch({ type: SELECTED_QUESTION_FAIL });
    }
  };

export const selectQuestionsTopics =
  (checkedTopics, checkedSubjects, userId, noofquestions) =>
  async (dispatch) => {
    dispatch({ type: SELECTED_QUESTION_REQUEST });

    console.log(
      'checkedTopics,  userId==',
      checkedTopics,
      checkedSubjects,
      userId,
      noofquestions
    );

    try {
      console.log('in selectQuestionsTopics about to get');

      noofquestions = parseInt(noofquestions);

      //  const url = `/question/${checkedTopics}/${userId}`;
      let res = null;

      // Check null selectQuestionsTopics
      if (checkedTopics.length > 0) {
        console.log(
          'in res = await api.get(`/question/${checkedTopics}/${checkedSubjects}/${userId}`);'
        );

        res = await api.get(
          `/question/${checkedTopics}/${checkedSubjects}/${userId}/${noofquestions}`
        );
      }

      console.log('selectQuestionsTopics res.data==', res.data);

      dispatch({ type: SELECTED_QUESTION_SUCCESS, payload: res.data });
    } catch (error) {
      console.error('Error fetching question:', error);
      dispatch({ type: SELECTED_QUESTION_FAIL });
    }
  };

export const selectQuestionsTopicsDifficultylevels =
  (
    checkedTopics,
    checkedDifficultylevels,
    checkedSubjects,
    userId,
    noofquestions
  ) =>
  async (dispatch) => {
    dispatch({ type: SELECTED_QUESTION_REQUEST });

    console.log(
      'checkedTopics,checkedDifficultylevels,  userId==',
      checkedTopics,
      checkedDifficultylevels,
      checkedSubjects,
      userId,
      parseInt(noofquestions)
    );

    try {
      console.log('in selectQuestionsTopicsDifficultylevels about to get');

      //  const url = `/question/${checkedTopics}/${checkedSubjects}/${userId}`;
      let res = null;
      noofquestions = parseInt(noofquestions);

      // Check null selectQuestionsTopics
      if (checkedTopics.length > 0 && checkedDifficultylevels.length > 0) {
        console.log(
          'in res = await api.get(`/question/${checkedTopics}/${checkedDifficultylevels}/${checkedSubjects}/${userId}`);'
        );

        res = await api.get(
          `/question/${checkedTopics}/${checkedDifficultylevels}/${checkedSubjects}/${userId}/${noofquestions}`
        );
      }

      console.log('selectQuestionsTopicsDifficultylevels res.data==', res.data);

      dispatch({ type: SELECTED_QUESTION_SUCCESS, payload: res.data });
    } catch (error) {
      console.error('Error fetching question:', error);
      dispatch({ type: SELECTED_QUESTION_FAIL });
    }
  };

export const selectQuestionsDifficultylevels =
  (checkedDifficultylevels, checkedSubjects, userId, noofquestions) =>
  async (dispatch) => {
    dispatch({ type: SELECTED_QUESTION_REQUEST });

    console.log(
      'checkedDifficultylevels, userId==',
      checkedDifficultylevels,
      userId,
      noofquestions
    );

    try {
      console.log('in selectQuestionsDifficultylevels about to get');

      //  const url = `/question/${checkedTopics}/${checkedDifficultyLevels}/${checkedSubjects}/${userId}`;
      let res = null;
      noofquestions = parseInt(noofquestions);

      // Check null values
      if (checkedDifficultylevels.length > 0) {
        res = await api.get(
          `/question/${checkedDifficultylevels}/${checkedSubjects}/${userId}/${noofquestions}`
        );
      }

      console.log('res.data==', res.data);

      dispatch({ type: SELECTED_QUESTION_SUCCESS, payload: res.data });
    } catch (error) {
      console.error('Error fetching question:', error);
      dispatch({ type: SELECTED_QUESTION_FAIL });
    }
  };

export const selectQuestionsSubjects =
  (checkedSubjects, userId, noofquestions) => async (dispatch) => {
    dispatch({ type: SELECTED_QUESTION_REQUEST });

    console.log('checkedSubjects,  userId==', checkedSubjects, userId);

    try {
      console.log('in selectQuestionsSubjects about to get');

      // Check null values
      if (checkedSubjects.length > 0) {
        console.log(
          'in await api.get(`/question/${checkedSubjects}/${userId}`)'
        );
      }
      const res = await api.get(
        `/question/${checkedSubjects}/${userId}/${noofquestions}`
      );
      console.log('res.data==', res.data);

      dispatch({ type: SELECTED_QUESTION_SUCCESS, payload: res.data });
    } catch (error) {
      console.error('Error fetching question:', error);
      dispatch({ type: SELECTED_QUESTION_FAIL });
    }
  };
