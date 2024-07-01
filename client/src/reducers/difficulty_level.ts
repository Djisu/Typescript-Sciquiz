// DifficultyLevelReducer.js
import { DifficultyLevelAction } from '../actions/action-types/difficultyLevel.ts';
import {
  DIFFICULTY_LEVEL_SUCCESS,
  DIFFICULTY_LEVEL_FAIL,
} from '../actions/types.ts';

// Define an interface for the difficulty level object
export interface DifficultyLevel {
  _id: string;
  difficulty_level: string;
}

// Define the initial state type for the difficultyLevel reducer
export interface DifficultyLevelState {
  difficultyLevels: DifficultyLevel[]; // Specify the type as an array of DifficultyLevel
  loading: boolean;
  error: string | null;
  
}



// Initial state for the difficultyLevel reducer
const initialState: DifficultyLevelState = {
  difficultyLevels: [],
  loading: true,
  error: null
};


export const difficultyLevelReducer = (state: DifficultyLevelState = initialState, action: DifficultyLevelAction) => {
    // console.log('in difficultyLevelReducer ', action.payload);

    // console.log('in typeof difficultylevel ', typeof action.payload);

  switch (action.type) {
    case DIFFICULTY_LEVEL_SUCCESS:
      return {
        ...state,
        difficultyLevels: action.payload  || [], // Set the difficulty levels data from the action payload
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


