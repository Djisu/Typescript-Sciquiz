import {
  TOPIC_SUCCESS,
  TOPIC_FAIL,
  TOPIC_REQUEST,
  TOPIC_LOADED,
  DELETE_CANDIDATE_TESTS_REQUEST,
  DELETE_CANDIDATE_TESTS_SUCCESS,
  DELETE_CANDIDATE_TESTS_FAIL,
} from '../actions/types.ts';
//import ActionType from '../actions/action-types/index.js';
import { DeleteCandidateAction } from '../actions/action-types/deleteCandidateTests.ts';

interface DeleteCandidateTestsState {
  deleteCandidateTests: string
}

const initialState = {
  deleteCandidateTests: '', // Initial state for the topic data
};

export const deleteCandidateTestsReducer = (state: DeleteCandidateTestsState = initialState, action: DeleteCandidateAction) => {
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


