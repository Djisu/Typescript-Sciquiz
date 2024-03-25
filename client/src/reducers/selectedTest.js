import {
  SELECTED_TEST_REQUEST,
  SELECTED_TEST_SUCCESS,
  SELECTED_TEST_FAIL,
} from '../actions/types.js';

const initialState = {
  selectedTest: [], // Initial state for the selectedTest data
  loading: true, // Indicates whether the data is being loaded or not
  error: null,
};

function selectedTestReducer(state = initialState, action) {
  const { type, payload } = action;

  //console.log('in selectedTestReducer ', payload);

  switch (action.type) {
    case SELECTED_TEST_REQUEST:
      return {
        ...state,
        selectedTest: payload, // Set the tests data from the action payload
        loading: false, // Set loading to false, as the data has been successfully loaded
      };
    case SELECTED_TEST_SUCCESS:
      return {
        ...state,
        selectedTest: payload, // Set the tests data from the action payload
        loading: false, // Set loading to false, as the data has been successfully loaded
      };

    case SELECTED_TEST_FAIL:
      return {
        ...state,
        selectedTest: [], // Clear the tests data in case of failure
        loading: false, // Set loading to false, as the data loading has failed
        error: payload,
      };
    default:
      return state;
  }
}

export default selectedTestReducer;
