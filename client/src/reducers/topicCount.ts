import { TOPIC_COUNT_REQUEST, TOPIC_COUNT_SUCCESS, TOPIC_COUNT_FAIL } from '../actions/types';
import { TopicCountAction } from '../actions/action-types/topicCount';

// TopicCount interface remains the same
export interface TopicCount {
  topic: string;
  count: number;
}

// // Adjust TopicCountState interface
// export interface TopicCountState {
//   topicCount: TopicCount | null;
//   loading: boolean;
//   error: string | null;
// }

// Adjust TopicsCountState interface
export interface TopicsCountState {
  topicsCount: TopicCount[];
  loading: boolean;
  error: string | null;
}

// Correct initialState for TopicsCountState
const initialTopicsCountState: TopicsCountState = {
  topicsCount: [],
  loading: false,
  error: null,
};

// TopicsCountReducer function
export const topicsCountReducer = (state: TopicsCountState = initialTopicsCountState, action: TopicCountAction): TopicsCountState => {
  const { type, payload } = action;

  switch (type) {
    case TOPIC_COUNT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case TOPIC_COUNT_SUCCESS:
      return {
        ...state,
        topicsCount: payload as TopicCount[],
        loading: false,
      };
    case TOPIC_COUNT_FAIL:
      return {
        ...state,
        loading: false,
        error: payload as string,
      };
    default:
      return state;
  }
};



// // TopicCountReducer function
// export const topicCountReducer = (state: TopicCountState = { topicCount: null, loading: false, error: null }, action: TopicCountAction): TopicCountState => {
//   const { type, payload } = action;

//   switch (type) {
//     case TOPIC_COUNT_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case TOPIC_COUNT_SUCCESS:
//       return {
//         ...state,
//         topicCount: payload.length > 0 ? payload[0] : null,
//         loading: false,
//       };
//     case TOPIC_COUNT_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: payload as string,
//       };
//     default:
//       return state;
//   }
// };



















// import { TOPIC_COUNT_REQUEST, TOPIC_COUNT_SUCCESS, TOPIC_COUNT_FAIL } from '../actions/types';
// import { TopicCountAction } from '../actions/action-types/topicCount';

// // TopicCount interface remains the same
// export interface TopicCount {
//   topic: string;
//   count: number;
// }

// // Adjust TopicCountState interface
// export interface TopicCountState {
//   topicCount: TopicCount | null;
//   loading: boolean;
//   error: string | null;
// }

// // Adjust TopicsCountState interface
// export interface TopicsCountState {
//   topicsCount: TopicCount[];
//   loading: boolean;
//   error: string | null;
// }

// // Correct initialState for TopicsCountState
// const initialTopicsCountState: TopicsCountState = {
//   topicsCount: [],
//   loading: false,
//   error: null,
// };

// // TopicCountReducer function
// export const topicCountReducer = (state: TopicCountState = { topicCount: null, loading: false, error: null }, action: TopicCountAction): TopicCountState => {
//   const { type, payload } = action;

//   switch (type) {
//     case TOPIC_COUNT_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case TOPIC_COUNT_SUCCESS:
//       return {
//         ...state,
//         topicCount: payload.length > 0 ? payload[0] : null,
//         loading: false,
//       };
//     case TOPIC_COUNT_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: payload,
//       };
//     default:
//       return state;
//   }
// };

// // TopicsCountReducer function
// export const topicsCountReducer = (state: TopicsCountState = initialTopicsCountState, action: TopicCountAction): TopicsCountState => {
//   const { type, payload } = action;

//   switch (type) {
//     case TOPIC_COUNT_REQUEST:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case TOPIC_COUNT_SUCCESS:
//       return {
//         ...state,
//         topicsCount: payload,
//         loading: false,
//       };
//     case TOPIC_COUNT_FAIL:
//       return {
//         ...state,
//         loading: false,
//         error: payload,
//       };
//     default:
//       return state;
//   }
// };
