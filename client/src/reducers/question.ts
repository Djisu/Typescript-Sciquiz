import { QuestionAction } from '../actions/action-types/question.ts';
import {
  QUESTION_SUCCESS,
  QUESTION_FAIL,
  QUESTION_REQUEST,
  QUESTION_LOADED,
} from '../actions/types.ts';

export interface Question {
  _id: string
  question: string
  answer:  string
  difficulty_level:  string
  subject_name:  string
  topic:  string
  question_year:  string
}

export interface QuestionState {
  question: Question[] | null
  loading: boolean
  error: string | null
}

const initialState: QuestionState = {
  question: [], // Initial state for the question data
  loading: true, // Indicates whether the data is being loaded or not
  error: '',
};

export const questionReducer = (state: QuestionState = initialState, action: QuestionAction) => {
  const { type, payload } = action;

  switch (action.type) {
    case QUESTION_LOADED:
      return {
        ...state,
        question: action.payload, // Set the questions data from the action payload
        loading: false, // Set loading to false, as the data has been successfully loaded
      };

    case QUESTION_FAIL:
      return {
        ...state,
        question: [], // Clear the questions data in case of failure
        loading: false, // Set loading to false, as the data loading has failed
        error: action.payload,
      };

    default:
      return state;
  }
}

