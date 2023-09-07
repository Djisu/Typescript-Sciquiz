import { useSelector } from 'react-redux';
import api from '../utils/api.js';
import { setAlert } from './alert.js';
import detokenize from './detokenize.js';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LIST_REQUEST,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  LOGIN_REQUEST,
  COUNTED_QUESTION_REQUEST,
  COUNTED_QUESTION_SUCCESS,
  COUNTED_QUESTION_FAIL,
  COUNTED_QUESTION_LOADED,
} from './types.js';

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/

// Load User
export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  console.log('in register formData: ', formData);

  try {
    const res = await api.post('/users', formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  dispatch({ type: LOGIN_REQUEST });

  try {
    console.log('about to login');

    const res = await api.post('/auth', body);
    //
    //console.log('typeOf res.data.user:', typeof res.data.user);
    //console.log('res.data.token:', res.data.token);
    //
    const [encryptedId, name, email, isAdmin] = detokenize(res.data.token);

    console.log('encryptedId', encryptedId);
    console.log('name', name);
    console.log('email', email);
    console.log('isAdmin', isAdmin);

    localStorage.setItem('id', encryptedId);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('isAdmin', isAdmin);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => async (dispatch) => {
  localStorage.removeItem('id');
  localStorage.removeItem('name');
  localStorage.removeItem('email');
  localStorage.removeItem('isAdmin');

  dispatch({ type: LOGOUT });
};

export const listUsers = () => async (dispatch, getState) => {
  dispatch({ type: USER_LIST_REQUEST });
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    const { data } = await api.get('/users', {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });

    //const res = await api.get('/auth');
    dispatch({ type: USER_LIST_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: USER_LIST_FAIL, payload: message });
  }
};

export const userAnsweredQuestions = (userId) => async (dispatch) => {
  console.log('in userAnsweredQuestions action', userId);

  dispatch({
    type: COUNTED_QUESTION_REQUEST,
  });

  try {
    const res = await api.get(`/auth/${userId}/answered-questions`);

    console.log('RES.DATA===', res.data);

    dispatch({ type: COUNTED_QUESTION_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: COUNTED_QUESTION_FAIL, payload: error.message });
  }
};
