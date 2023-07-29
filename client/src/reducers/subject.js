import { SUBJECT_SUCCESS, SUBJECT_FAIL, SUBJECT_REQUEST, SUBJECT_LOADED } from '../actions/types';

const initialState = {
  subjects: [], // Initial state for the difficulty levels data
  loading: true, // Indicates whether the data is being loaded or not
};

function subjectReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (action.type) {
    case SUBJECT_LOADED:
      return {
        ...state,
        subjects: action.payload, // Set the subjects data from the action payload
        loading: false, // Set loading to false, as the data has been successfully loaded
      };

    case SUBJECT_FAIL:
      return {
        ...state,
        subjects: [], // Clear the subjects data in case of failure
        loading: false, // Set loading to false, as the data loading has failed
      };
    default:
      return state;
  }
}

export default subjectReducer;
