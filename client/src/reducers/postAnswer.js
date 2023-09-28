import {
  POST_QUESTION_REQUEST,
  POST_QUESTION_SUCCESS,
  POST_QUESTION_FAIL,
} from '../actions/types.js';

const initialState = {
  postAnswer: '',
  loading: false,
};

function postAnswerReducer(state = initialState, action) {
  const { type, payload } = action;

  //  console.log('in userAnsweredQuestionsReducer', payload);

  switch (action.type) {
    case POST_QUESTION_REQUEST:
      return {
        loading: true,
      };

    case POST_QUESTION_SUCCESS:
      return {
        ...state,
        postAnswer: payload,
        loading: false,
      };

    case POST_QUESTION_FAIL:
      return {
        ...state,
        postAnswer: payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default postAnswerReducer;
