import api from '../utils/api';
import { setAlert } from './alert';

import {
  GET_PAYMENT,
  GET_PAYMENTS,
  PAYMENT_REQUEST,
  PAYMENT_SUCCESS,
  PAYMENT_FAIL,
  DELETE_PAYMENT,
  DELETE_PAYMENT_FAIL,
  GET_PAYMENTS_FAIL,
  ADD_PAYMENT,
} from './types';

// Get all profiles
export const getPayments = () => async (dispatch) => {
  try {
    const res = await api.get('/');

    dispatch({
      type: GET_PAYMENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_PAYMENTS_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Create or update profile
export const createPayment =
  (formData, edit = false) =>
  async (dispatch) => {
    try {
      const res = await api.post('/', formData);

      dispatch({
        type: ADD_PAYMENT,
        payload: res.data,
      });

      dispatch(
        setAlert(edit ? 'Payment Updated' : 'Payment Successful', 'success')
      );
    } catch (err) {
      const errors = err.response.data.errors;

      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }

      dispatch({
        type: PAYMENT_FAIL,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

// Delete payment
export const deletePayment = (id) => async (dispatch) => {
  try {
    const res = await api.delete(`/${id}`);

    dispatch({
      type: DELETE_PAYMENT,
      payload: res.data,
    });

    dispatch(setAlert('Payment Removed', 'success'));
  } catch (err) {
    dispatch({
      type: DELETE_PAYMENT_FAIL,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
