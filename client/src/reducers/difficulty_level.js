// DifficultyLevelReducer.js
import {
  DIFFICULTY_LEVEL_LOADED,
  DIFFICULTY_LEVEL_FAIL,
} from '../actions/types.js';

const initialState = {
  difficultyLevels: [], // Initial state for the difficulty levels data
  loading: true, // Indicates whether the data is being loaded or not
};

const difficultyLevelReducer = (state = initialState, action) => {
  switch (action.type) {
    case DIFFICULTY_LEVEL_LOADED:
      return {
        ...state,
        difficultyLevels: action.payload, // Set the difficulty levels data from the action payload
        loading: false, // Set loading to false, as the data has been successfully loaded
      };

    case DIFFICULTY_LEVEL_FAIL:
      return {
        ...state,
        difficultyLevels: [], // Clear the difficulty levels data in case of failure
        loading: false, // Set loading to false, as the data loading has failed
      };
    default:
      return state;
  }
};

export default difficultyLevelReducer;
