import { UnicSubjectAction } from '../actions/action-types/unicSubject.ts';
import {
  UNIC_SUBJECT_SUCCESS,
  UNIC_SUBJECT_FAIL,
  UNIC_SUBJECT_REQUEST,
  UNIC_SUBJECT_LOADED,
} from '../actions/types.ts';

export interface FetchUniqueSubject {
  question: string;
  answer: string;
  difficulty_level: string;
  subject_name: string;
  topic: string;
  question_year: number;
}

export interface FetchUniqueSubjectsState {
  fetchUniqueSubjects: FetchUniqueSubject[];
  loading: boolean;
  error: null | string;
}

const initialState: FetchUniqueSubjectsState = {
  fetchUniqueSubjects: [],
  loading: true,
  error: null,
};


export const fetchUniqueSubjectsReducer = ( state: FetchUniqueSubjectsState = initialState, action: UnicSubjectAction) => {
    const { type, payload } = action;

  //  console.log('action.payload', action.payload);

  switch (action.type) {
    case UNIC_SUBJECT_SUCCESS:
      return {
        ...state,
        fetchUniqueSubjects: Array.isArray(payload) ? payload : [],
        loading: false, // Set loading to false, as the data has been successfully loaded
      };

    case UNIC_SUBJECT_FAIL:
      return {
        ...state,
        fetchUniqueSubjects: [], // Clear the topics data in case of failure
        loading: false, // Set loading to false, as the data loading has failed
        error: payload,
      };
    default:
      return state;
  }
}


