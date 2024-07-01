import ActionType from ".";
import { Action } from "redux";

export interface User {
    name: string;
    email: string;
    avatar: string;
    isAdmin: boolean;
    token: string;
  }

interface UserListRequestAction extends Action<ActionType.USER_LIST_REQUEST> {
    payload: string
}

interface UserListSuccessAction extends Action<ActionType.USER_LIST_SUCCESS> {
    payload: User[]
}

interface UserListFailAction extends Action<ActionType.USER_LIST_FAIL> {
    payload: string
}

export type UserListAction = UserListRequestAction | UserListSuccessAction
| UserListFailAction 

//UserList