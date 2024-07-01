import { CountedQuestionAction } from '../actions/action-types/countedQuestion.ts';
import {
  COUNTED_QUESTION_REQUEST,
  COUNTED_QUESTION_SUCCESS,
  COUNTED_QUESTION_FAIL
} from '../actions/types.ts';

interface UserAnsweredQuestionsState {
  userAnsweredQuestions: number
  loading: boolean
}

const initialState = {
  userAnsweredQuestions: 0, // Initial state for the question data
  loading: true, // Indicates whether the data is being loaded or not
};

export function userAnsweredQuestionsReducer(state: UserAnsweredQuestionsState = initialState, action: CountedQuestionAction) {
  const { type, payload } = action;

  //  console.log('in userAnsweredQuestionsReducer', payload);

  switch (action.type) {
    case COUNTED_QUESTION_REQUEST:
      return {
        loading: true,
      };

    case COUNTED_QUESTION_SUCCESS:
      return {
        ...state,
        userAnsweredQuestions: payload,
        loading: false,
      };

    case COUNTED_QUESTION_FAIL:
      return {
        ...state,
        userAnsweredQuestions: [], // Clear the questions data in case of failure
        loading: false, // Set loading to false, as the data loading has failed
      };

    default:
      return state;
  }
}


