import { useParams } from 'react-router-dom';
import api from '../utils/api.ts';

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
} from './types.ts';
import ActionType from './action-types/index.ts';
import { AlertAction, setAlertValue } from './action-types/alert.ts';
import { TestsAction } from './action-types/tests.ts';
import { Dispatch } from 'react';
import { TestsUnmarkedAction } from './action-types/testsUnmarked.ts';
import { SelectedTestAction } from './action-types/selectedTest.ts';
import { PutTestAction } from './action-types/putTest.ts';
import { ScoreQuestionAction } from './action-types/scoreQuestion.ts';
import { EachTopicAction } from './action-types/eachTopic.ts';
import { OverallScoreQuestionAction } from './action-types/overallScoreQuestion.ts';
import { DeleteCandidateAction } from './action-types/deleteCandidateTests.ts';
import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { RootState } from '../reducers/index.ts';
import { setAlert } from './alert.ts';

interface ITestData {
  userId: string;
  test_name: string;
  question: string;
  answer: string;
  marks: number;
  pass_marks: number;
  subject_name: string;
}

interface IUserid {
   userId: string
}


// Load Tests
export const loadTests = (): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch<TestsAction>) => {
  console.log('IN ACTION loadTests');

  dispatch({ type: ActionType.TESTS_REQUEST, payload: 'Getting ready' });

  try {
    const res = await api.get('/tests');

    console.log('IN ACTION loadTests res.data:', res.data); 

    dispatch({
      type: ActionType.TESTS_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ActionType.TESTS_FAIL,
      payload: "Error in getting data"
    });
  }
};

// Load Unmarked Tests
export const loadTestsUnmarked = (): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch<TestsUnmarkedAction | AlertAction>) => {
  //console.log('IN ACTION loadTestsUnmarked');

  dispatch({ type: ActionType.TESTS_UNMARKED_REQUEST, payload: 'Getting ready' });

  try {
    const randNum = Math.floor(Math.random() * 1000000);


    const res = await api.get(`/testsUnmarked/unmarked/${randNum}`);

    //console.log('IN ACTION loadTestsUnmarked res.data:', res.data);

    if (!res.data) {
      //dispatch(setAlertValue('No tests NOT mark!!!', 'danger', '01'));
      alert('No tests NOT mark!!!')
    }

    dispatch({
      type: ActionType.TESTS_UNMARKED_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ActionType.TESTS_UNMARKED_FAIL,
      payload: 'Error in getting data'
    });
  }
};

// Load Tests Questions Only
export const loadTestsUserid = (userId: string): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch<AlertAction | TestsAction>) => {
  console.log('in action creator loadTestsUserid ', userId);

  dispatch({ type: ActionType.TESTS_REQUEST, payload: 'Getting ready' });

  const randNum = Math.floor(Math.random() * 1000000);

  try {
    const res = await api.get(`/tests/${randNum}/${userId}`);

    if (res.data.length > 0){
      console.log('TESTS FOUND!!! res.data:', res.data);

      dispatch({
        type: ActionType.TESTS_LOADED,
        payload: res.data,
      });
    }else{
      dispatch({
        type: ActionType.TESTS_FAIL,
        payload: 'Error in getting data'
      });
    }
    

    
  } catch (err) {
    dispatch({
      type: ActionType.TESTS_FAIL,
      payload: 'Error in getting data'
    });
  }
};

// Load Tests Questions Only
export const loadTestsQuestions =
  ({ test_name }: { test_name: string }): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch<TestsAction>) => {
    console.log('in loadTests');

    try {
      const res = await api.get(`/tests/${test_name}`);

      console.log(' res.data[0]:', res.data[0]);

      dispatch({
        type: ActionType.TESTS_LOADED,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: ActionType.TESTS_FAIL,
        payload: "Error in getting data"
      });
    }
  };

