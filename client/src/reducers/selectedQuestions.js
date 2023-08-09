import {
  FIND_QUESTION_REQUEST,
  FIND_QUESTION_SUCCESS,
  FIND_QUESTION_FAIL,
  SELECTED_QUESTION_REQUEST,
  SELECTED_QUESTION_SUCCESS,
  SELECTED_QUESTION_FAIL,
  SELECTED_QUESTION_LOADED,
} from '../actions/types';

const initialState = {
  selectedQuestions: [], // Initial state for the question data
  loading: true, // Indicates whether the data is being loaded or not
};

function selectedQuestionsReducer(state = initialState, action) {
  const { type, payload } = action;

  console.log('in selectedQuestionsReducer', Array.isArray(payload));

  switch (action.type) {
    case SELECTED_QUESTION_SUCCESS:
      return {
        ...state,
        selectedQuestions: payload,
        loading: false,
      };

    case SELECTED_QUESTION_FAIL:
      return {
        ...state,
        selectedQuestions: [], // Clear the questions data in case of failure
        loading: false, // Set loading to false, as the data loading has failed
      };

    default:
      return state;
  }
}

export default selectedQuestionsReducer;
