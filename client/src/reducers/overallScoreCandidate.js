import {
  OVERALL_SCORE_QUESTION_REQUEST,
  OVERALL_SCORE_QUESTION_SUCCESS,
  OVERALL_SCORE_QUESTION_FAIL,
} from '../actions/types.js';

const initialState = {
  overAllScoreCandidate: [],
  loading: false,
};

function overAllScoreCandidateReducer(state = initialState, action) {
  const { type, payload } = action;

  console.log('in overAllScoreCandidateReducer', payload);

  switch (action.type) {
    case OVERALL_SCORE_QUESTION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case OVERALL_SCORE_QUESTION_SUCCESS:
      return {
        ...state,
        overAllScoreCandidate: payload,
        loading: false,
      };

    case OVERALL_SCORE_QUESTION_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

export default overAllScoreCandidateReducer;