// Get Question
export const getTest = (test_name: string): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch<SelectedTestAction | AlertAction>) => {
  console.log('in  getTest::', test_name);

  if (!test_name || test_name.length === 0) {
    console.log('Test name not found')

    alert('Test name not found');
    return;
  }

  dispatch({ type: ActionType.SELECTED_TEST_REQUEST, payload: 'Getting ready' });

  try {
    console.log('about to go to /tests/${test_name}')
    
    const res = await api.get(`/tests/${test_name}`);

    console.log('SELECTED TEST FETCHED res.data: ', res.data);

    dispatch({
      type: ActionType.SELECTED_TEST_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log('Error ocurred', err);

    dispatch({
      type: ActionType.SELECTED_TEST_FAIL,
      payload: 'Error has occurred'  //{ msg: 'Error has occurred' },
    });
    //dispatch(setAlertValue('Error in fetching data', 'danger', '01'));
    alert('Error in fetching data')
  }
};

// Create or update Question
export const createTests = (testData: ITestData): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch<TestsAction | AlertAction>) => {
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

  dispatch({ type: ActionType.TESTS_REQUEST, payload: 'Getting ready' });

  try {
    const res = await api.post('/tests', testData);

    console.log('create test successful', res.data);

    dispatch({
      type: ActionType.TESTS_LOADED,
      payload: res.data,
    });

    dispatch(setAlertValue('Test Creation Successful', 'success', '01'));
  } catch (err: any) {
    //const errors = err.response.data.errors;

    if (err) {
      //  errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      dispatch(setAlertValue(err.msg, 'danger', '01'));
    }

    dispatch({
      type: ActionType.TESTS_FAIL,
      payload: 'Error has occurred'  //{ msg: 'Error has occurred' },
    });
    // dispatch(setAlertValue('Test Creation failed', 'danger', '01'));
    alert('Test Creation failed')
  }
};

// Update Tests
export const updateTests =
  (formData: ITestData, edit = false): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch<TestsAction | AlertAction>) => {
    dispatch({ type: ActionType.TESTS_REQUEST, payload: 'Getting ready' });

    try {
      const res = await api.put('/', formData);

      dispatch({
        type: ActionType.TESTS_SUCCESS,
        payload: res.data,
      });

      // dispatch(setAlertValue('Tests Update Successful', 'success', '01'));
      alert('Tests Update Successful')
    } catch (err: any) {
      const {errors} = err.response.data;

      if (errors) {
        errors.forEach((error: any) => dispatch(setAlertValue(error.msg, 'danger', '01')));
      }

      dispatch({
        type: ActionType.TESTS_FAIL,
        payload: err.response.statusText //{ msg: , status: err.response.status },
      });
    }
  };

// Delete Question
export const deleteTest = (id: string): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch<TestsAction | AlertAction>) => {
  dispatch({ type: ActionType.TESTS_REQUEST, payload: 'Getting ready' });

  console.log('in deleteTest action');

  try {
    const res = await api.delete(`/tests/${id}`);

    dispatch({
      type: ActionType.TESTS_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlertValue('Tests Removed', 'success', '01'));
  } catch (err: any) {
    dispatch({
      type: ActionType.TESTS_FAIL,
      payload: err.response.statusText //{ msg: , status: err.response.status },
    });
  }
};

export const postAnswer =
  (questionId: string, userAnswers: string, testName: string, userId: (string | null)): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch<PutTestAction | AlertAction>) => {
    console.log('in postAnswer = ', questionId, userAnswers, testName, userId);

    dispatch({ type: ActionType.PUT_TEST_REQUEST, payload: 'Getting ready' });

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
      dispatch({ type: ActionType.PUT_TEST_SUCCESS, payload: response.data });
      //dispatch(Alert('Answer updated successfully', 'success', 5));
      alert('Answer updated successfully')
    } catch (error: any) {
      // Handle errors if the request fails.
      console.error(error);

      // Dispatch an error action
      dispatch({ type: ActionType.PUT_TEST_FAIL, payload: error.msg });
      dispatch(setAlertValue('Failed to update answer', 'danger', '01'));
    }
  };

