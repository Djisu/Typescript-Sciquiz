import { EachTopicAction } from '../actions/action-types/eachTopic.ts';
import {
  EACH_TOPIC_REQUEST,
  EACH_TOPIC_SUCCESS,
  EACH_TOPIC_FAIL,
} from '../actions/types.ts';

export interface EachTopicScore {
  trueAnswers: number;
  totalQuestions: number;
  topic: string;
}

export interface EachTopicScoreState {
  eachTopicScores: EachTopicScore[];
  loading: boolean;
  error: string | null;
}

const initialState: EachTopicScoreState = {
  eachTopicScores: [],
  loading: false,
  error: null,
};

export const eachTopicScoreReducer = (
  state: EachTopicScoreState = initialState,
  action: EachTopicAction
): EachTopicScoreState => {
  const { type, payload } = action;

  switch (type) {
    case EACH_TOPIC_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case EACH_TOPIC_SUCCESS:
      if (Array.isArray(payload)) {
        return {
          ...state,
          eachTopicScores: payload, // Ensure payload is an array
          loading: false,
          error: null,
        };
      } else {
        return state; // If payload is not an array, return the current state
      }

    case EACH_TOPIC_FAIL:
      return {
        ...state,
        eachTopicScores: [], // Reset the array on failure
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};








// import { EachTopicAction } from '../actions/action-types/eachTopic.js';
// import {
//   EACH_TOPIC_REQUEST,
//   EACH_TOPIC_SUCCESS,
//   EACH_TOPIC_FAIL,
// } from '../actions/types.js';

// export interface EachTopicScore {
//   trueAnswers: number;
//   totalQuestions: number;
//   topic: string;
//   loading: boolean;
// }

// export interface EachTopicScoreState {
//   eachTopicScores: EachTopicScore[];
//   loading: boolean;
//   error: string | null;
// }

// const initialState: EachTopicScoreState = {
//   eachTopicScores: [],
//   loading: false,
//   error: null,
// };

// export const eachTopicScoreReducer = (
//   state: EachTopicScoreState = initialState,
//   action: EachTopicAction
// ): EachTopicScoreState => {
//   const { type, payload } = action;

//   switch (type) {
//     case EACH_TOPIC_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };

//     case EACH_TOPIC_SUCCESS:
//       if (payload) {
//         return {
//           ...state,
//           eachTopicScores: payload, // Assuming payload is an array of EachTopicScore
//           loading: false,
//           error: null,
//         };
//       } else {
//         return state; // If payload is empty or undefined, return the current state
//       }

//     case EACH_TOPIC_FAIL:
//       return {
//         ...state,
//         eachTopicScores: [], // Reset the array on failure
//         loading: false,
//         error: payload,
//       };

//     default:
//       return state;
//   }
// };






// // import { EachTopicAction } from '../actions/action-types/eachTopic.js';
// // import {
// //   EACH_TOPIC_REQUEST,
// //   EACH_TOPIC_SUCCESS,
// //   EACH_TOPIC_FAIL,
// // } from '../actions/types.js';

// // export interface EachTopicScore {
// //   trueAnswers: number;
// //   totalQuestions: number;
// //   topic: string;
// //   loading: boolean;
// // }

// // export interface EachTopicScoreState {
// //   eachTopicScores: EachTopicScore[];
// //   loading: boolean;
// //   error: string | null;
// // }

// // const initialState: EachTopicScoreState = {
// //   eachTopicScores: [],
// //   loading: false,
// //   error: null,
// // };

// // export const eachTopicScoreReducer = (
// //   state: EachTopicScoreState = initialState,
// //   action: EachTopicAction
// // ): EachTopicScoreState => {
// //   const { type, payload } = action;

// //   switch (type) {
// //     case EACH_TOPIC_REQUEST:
// //       return {
// //         ...state,
// //         loading: true,
// //       };

// //     case EACH_TOPIC_SUCCESS:
// //       if (payload) {
// //         return {
// //           ...state,
// //           eachTopicScore: {
// //             trueAnswers: payload.trueAnswers,
// //             totalQuestions: payload.totalQuestions,
// //             topic: payload.topic,
// //             loading: false,
// //           },
// //           loading: false,
// //           error: null,
// //         };
// //       } else {
// //         return state; // If payload is empty or undefined, return the current state
// //       }

// //     case EACH_TOPIC_FAIL:
// //       return {
// //         ...state,
// //         eachTopicScore: {
// //           trueAnswers: 0,
// //           totalQuestions: 0,
// //           topic: '',
// //           loading: false,
// //         },
// //         loading: false,
// //         error: payload,
// //       };

// //     default:
// //       return state;
// //   }
// // };







// // // import { EachTopicAction } from '../actions/action-types/eachTopic.js';
// // // import {
// // //   EACH_TOPIC_REQUEST,
// // //   EACH_TOPIC_SUCCESS,
// // //   EACH_TOPIC_FAIL,
// // // } from '../actions/types.js';

// // // export interface EachTopicScore {
// // //   trueAnswers: number;
// // //   totalQuestions: number;
// // //   topic: string;
// // //   loading: boolean;
// // // }

// // // export interface EachTopicScoreState {
// // //   eachTopicScore: EachTopicScore
// // //   loading: boolean
// // //   error: string | null
// // // }

// // // const initialState: EachTopicScoreState = {
// // //   eachTopicScore: null,
// // //   loading: false,
// // //   error: null
// // // };

// // // export const eachTopicScoreReducer = (state: EachTopicScoreState = initialState, action: EachTopicAction): EachTopicScoreState => {
// // //   const { type, payload } = action;

// // //   switch (type) {
// // //     case EACH_TOPIC_REQUEST:
// // //       return {
// // //         ...state,
// // //         loading: true,
// // //       };

// // //     case EACH_TOPIC_SUCCESS:
// // //       if (payload) {
// // //         const { trueAnswers, totalQuestions, topic } = payload;
// // //         return {
// // //           ...state,
// // //           eachTopicScore: payload
// // //           loading: false,
// // //         };
// // //       } else {
// // //         return state; // If payload is empty or undefined, return the current state
// // //       }

// // //     case EACH_TOPIC_FAIL:
// // //       return {
// // //         ...state,
// // //         trueAnswers: 0,
// // //         totalQuestions: 0,
// // //         topic: '',
// // //         loading: false,
// // //       };

// // //     default:
// // //       return state;
// // //   }
// // // };


