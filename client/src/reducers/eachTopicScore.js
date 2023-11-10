import {
  EACH_TOPIC_REQUEST,
  EACH_TOPIC_SUCCESS,
  EACH_TOPIC_FAIL,
} from '../actions/types.js';

const initialState = {
  eachTopicScore: [],
  loading: false,
};

function eachTopicScoreReducer(state = initialState, action) {
  const { type, payload } = action;

  //  console.log('in eachTopicScoreReducer', payload);

  switch (action.type) {
    case EACH_TOPIC_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case EACH_TOPIC_SUCCESS:
      return {
        ...state,
        eachTopicScore: payload,
        loading: false,
      };

    case EACH_TOPIC_FAIL:
      return {
        ...state,
        eachTopicScore: [],
        loading: false,
      };

    default:
      return state;
  }
}

export default eachTopicScoreReducer;
