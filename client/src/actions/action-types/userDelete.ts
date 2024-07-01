import ActionType from ".";
import { Action } from "redux";
 
interface UserDeleteRequestAction extends Action<ActionType.USER_DELETE_REQUEST> {
    payload: string
}

interface UserDeleteSuccessAction extends Action<ActionType.USER_DELETE_SUCCESS> {
    payload: string
}

interface UserDeleteFailAction extends Action<ActionType.USER_DELETE_FAIL> {
    payload: string
}

export type UserDeleteAction = UserDeleteRequestAction | UserDeleteSuccessAction
| UserDeleteFailAction

//UserDelete