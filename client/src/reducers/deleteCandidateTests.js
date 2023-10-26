import {
  TOPIC_SUCCESS,
  TOPIC_FAIL,
  TOPIC_REQUEST,
  TOPIC_LOADED,
  DELETE_CANDIDATE_TESTS_REQUEST,
  DELETE_CANDIDATE_TESTS_SUCCESS,
  DELETE_CANDIDATE_TESTS_FAIL,
} from '../actions/types.js';

const initialState = {
  deleteCandidateTests: '', // Initial state for the topic data
};

function deleteCandidateTestsReducer(state = initialState, action) {
  const { type, payload } = action;

  //  console.log('in deleteCandidateTestsReducer', payload);

  switch (action.type) {
    case DELETE_CANDIDATE_TESTS_REQUEST:
      return {
        ...state,
      };

    case DELETE_CANDIDATE_TESTS_SUCCESS:
      return {
        ...state,
        deleteCandidateTests: payload,
      };

    case DELETE_CANDIDATE_TESTS_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
}

export default deleteCandidateTestsReducer;
