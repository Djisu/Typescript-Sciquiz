// DifficultyLevelReducer.js
import { UserUpdateAction } from '../actions/action-types/userUpdate.ts';
import {
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from '../actions/types.ts';

interface UerUpdateState {
  userUpdate: boolean
  loading: boolean
}

const initialState = {
  userUpdate: false,
  loading: true,
};

export const userUpdateReducer = (state: UerUpdateState = initialState, action: UserUpdateAction) => {
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


