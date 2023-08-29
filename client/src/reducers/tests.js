import {
  TESTS_SUCCESS,
  TESTS_FAIL,
  TESTS_REQUEST,
  TESTS_LOADED,
} from '../actions/types.js';

const initialState = {
  tests: [], // Initial state for the difficulty levels data
  loading: true, // Indicates whether the data is being loaded or not
  error: null,
};

function testsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (action.type) {
    case TESTS_LOADED:
      return {
        ...state,
        tests: action.payload, // Set the tests data from the action payload
        loading: false, // Set loading to false, as the data has been successfully loaded
      };

    case TESTS_FAIL:
      return {
        ...state,
        tests: [], // Clear the tests data in case of failure
        loading: false, // Set loading to false, as the data loading has failed
        error: payload,
      };
    default:
      return state;
  }
}

export default testsReducer;
