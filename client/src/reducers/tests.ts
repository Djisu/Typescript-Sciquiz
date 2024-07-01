import { AnyAction } from 'redux';
import { TestsAction } from '../actions/action-types/tests.ts';
import {
  TESTS_SUCCESS,
  TESTS_FAIL,
  TESTS_REQUEST,
  TESTS_LOADED,
} from '../actions/types.ts';


export interface Test {
  _id: string
  test_name: string
  question: string
  answer: string
  marks: number
  pass_marks: number
  subject_name: string
}

export interface TestState {
  tests: Test[]
  loading: boolean
  error: null | string,
}

const initialState = {
  tests: [], // Initial state for the difficulty levels data
  loading: true, // Indicates whether the data is being loaded or not
  error: null,
};

export const testsReducer = (state: TestState = initialState, action: AnyAction) => {
  const { type, payload } = action;

  console.log('in testsReducer ', payload);

  switch (action.type) {
    case TESTS_LOADED:
    case TESTS_SUCCESS:
      return {
        ...state,
        tests: payload || [], // Set the tests data from the action payload
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


