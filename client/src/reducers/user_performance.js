import {
  USER_PERFORMANCE_SUCCESS,
  USER_PERFORMANCE_FAIL,
  USER_PERFORMANCE_REQUEST,
  USER_PERFORMANCE_LOADED,
} from '../actions/types';

const initialState = {
  userPerformances: [], // Initial state for the userPerformances data
  loading: true, // Indicates whether the data is being loaded or not
};

function userPerformanceReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (action.type) {
    case USER_PERFORMANCE_LOADED:
      return {
        ...state,
        userPerformances: action.payload, // Set the userPerformances data from the action payload
        loading: false, // Set loading to false, as the data has been successfully loaded
      };

    case USER_PERFORMANCE_FAIL:
      return {
        ...state,
        userPerformances: [], // Clear the userPerformances data in case of failure
        loading: false, // Set loading to false, as the data loading has failed
      };
    default:
      return state;
  }
}

export default userPerformanceReducer;


