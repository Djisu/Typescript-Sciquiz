import { SET_ALERT, REMOVE_ALERT } from '../actions/types.ts';

interface Alert {
  msg: string;
  alertType: string;
  id: string;
}

type AlertState = Alert[];

const initialState: AlertState = [];

export const alertReducer = (state: AlertState = initialState, action: { type: string; payload: any }) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [...state, payload];

    case REMOVE_ALERT:
      return state.filter((alert) => alert.id !== payload);

    default:
      return state;
  }
};

export default alertReducer;






































// import { SET_ALERT, REMOVE_ALERT } from '../actions/types.ts';
// //import { AlertState } from '../index.ts' 

// interface Alert  {
//   msg: string
//   alertType: string
//   id: string
// }


// interface AlertState extends Array<Alert> {}

// // const initialState = AlertState[];
// const initialState = { msg: '', alertType: '', id: ''}


// export const alertReducer= (state: AlertState = initialState, action)=> {
//   const { type, payload } = action;

//   switch (type) {
//     case SET_ALERT:
//       return [...state, payload];

//     case REMOVE_ALERT:
//       return state.filter((alert) => alert.id !== payload);

//     default:
//       return state;
//   }
// }
// export default alertReducer;
