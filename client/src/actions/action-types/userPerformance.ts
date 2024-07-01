import ActionType from ".";
import { Action } from "redux";

interface UserPerformance {
    test_name: string;
    score: number;
    date: Date;
    email: string;
    test_details: string;
}

interface UserPerformanceSuccessAction extends Action<ActionType.USER_PERFORMANCE_SUCCESS> {
    payload: UserPerformance[]
  }
  
  interface UserPerformanceFailAction extends Action<ActionType.USER_PERFORMANCE_FAIL> {
    payload: string; // Define this according to your error structure
  }
  
  interface UserPerformanceRequestAction extends Action<ActionType.USER_PERFORMANCE_REQUEST> {
    payload: string; // Define this according to your error structure
  }
  
  interface UserPerformanceLoadedAction extends Action<ActionType.USER_PERFORMANCE_LOADED> {
    payload: UserPerformance; // Define this according to your error structure
  }
  
  export type UserPerformanceAction =
    | UserPerformanceSuccessAction
    | UserPerformanceFailAction
    | UserPerformanceRequestAction
    | UserPerformanceLoadedAction;
  









// import ActionType from ".";

// // export const USER_PERFORMANCE_REQUEST = 'USER_PERFORMANCE_REQUEST';
// // export const USER_PERFORMANCE_SUCCESS = 'USER_PERFORMANCE_SUCCESS';
// // export const USER_PERFORMANCE_FAIL = 'USER_PERFORMANCE_FAIL';
// // export const USER_PERFORMANCE_LOADED = 'USER_PERFORMANCE_LOADED';

// interface UserPerformanceRequestAction {
//     type: ActionType.USER_PERFORMANCE_REQUEST
//     payload: string
// }

// interface UserPerformanceSuccessAction {
//     type: ActionType.USER_PERFORMANCE_SUCCESS
//     payload: string
// }

// interface UserPerformanceFailAction {
//     type: ActionType.USER_PERFORMANCE_FAIL
//     payload: string
// }

// interface UserPerformanceLoadedAction {
//     type: ActionType.USER_PERFORMANCE_LOADED
//     payload: string
// }

// export type UserPerformanceAction = UserPerformanceRequestAction | UserPerformanceSuccessAction
// | UserPerformanceFailAction | UserPerformanceLoadedAction

//UserPerformance