import ActionType from ".";
import Auth from "../../models/authModel";

interface UserUpdateRequestAction {
    type: ActionType.USER_UPDATE_REQUEST
    payload: string
}

interface UserUpdateSuccessAction {
    type: ActionType.USER_UPDATE_SUCCESS
    payload: Auth[]
}

interface UserUpdateFailAction {
    type: ActionType.USER_UPDATE_FAIL
    payload: string
}

interface UserUpdateResetAction {
    type: ActionType.USER_UPDATE_RESET
    payload: string
}

export type UserUpdateAction = UserUpdateRequestAction | UserUpdateSuccessAction
| UserUpdateFailAction | UserUpdateResetAction

//UserUpdate