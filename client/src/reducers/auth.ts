import {
  REGISTER_SUCCESS,
  //REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGOUT,
  ACCOUNT_DELETED,
  USER_DETAILS_RESET,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
} from '../actions/types.ts';
//import { AuthAction} from '../actions/action-types/auth.ts';
import { User } from '../actions/action-types/user.ts';
import { ProfileAction } from '../actions/action-types/getProfile.ts';

import ActionType from '../actions/action-types/index.ts';
import { UserUpdateAction } from '../actions/action-types/userUpdate.ts';
import { UserDetailsAction } from '../actions/action-types/userDetails.ts';
import { UserListAction } from '../actions/action-types/userList.ts';
import { AuthAction } from '../actions/action-types/auth.ts';


export interface AuthState {
  token: string | null;
  isAuthenticated: boolean | null;
  loading: boolean;
  user: {
    _id: string;
    name: string;
    email: string;
    avatar: string;
    isAdmin: string;
  } | null;
  userSignin: {
    userInfo: string | null ;
  };
}

const userInfoFromStorage = localStorage.getItem('userInfo');

const parsedUserInfo = userInfoFromStorage ? JSON.parse(userInfoFromStorage) : null;

const initialState: AuthState = {
  token: localStorage.getItem('token') || null,
  isAuthenticated: null,
  loading: true,
  user: {
    _id: '',
    name: '',
    email: '',
    avatar: '',
    isAdmin: '',
  },
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')!)
    : null,
  },
};

export const authReducer = (state: AuthState = initialState, action: AuthAction | ProfileAction | UserUpdateAction) => {
  //const { type, payload } = action;

  switch (action.type) {
    case  ActionType.USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };

    case  ActionType.LOGIN_REQUEST:
      return { loading: true };

    case ActionType.REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      
    if (typeof action.payload.token === 'string') {
      localStorage.setItem('token', action.payload.token);
    } else {
      console.error('Token value is not a string, cannot be saved in localStorage');
    }
      
      

      //  console.log('in reducer case LOGIN_SUCCESS:');

      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };

    case  ActionType.ACCOUNT_DELETED:
    case  ActionType.AUTH_ERROR:
    case  ActionType.LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.removeItem('name');
      localStorage.removeItem('email');
      localStorage.removeItem('isAdmin');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };

    case  ActionType.USER_UPDATE_REQUEST:
      return { loading: true };

    case  ActionType.USER_UPDATE_SUCCESS:
      return { loading: false, success: true };

    case  ActionType.USER_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    //case USER_UPDATE_RESET:
    //  return {};

    default:
      return state;
  }
}

export const userDetailsReducer = (state = { loading: true }, action: (AuthAction | UserDetailsAction)) => {
  switch (action.type) {
    case  ActionType.USER_DETAILS_REQUEST:
      return { loading: true };
    case  ActionType.USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case  ActionType.USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case ActionType.USER_DETAILS_RESET:
      return { loading: true };
    default:
      return state;
  }
};

export const userListReducer = (state = { loading: true }, action: UserListAction) => {
  switch (action.type) {
    case  ActionType.USER_LIST_REQUEST:
      return { loading: true };

    case  ActionType.USER_LIST_SUCCESS:
      return { loading: false, users: action.payload };

    case  ActionType.USER_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

//export default authReducer;
