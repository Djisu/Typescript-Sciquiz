import {
  TESTS_UNMARKED_SUCCESS,
  TESTS_UNMARKED_FAIL,
  TESTS_UNMARKED_REQUEST,
  TESTS_UNMARKED_LOADED,
} from '../actions/types.js';

const initialState = {
  testsUnmarked: [], // Initial state for the difficulty levels data
  loading: true, // Indicates whether the data is being loaded or not
  error: null,
};

function testsUnmarkedReducer(state = initialState, action) {
  const { type, payload } = action;

  //  console.log('in testsUnmarkedReducer ', payload);

  switch (action.type) {
    case TESTS_UNMARKED_LOADED:
    case TESTS_UNMARKED_SUCCESS:
      return {
        ...state,
        testsUnmarked: payload, // Set the tests data from the action payload
        loading: false, // Set loading to false, as the data has been successfully loaded
      };

    case TESTS_UNMARKED_FAIL:
      return {
        ...state,
        testsUnmarked: [], // Clear the tests data in case of failure
        loading: false, // Set loading to false, as the data loading has failed
        error: payload,
      };
    default:
      return state;
  }
}

export default testsUnmarkedReducer;
