import { Action } from "redux";
import ActionType from ".";

// Define the User type (make sure it matches your actual structure)
export interface User {
  name: string;
  email: string;
  avatar: string;
  isAdmin: string;
  token: string;
}

// Define the AuthState interface (ensure it matches your actual structure)
export interface AuthState {
  token: string | null;
  isAuthenticated: boolean | null;
  loading: boolean;
  user: User | null;
  userSignin: {
    userInfo: string | null;
  };
}

// Define the action interfaces
export interface RegisterSuccessAction extends Action<ActionType.REGISTER_SUCCESS> {
    payload: { token: string };
}

export interface RegisterFailAction extends Action<ActionType.REGISTER_FAIL> {
    payload: string;
  }
  
  export interface UserLoadedAction extends Action<ActionType.USER_LOADED> {
    payload: AuthState;
  }
  
  export interface AuthErrorAction extends Action<ActionType.AUTH_ERROR> {
    payload: string;
  }
  
  export interface LoginRequestAction extends Action<ActionType.LOGIN_REQUEST> {}
  
  export interface LoginSuccessAction extends Action<ActionType.LOGIN_SUCCESS> {
    payload: AuthState;
  }
  
  export interface LoginFailAction extends Action<ActionType.LOGIN_FAIL> {
    payload: string;
  }
  
  export interface LogoutAction extends Action<ActionType.LOGOUT> {}

  export interface LoadUserAction extends Action<ActionType.LOAD_USER> {}
  
  // Union of all auth actions
  export type AuthAction =
    | RegisterSuccessAction
    | RegisterFailAction
    | UserLoadedAction
    | AuthErrorAction
    | LoginRequestAction
    | LoginSuccessAction
    | LoginFailAction
    | LogoutAction
    | LoadUserAction



