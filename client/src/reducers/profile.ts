import { ProfileAction } from '../actions/action-types/getProfile.ts';
import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
} from '../actions/types.ts';

export interface Profile { 
   avatar: string;
   bio?: string
   email: string;
   name: string;
   school: string;
   status: string;
   user: string; // Using the ObjectId as a string
   _id: string
}

export interface ProfileState {
  profile: Profile | null;
  loading: boolean;
  error?: any
}

const initialState: ProfileState = {
  profile: null,
  loading: true,
  error: null,
};

export const profileReducer = (state: ProfileState = initialState, action: ProfileAction) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...payload,
        },
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
      };
    default:
      return state;
  }
};