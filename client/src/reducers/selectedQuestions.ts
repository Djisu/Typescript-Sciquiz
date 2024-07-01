import { SelectedQuestionAction } from '../actions/action-types/selectedQuestion.ts';
import {
  FIND_QUESTION_REQUEST,
  FIND_QUESTION_SUCCESS,
  FIND_QUESTION_FAIL,
  SELECTED_QUESTION_REQUEST,
  SELECTED_QUESTION_SUCCESS,
  SELECTED_QUESTION_FAIL,
  SELECTED_QUESTION_LOADED,
} from '../actions/types.ts';

export interface SelectedQuestion {
  _id: string
  test_name: string
  questionId: string
  question: string
  answer: string
  difficulty_level: string
  subject_name: string
  topic: string
  question_year: Date
  user_answer: string
}

export interface ISelectedQuestionState {
  selectedQuestion: SelectedQuestion | null
  loading: boolean;
  error?: any;
}

export interface ISelectedQuestionsState {
  selectedQuestions: SelectedQuestion[]
  loading: boolean;
  error?: any;
}

const initialState = {
  selectedQuestions: [], // Initial state for the question data
  loading: true, // Indicates whether the data is being loaded or not
};

export const selectedQuestionsReducer = (state: ISelectedQuestionsState = initialState, action: SelectedQuestionAction) => {
  const { type, payload } = action;

  // console.log('in selectedQuestionsReducer', Array.isArray(payload));
  // console.log('in selectedQuestionsReducer payload: ', payload)

  switch (action.type) {
    case SELECTED_QUESTION_SUCCESS:
      return {
        ...state,
        selectedQuestions: payload,
        loading: false,
      };

    case SELECTED_QUESTION_FAIL:
      return {
        ...state,
        selectedQuestions: [], // Clear the questions data in case of failure
        loading: false, // Set loading to false, as the data loading has failed
      };

    default:
      return state;
  }
}


