import ActionType from ".";
import { Action } from "redux";

export interface User {
    name: string;
    email: string;
    avatar: string;
    isAdmin: boolean;
    token: string;
  }

interface UserDetailsRequestAction extends Action<ActionType.USER_DETAILS_REQUEST> {
    payload: string
}

interface UserDetailsSuccessAction extends Action<ActionType.USER_DETAILS_SUCCESS>  {
    payload: User
}

interface UserDetailsFailAction extends Action<ActionType.USER_DETAILS_FAIL>  {
    payload: string
}

interface UserDetailsResetAction extends Action<ActionType.USER_DETAILS_RESET>  {
    payload: boolean
}

export type UserDetailsAction = UserDetailsRequestAction | UserDetailsSuccessAction
| UserDetailsFailAction | UserDetailsResetAction

//UserDetails