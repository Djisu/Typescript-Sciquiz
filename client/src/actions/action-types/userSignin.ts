import ActionType from ".";

interface UserSigninRequestAction {
    type: ActionType.USER_SIGNIN_REQUEST
}

interface UserSigninSuccessAction {
    type: ActionType.USER_SIGNIN_SUCCESS
    payload: string
}

interface UserSigninFailAction {
    type: ActionType.USER_SIGNIN_FAIL
    payload: string
}

interface UserSignoutAction {
    type: ActionType.USER_SIGNOUT
    payload: string
}

export type UserSigninAction = UserSigninRequestAction | UserSigninSuccessAction
| UserSigninFailAction | UserSignoutAction

//UserSignin