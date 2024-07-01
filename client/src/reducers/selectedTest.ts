import { SelectedTestAction } from '../actions/action-types/selectedTest.ts';
import {
  //SELECTED_TEST_REQUEST,
  SELECTED_TEST_SUCCESS,
  SELECTED_TEST_FAIL,
} from '../actions/types.ts';
import ActionType from '../actions/action-types/index.ts';

export interface SelectedTest {
  test_name: string,
  question: string,
  answer: string,
  difficulty_level: string,
  subject_name: string,
  topic: string,
  answer_flag: string,
  questionId: string
}

export interface SelectedTestState {
  selectedTest: SelectedTest[]
  loading: boolean
  error: null,
}

const initialState = {
  selectedTest: [], // Initial state for the selectedTest data
  loading: true, // Indicates whether the data is being loaded or not
  error: null,
};

export const selectedTestReducer = (state: SelectedTestState = initialState, action: SelectedTestAction) => {
  const { type, payload } = action;

  // console.log('in selectedTestReducer ', payload);

  switch (action.type) {
    case ActionType.SELECTED_TEST_REQUEST:
      return {
        ...state,
        selectedTest: payload, // Set the tests data from the action payload
        loading: false, // Set loading to false, as the data has been successfully loaded
      };
    case SELECTED_TEST_SUCCESS:
      return {
        ...state,
        selectedTest: payload || [], // Set the tests data from the action payload
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


