import { ScoreQuestionAction } from '../actions/action-types/scoreQuestion.ts';
import {
  SCORE_QUESTION_REQUEST,
  SCORE_QUESTION_SUCCESS,
  SCORE_QUESTION_FAIL,
} from '../actions/types.ts';

export interface ScoreCandidate {
  questionCount: number
  correctAnswers: number
  usedQuestionsLength: number
  testCount: number
}

export interface ScoreCandidateState {
  scoreCandidate: ScoreCandidate[],
  loading: boolean
  error: null | string
}

export const initialState = {
  scoreCandidate: [],
  loading: false,
  error: null
};

export const scoreCandidateReducer = (state: ScoreCandidateState = initialState, action: ScoreQuestionAction) => {
  const { type, payload } = action;

    //console.log('in scoreCandidateReducer', payload);

  switch (action.type) {
    case SCORE_QUESTION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case SCORE_QUESTION_SUCCESS:
      return {
        ...state,
        scoreCandidate: payload || [],
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


