import {
  PAYMENT_REQUEST,
  PAYMENT_SUCCESS,
  PAYMENT_FAIL,
  GET_PAYMENT,
  GET_PAYMENTS,
  GET_PAYMENTS_FAIL,
  ADD_PAYMENT,
} from '../actions/types.js';

interface PaymentState {
  payment: number | null
  payments: number[]
  loading: boolean
  error: any
}

const initialState = {
  payment: null,
  payments: [],
  loading: true,
  error: {},
};

export const paymentReducer = (state: PaymentState = initialState, action: any) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PAYMENT:
      return {
        ...state,
        payment: payload,
        loading: false,
      };
    case GET_PAYMENTS:
      return {
        ...state,
        payments: payload,
        loading: false,
      };
    case GET_PAYMENTS_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
        payment: null,
      };

    case ADD_PAYMENT:
      return {
        ...state,
        payments: { ...state.payments, payment: payload },
        loading: false,
      };

    default:
      return state;
  }
}


