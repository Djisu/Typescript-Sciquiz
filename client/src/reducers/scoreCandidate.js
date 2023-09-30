import {
  SCORE_QUESTION_REQUEST,
  SCORE_QUESTION_SUCCESS,
  SCORE_QUESTION_FAIL,
} from '../actions/types.js';

const initialState = {
  scoreCandidate: [],
  loading: false,
};

function scoreCandidateReducer(state = initialState, action) {
  const { type, payload } = action;

  //  console.log('in userAnsweredQuestionsReducer', payload);

  switch (action.type) {
    case SCORE_QUESTION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SCORE_QUESTION_SUCCESS:
      return {
        ...state,
        scoreCandidate: payload,
        loading: false,
      };

    case SCORE_QUESTION_FAIL:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}

export default scoreCandidateReducer;
