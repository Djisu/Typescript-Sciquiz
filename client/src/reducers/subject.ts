import { SubjectAction } from '../actions/action-types/subject';
import {
  SUBJECT_SUCCESS,
  SUBJECT_FAIL,
  SUBJECT_REQUEST,
  SUBJECT_LOADED,
} from '../actions/types';

export interface Subject {
  subject_name: string;
}

export interface SubjectsState {
  subjects: Subject[];
  loading: boolean;
  error?: any;
}

const initialState: SubjectsState = {
  subjects: [],
  loading: true,
  error: null,
};

export const subjectReducer = (state: SubjectsState = initialState, action: SubjectAction): SubjectsState => {
  switch (action.type) {
    case SUBJECT_LOADED:
      return {
        ...state,
        subjects: action.payload, // Ensure payload is of type Subject[]
        loading: false,
      };

    case SUBJECT_FAIL:
      return {
        ...state,
        subjects: [],
        loading: false,
        error: action.payload, // Ensure payload is error type
      };

    default:
      return state;
  }
};
