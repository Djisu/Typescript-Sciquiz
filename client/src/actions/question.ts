import { useParams } from 'react-router-dom';
import api from '../utils/api.ts';
import { setAlert } from './alert.ts';
import { toast } from 'react-toastify';
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
  POST_QUESTION_REQUEST,
  POST_QUESTION_SUCCESS,
  POST_QUESTION_FAIL,
} from './types.js';
import { Dispatch } from 'react';
import ActionType from './action-types/index.ts';
import { QuestionAction } from './action-types/question.ts';
import { setAlertValue } from './action-types/alert.ts';
import { AlertAction } from './action-types/alert.ts';
import { FindQuestionAction } from './action-types/findQuestion.ts';
import { SelectedQuestionAction } from './action-types/selectedQuestion.ts';
import { PostQuestionAction } from './action-types/postQuestion.ts';
import { RootState } from '../reducers/index.ts';
import { ThunkAction } from 'redux-thunk';
//import { question } from '../reducers/index.ts';

interface Question {
  question: string; 
  answer: string; 
  difficulty_level: string; 
  subject_name: string; 
  topic: string; 
  question_year: number;
}

// Load Difficult levels
export const loadQuestions = (): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<QuestionAction>) => {

  try {
    const res = await api.get('/question');

    dispatch({
      type: ActionType.QUESTION_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ActionType.QUESTION_FAIL,
      payload: 'Error in fetching question'
    });
  }
};

