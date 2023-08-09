import { combineReducers } from 'redux';
import alert from './alert.js';
import auth from './auth.js';
import profile from './profile.js';
import payment from './payment.js';
import difficultyLevel from './difficulty_level.js';
import question from './question.js';
import tests from './tests.js';
import subject from './subject.js';
import userPerformance from './user_performance.js';
import topic from './topic.js';
import otherQuestion from './otherQuestion.js';
import fetchUniqueTopics from './fetchUniqueTopics.js';
import fetchUniqueDifficultyLevels from './fetchUniqueDifficultyLevels.js';
import selectedQuestions from './selectedQuestions.js';

export default combineReducers({
  alert,
  auth,
  profile,
  payment,
  question,
  difficultyLevel,
  tests,
  subject,
  userPerformance,
  topic,
  otherQuestion,
  fetchUniqueTopics,
  fetchUniqueDifficultyLevels,
  selectedQuestions,
});

//import { combineReducers } from 'redux';
//import alert from './alert';
//import auth from './auth';
//import profile from './profile';
//import payment from './payment';
//
//export default combineReducers({
//  alert,
//  auth,
//  profile,
//  payment,
//});
