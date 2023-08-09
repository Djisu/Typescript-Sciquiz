import { QUESTION_SUCCESS, 
    QUESTION_FAIL, 
    QUESTION_REQUEST, 
    QUESTION_LOADED 
} from '../actions/types';

const initialState = {
  questions: [], // Initial state for the question data
  loading: true, // Indicates whether the data is being loaded or not
  error: ''
};

function questionReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (action.type) {
    case QUESTION_LOADED:
      return {
        ...state,
        questions: action.payload, // Set the questions data from the action payload
        loading: false, // Set loading to false, as the data has been successfully loaded
      };

    case QUESTION_FAIL:
      return {
        ...state,
        questions: [], // Clear the questions data in case of failure
        loading: false, // Set loading to false, as the data loading has failed
        error: action.payload
      };

    default:
      return state;
  }
}

export default questionReducer;
