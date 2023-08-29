import {
  UNIC_SUBJECT_SUCCESS,
  UNIC_SUBJECT_FAIL,
  UNIC_SUBJECT_REQUEST,
  UNIC_SUBJECT_LOADED,
} from '../actions/types.js';

const initialState = {
  fetchUniqueSubjects: [], // Initial state for the topic data
  loading: true, // Indicates whether the data is being loaded or not
  error: null,
};

function fetchUniqueSubjectsReducer(state = initialState, action) {
  const { type, payload } = action;

  //  console.log('action.payload', action.payload);

  switch (action.type) {
    case UNIC_SUBJECT_SUCCESS:
      return {
        ...state,
        fetchUniqueSubjects: action.payload, // Set the topics data from the action payload
        loading: false, // Set loading to false, as the data has been successfully loaded
      };

    case UNIC_SUBJECT_FAIL:
      return {
        ...state,
        fetchUniqueSubjects: [], // Clear the topics data in case of failure
        loading: false, // Set loading to false, as the data loading has failed
        error: action.payload,
      };
    default:
      return state;
  }
}

export default fetchUniqueSubjectsReducer;
