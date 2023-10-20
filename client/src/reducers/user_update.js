// DifficultyLevelReducer.js
import {
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from '../actions/types.js';

const initialState = {
  userUpdate: false,
  loading: true,
};

const userUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return {
        ...state,
        loading: false,
      };

    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        userUpdate: true,
        loading: true,
      };

    case USER_UPDATE_FAIL:
      return {
        ...state,
        userUpdate: false,
        loading: true,
      };
    default:
      return state;
  }
};

export default userUpdateReducer;
