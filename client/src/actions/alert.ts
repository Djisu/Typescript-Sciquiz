import { Dispatch } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types.ts';

export const setAlert = (msg: string, alertType: string, timeout = 5000) => (
  dispatch: Dispatch
) => {
  const id = uuidv4();

  dispatch({
    type: SET_ALERT,
    payload: {
      msg,
      alertType,
      id,
    },
  });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};








































// import { Dispatch } from 'redux';
// import { v4 as uuidv4 } from 'uuid';
// import { SET_ALERT, REMOVE_ALERT } from './types.tsx';

// interface SetAlertAction {
//   type: typeof SET_ALERT
//   payload: {}[]
// }

// interface RemoveAlertAction {
//   type: typeof REMOVE_ALERT
// }

// export const setAlert = (msg: string, alertType: string, timeout = 5000) =>
//   (dispatch: Dispatch) => {
//     const id = uuidv4();

//     dispatch({
//       type: SET_ALERT,
//       payload: { msg, alertType, id },
//     });
//     setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
//   };

//   export type Action = SetAlertAction | RemoveAlertAction