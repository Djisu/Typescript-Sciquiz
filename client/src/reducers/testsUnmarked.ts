import { ObjectId } from 'mongoose';
import { TestsUnmarkedAction } from '../actions/action-types/testsUnmarked.ts';
import {
  TESTS_UNMARKED_SUCCESS,
  TESTS_UNMARKED_FAIL,
  TESTS_UNMARKED_REQUEST,
  TESTS_UNMARKED_LOADED,
} from '../actions/types.ts';

export interface TestUnmarked {
  test_name: string;
  question: string;
  answer: string;
  difficulty_level: string;
  subject_name: string;
  topic: string;
  question_year: number;
  question_stats?: number;
  answeredBy: ObjectId[];
  answer_flag?: string;
  user_answer?: string;
  questionId: string;
}

export interface TestsUnmarkedState {
  testsUnmarked: TestUnmarked[];
  loading: boolean;
  error: null | string;
}

const initialState: TestsUnmarkedState = {
  testsUnmarked: [],
  loading: true,
  error: null,
};

export const testUnmarkedReducer = (state: TestsUnmarkedState = initialState, action: TestsUnmarkedAction) => {
  const { type, payload } = action;

  //console.log('in testUnmarkedReducer payload: ', payload)

  switch (type) {
    case TESTS_UNMARKED_LOADED:
    case TESTS_UNMARKED_SUCCESS:
      return {
        ...state,
        testsUnmarked: payload || [], 
        loading: false,
      };

    case TESTS_UNMARKED_FAIL:
      return {
        ...state,
        testsUnmarked: [],
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};