// Get Question
export const getQuestion = (questionData: Question): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<QuestionAction | AlertAction>) => {

  dispatch({ type: ActionType.QUESTION_REQUEST, payload: 'Ready to get data' });
  try {
    const res = await api.get(`/question/${questionData}`);

    dispatch({
      type: ActionType.QUESTION_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlertValue('Question Request Successful', 'success', '01'));
  } catch (err: any) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error: any) => dispatch(setAlertValue(error.msg, 'danger', '01')));
    }

    dispatch({
      type: ActionType.QUESTION_FAIL,
      payload: err.response.statusText //{ msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create or update Question
export const createQuestion = (questionData: Question): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<QuestionAction | AlertAction>) => {

  if (questionData.subject_name === '') {
    alert('Empty subject');
    return;
  }
  const tokenX = localStorage.getItem('token');

  if (!tokenX) {
    setAlertValue('You must login', 'danger', '01');
    return;
  }

  dispatch({ type: ActionType.QUESTION_REQUEST, payload: 'Getting data' });

  try {
    const res = await api.post('/question', questionData);

    dispatch({
      type: ActionType.QUESTION_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlertValue('Question Creation Successful', 'success', '01'));
  } catch (err: any) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error: any) => dispatch(setAlertValue(error.msg, 'danger', '01')));
    }

    dispatch({
      type: ActionType.QUESTION_FAIL,
      payload: err.response.statusText // { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const findQuestion = (question: string): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<FindQuestionAction>) => {

  dispatch({ type: ActionType.FIND_QUESTION_REQUEST, payload: 'Getting ready' });
  try {
    const res = await api.get(`/question/${question}`);

    dispatch({
      type: ActionType.FIND_QUESTION_SUCCESS,
      payload: res.data,
    });

  } catch (err) {
    if (err) {
      dispatch({
        type: ActionType.FIND_QUESTION_FAIL,
        payload: 'Error has occurred' //{ msg: 'Error has occurred' },
      });
    }
  }
};

// Delete Question
export const deleteQuestion = (id: string): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<QuestionAction | AlertAction>) => {

  dispatch({ type: ActionType.QUESTION_REQUEST, payload: 'Getting ready' });
  try {
    const res = await api.delete(`/question/${id}`);

    dispatch({
      type: ActionType.QUESTION_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlertValue('Question Removed', 'success', '01'));
  } catch (err: any) {
    dispatch({
      type: ActionType.QUESTION_FAIL,
      payload: err.response.statusText //{ msg: , status: err.response.status },
    });
  }
};

export const selectQuestions =
  (
    checkedTopics: string[],
    checkedDifficultylevels: string[],
    checkedSubjects: string[],
    userId: string,
    noofquestions: number
  ): ThunkAction<void, RootState, unknown, any>  =>
  async (dispatch: Dispatch<SelectedQuestionAction | AlertAction>) => {
    dispatch({ type: ActionType.SELECTED_QUESTION_REQUEST, payload: "Getting ready" });
 
    try {

      //noofquestions = noofquestions;

      //  const url = `/question/${checkedTopics}/${checkedDifficultyLevels}/${userId}`;
      let res = null;

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

      //  console.log('res.data==', res.data);
      if (res !== null){
        dispatch({ type:  ActionType.SELECTED_QUESTION_SUCCESS, payload: res.data });
      }
      
    } catch (error) {
      console.error('Error fetching question:', error);
      dispatch({ type: ActionType.SELECTED_QUESTION_FAIL, payload: 'Error ' });
    }
  };

export const selectQuestionsTopics =
  (checkedTopics: string[], checkedSubjects: string[], userId: string, noofquestions: number): ThunkAction<void, RootState, unknown, any>  =>
  async (dispatch: Dispatch<SelectedQuestionAction | AlertAction>) => {
    dispatch({ type: ActionType.SELECTED_QUESTION_REQUEST, payload: "Getting ready" });

    if (checkedTopics.length == 0) {
      console.log('No checked topics');
      return;
    }

    try {
      console.log('in selectQuestionsTopics about to get');

      noofquestions = noofquestions;

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

      if (res !== null){
        console.log('selectQuestionsTopics res.data==', res.data);
        dispatch({ type: ActionType.SELECTED_QUESTION_SUCCESS, payload: res.data });
      }
      
    } catch (error) {
      console.error('Error fetching question:', error);
      dispatch({ type: ActionType.SELECTED_QUESTION_FAIL, payload: 'Error in fetching data' });
    }
  };

export const selectQuestionsTopicsDifficultylevels =
  (
    checkedTopics: string[],
    checkedDifficultylevels: string[],
    checkedSubjects: string[],
    userId: string,
    noofquestions: number,
    test_name: string
  ): ThunkAction<void, RootState, unknown, any>  =>
  async (dispatch: Dispatch<SelectedQuestionAction | AlertAction>) => {

    console.log('in selectQuestionsTopicsDifficultylevels action creator');

    try {
      noofquestions = noofquestions;
      const testName = test_name;

      //  let res = null;
      console.log("Values sent: ", checkedTopics,
      checkedDifficultylevels,
      checkedSubjects,
      userId,
      noofquestions,
      test_name)

        const res = await api.get(
          `/question/${checkedTopics}/${checkedDifficultylevels}/${checkedSubjects}/${userId}/${noofquestions}/${testName}`
        );

      console.log('DATA DATA res.data==', res.data);

       if (!res) {
          dispatch( setAlertValue('All selected questions criteria not found', 'danger', "01"));
          dispatch({ type: ActionType.SELECTED_QUESTION_FAIL, payload: 'Error in getting data' });
       }

      console.log('Before ActionType.SELECTED_QUESTION_SUCCESS')

      dispatch({
        type: ActionType.SELECTED_QUESTION_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.error('Error fetching question:', error);
      setAlert('Error fetching question', 'danger')
      dispatch({ type: ActionType.SELECTED_QUESTION_FAIL, payload: 'Error in getting data' });
    }
  };

export const selectQuestionsDifficultylevels =
  (checkedDifficultylevels: string[], checkedSubjects: string[], userId: string, noofquestions: number): ThunkAction<void, RootState, unknown, any>  =>
  async (dispatch: Dispatch<SelectedQuestionAction | AlertAction>) => {
    dispatch({ type: ActionType.SELECTED_QUESTION_REQUEST, payload: "Getting ready" });

    try {
     
      let res = null;

      // Check null values
      if (checkedDifficultylevels.length > 0) {
        res = await api.get(
          `/question/${checkedDifficultylevels}/${checkedSubjects}/${userId}/${noofquestions}`
        );
      }

      //  console.log('res.data==', res.data);
      if (res !== null) {
         dispatch({ type: ActionType.SELECTED_QUESTION_SUCCESS, payload: res.data });
      }
     
    } catch (error) {
      console.error('Error fetching question:', error);
      dispatch({ type: ActionType.SELECTED_QUESTION_FAIL, payload: 'Error in getting data' });
    }
  };

export const selectQuestionsSubjects =
  (checkedSubjects: string[], userId: string, noofquestions: number): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<SelectedQuestionAction | AlertAction>) => {
    dispatch({ type: ActionType.SELECTED_QUESTION_REQUEST, payload: "Getting ready" });

    try {
   
      const res = await api.get(
        `/question/${checkedSubjects}/${userId}/${noofquestions}`
      );
      //  console.log('res.data==', res.data);

      dispatch({ type: ActionType.SELECTED_QUESTION_SUCCESS, payload: res.data });
    } catch (error) {
      console.error('Error fetching question:', error);
      dispatch({ type: ActionType.SELECTED_QUESTION_FAIL, payload: 'Error in getting data' });
    }
  };

export const postAnswer =
  (questionId: string, userAnswer: string, test_name: string): ThunkAction<void, RootState, unknown, any>  => async (dispatch: Dispatch<PostQuestionAction | AlertAction>) => {
    console.log('in postAnswer = (questionId, userAnswer, test_name)');

    dispatch({ type: ActionType.POST_QUESTION_REQUEST, payload: 'Getting ready' });

    try {
      console.log('before await api.put(/updateDocument)');

      const response = await api.put('/updateDocument', {
        user_answer: userAnswer,
        id: questionId,
        test_name: test_name,
      });

      console.log('AFTER await api.put(/api/updateDocument)');

      // Handle the response from the server if needed.
      console.log(response.data);

      // Dispatch a success action
      dispatch({ type: ActionType.POST_QUESTION_SUCCESS, payload: response.data });

      // Show a success toast
      toast.success('Answer updated successfully');
    } catch (error) {
      // Handle errors if the request fails.
      console.error(error);

      // Dispatch an error action
      dispatch({ type: ActionType.POST_QUESTION_FAIL, payload: 'Error in getting data' });

      // Show an error toast
      toast.error('Failed to update answer');
    }
  };
