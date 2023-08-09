import {
 UNIC_DIFFICULTY_LEVEL_REQUEST, 
 UNIC_DIFFICULTY_LEVEL_SUCCESS, 
 UNIC_DIFFICULTY_LEVEL_FAIL, 
 UNIC_DIFFICULTY_LEVEL_LOADED
} from '../actions/types';

const initialState = {
  fetchUniqueDifficultyLevels: [], // Initial state for the topic data
  loading: true, // Indicates whether the data is being loaded or not
  error: null,
};

function fetchUniqueDifficultyLevelsReducer(state = initialState, action) {
  const { type, payload } = action;

//  console.log('action.payload', action.payload);

  switch (action.type) {
    case UNIC_DIFFICULTY_LEVEL_SUCCESS:
      return {
        ...state,
        fetchUniqueDifficultyLevels: action.payload, // Set the topics data from the action payload
        loading: false, // Set loading to false, as the data has been successfully loaded
      };

    case UNIC_DIFFICULTY_LEVEL_FAIL:
      return {
        ...state,
        fetchUniqueDifficultyLevels: [], // Clear the topics data in case of failure
        loading: false, // Set loading to false, as the data loading has failed
        error: action.payload,
      };
    default:
      return state;
  }
}

export default fetchUniqueDifficultyLevelsReducer;
