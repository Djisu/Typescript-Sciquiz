import { OverallScoreQuestionAction } from '../actions/action-types/overallScoreQuestion.ts';
import {
  OVERALL_SCORE_QUESTION_REQUEST,
  OVERALL_SCORE_QUESTION_SUCCESS,
  OVERALL_SCORE_QUESTION_FAIL,
} from '../actions/types.ts';


export interface OverAllScoreCandidateItem {
  topic: string;
  topicCount: number;
  correct: number;
  used: number;
  wrong: number;
  userId: string;
}

export interface OverAllScoreCandidateState {
  overAllScoreCandidate: OverAllScoreCandidateItem[]
  loading: boolean
  error: null | string
}

const initialState = {
  overAllScoreCandidate: [],
  loading: false,
  error: null
};

export const overAllScoreCandidateReducer = (state: OverAllScoreCandidateState = initialState, action: OverallScoreQuestionAction) => {
  const { type, payload } = action;

  //console.log('in overAllScoreCandidateReducer', payload);

  switch (action.type) {
    case OVERALL_SCORE_QUESTION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case OVERALL_SCORE_QUESTION_SUCCESS:
      return {
        ...state,
        overAllScoreCandidate: payload || [],
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


