import {
  COUNTED_QUESTION_REQUEST,
  COUNTED_QUESTION_SUCCESS,
  COUNTED_QUESTION_FAIL,
  COUNTED_QUESTION_LOADED,
} from '../actions/types.js';

const initialState = {
  userAnsweredQuestions: 0, // Initial state for the question data
  loading: true, // Indicates whether the data is being loaded or not
};

function userAnsweredQuestionsReducer(state = initialState, action) {
  const { type, payload } = action;

  //  console.log('in userAnsweredQuestionsReducer', payload);

  switch (action.type) {
    case COUNTED_QUESTION_REQUEST:
      return {
        loading: true,
      };

    case COUNTED_QUESTION_SUCCESS:
      return {
        ...state,
        userAnsweredQuestions: payload,
        loading: false,
      };

    case COUNTED_QUESTION_FAIL:
      return {
        ...state,
        userAnsweredQuestions: [], // Clear the questions data in case of failure
        loading: false, // Set loading to false, as the data loading has failed
      };

    default:
      return state;
  }
}

export default userAnsweredQuestionsReducer;