export const score_test= (name: string, userId: (string | null)): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch<ScoreQuestionAction | AlertAction>) => {
  dispatch({ type: ActionType.SCORE_QUESTION_REQUEST, payload: 'Getting ready' });

  console.log('in score_test action creator :: ', name);

  //Generate a random number
  const randNum = Math.floor(Math.random() * 1000000);

  try {
    const res = await api.get(`/tests/${name}/${userId}/${randNum}`);

    console.log('???????score_test action creator res.data== ', res.data);

    if (res.data.length > 0) {
      dispatch({ type: ActionType.SCORE_QUESTION_SUCCESS, payload: res.data });

      //dispatch(setAlertValue('Test scored successfully', 'success', randNum.toString()));
      alert('Test scored successfully')
    } else {
      dispatch(setAlertValue('No result found', 'danger', '01'));
    }
  } catch (error: any) {
    dispatch({ type: ActionType.SCORE_QUESTION_FAIL, payload: error.message });
    dispatch(setAlertValue('Error in scoring candidate', 'danger', randNum.toString()));
  }
};

export const score_individual_test = (testname: string, userId: (string | null)): ThunkAction<void, RootState, unknown, any> => 
   async (dispatch: Dispatch<EachTopicAction | AlertAction>) => {
  dispatch({ type: ActionType.EACH_TOPIC_REQUEST, payload: 'Getting ready' });

  console.log('in score_individual_test action creator :: ', testname);

  //Generate a random number
  const randNum = Math.floor(Math.random() * 1000000);

  try {
    const res = await api.get(`/scoreCandidate/${testname}/${randNum}`);

    console.log(
      'in score_individual_test action creator res.data== ',
      res.data
    );
    // dispatch({
    //   type: ActionType.EACH_TOPIC_SUCCESS,
    //   payload: {
    //     trueAnswers: res.data.trueAnswers,
    //     totalQuestions: res.data.totalQuestions,
    //     topic: res.data.topic,
    //   },
    // });
    
     dispatch({ type: ActionType.EACH_TOPIC_SUCCESS, payload: res.data });

    // const randNumx = Math.floor(Math.random() * 5)

    dispatch(setAlertValue('Test scored successfully', 'success', '10'));
    //alert('Test scored successfully')
  } catch (error: any) {
    dispatch({ type: ActionType.EACH_TOPIC_FAIL, payload: error.message });
    dispatch(setAlertValue('Error in scoring candidate', 'danger', randNum.toString()));
  }
};

export const overall_score_test = (testName: string | undefined): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch<OverallScoreQuestionAction | AlertAction>) => {
  dispatch({ type: ActionType.OVERALL_SCORE_QUESTION_REQUEST, payload: 'Getting ready' });

  console.log('in overall_score_test action creator:: ', testName);
  try {
    const res = await api.get(`/scoreCandidate/${testName}`);

    console.log('in overall_score_test action creator res.data== ', res.data);

    if (res.data !== null) {
      dispatch({ type: ActionType.OVERALL_SCORE_QUESTION_SUCCESS, payload: res.data });
      dispatch(setAlertValue('Test scored successfully', 'success', '01'));
    } else {
      dispatch(setAlertValue('No tests found for candidate!!', 'danger', '01'));
    }
  } catch (error: any) {
    dispatch({ type: ActionType.OVERALL_SCORE_QUESTION_FAIL, payload: error.message });
    dispatch(setAlertValue('Error in scoring candidate', 'danger', '01'));
  }
};

// Delete Question
export const deleteCandidateTests = (testName: string): ThunkAction<void, RootState, unknown, any> => async (dispatch: Dispatch<DeleteCandidateAction | AlertAction>) => {
  dispatch({ type: ActionType.DELETE_CANDIDATE_TESTS_REQUEST, payload: 'Getting ready' });

  console.log('in deleteCandidateTests action');

  try {
    const res = await api.delete(`/scoreCandidate/${testName}`);

    dispatch({
      type: ActionType.DELETE_CANDIDATE_TESTS_SUCCESS,
      payload: res.data,
    });

    dispatch(setAlertValue('Tests Removed', 'success', '01'));
  } catch (err: any) {
    dispatch({
      type: ActionType.DELETE_CANDIDATE_TESTS_FAIL,
      payload: err.response.statusText //{ msg: err.response.statusText, status: err.response.status },
    });
  }
};
