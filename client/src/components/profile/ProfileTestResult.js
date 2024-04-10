import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  getTest,
  postAnswer,
  overall_score_test,
  deleteCandidateTests,
  score_individual_test,
  loadTestsUserid,
} from '../../actions/tests.js';
import { setAlert } from '../../actions/alert.js';
import 'react-toastify/dist/ReactToastify.css';

import PieChartCorrectTopics from '../profiles/PieChartCorrectTopics.js';
import { useParams } from 'react-router-dom';

const ProfileTestResult = (id) => {
  const userId = useParams();

  ////console.log('userId==', userId);

  const dispatch = useDispatch();

  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedTest, setSelectedTest] = useState('');
  const [testName, setTestName] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  //console.log('XXXXXX  eachTopic== ', eachTopic);

  const eachTopic = useSelector((state) => state.eachTopicScore.eachTopicScore);

  const { trueAnswers, totalQuestions, topic } = useSelector(
    (state) => state.eachTopicScore.eachTopicScore
  );

  // Calculate the total of all totalQuestions values
const totalQuestionsSum = eachTopic.reduce((total, currentTopic) => {
  return total + currentTopic.totalQuestions;
}, 0);

// Print the totalQuestionsSum
//console.log('Total Questions Sum:', totalQuestionsSum);

  

  console.log(
    'topic, trueAnswers, totalQuestions ',

    eachTopic[0],
    eachTopic[1],
    eachTopic[2]
  );

  const tests = useSelector((state) => state.tests.tests);

  const selectedQuestions = useSelector((state) => state.selectedQuestions);

  //  const topicsData = useSelector((state) => state.scoreCandidate);
  const overAllScoreCandidateData = useSelector(
    (state) => state.overAllScoreCandidate.overAllScoreCandidate
  );
  //console.log('overAllScoreCandidateData==== ', overAllScoreCandidateData);

  const scoreCandidate = useSelector((state) => state.scoreCandidate);

  //console.log('I AM scoreCandidate:: ', scoreCandidate);
  const testScore = scoreCandidate;

  //console.log('testScore:: ', testScore);
  //  const { questionCount, used, correct } = scoreCandidate.scoreCandidate;
  const questionCount = scoreCandidate.scoreCandidate[0];
  const correct = scoreCandidate.scoreCandidate[1];
  const usedValue = scoreCandidate.scoreCandidate[2];
  const testCount = scoreCandidate.scoreCandidate[3];

  // console.log(
  //   'questionCount, usedValue, correct, testCount',
  //   questionCount,
  //   usedValue,
  //   correct,
  //   testCount);

  // Extract data from the scoreCandidate array
  const topics = overAllScoreCandidateData.map((item) => item.topic);
  const topicCounts = overAllScoreCandidateData.map((item) => item.topicCount);
  const correctCounts = overAllScoreCandidateData.map((item) => item.correct);
  const usedCounts = overAllScoreCandidateData.map((item) => item.used);
  const wrongCounts = overAllScoreCandidateData.map((item) => item.wrong);

  const isAdmin = localStorage.getItem('isAdmin');
  //  const userId = localStorage.getItem('id');

  // Initialize userAnswers inside a useEffect that depends on tests
  useEffect(() => {
    if (Array.isArray(tests)) {
      setUserAnswers(Array(tests.length).fill(''));
    }
  }, [tests]);

  useEffect(() => {
    //console.log(' in useEffect dispatch(loadTests());');
    dispatch(loadTestsUserid(userId));
  }, [dispatch]);

  //  useEffect(() => {
  //    dispatch(score_individual_test());
  //  }, [dispatch])

  const handleInputChange = (e) => {
   //console.log('in handleInputChange: ', e.target.value);

    e.preventDefault();
    setTestName(e.target.value);

    //console.log('testName: ', testName);

    dispatch(getTest(e.target.value));
    if (tests.length === 0) {
      dispatch(loadTestsUserid(userId));
    }
    //
    //setIsDisabled(true);
  };

  // Event handler to handle option selection
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAnswer = (userAnswers, questionId, testName) => {
    //console.log('in handleAnswer: ', userAnswers, questionId, testName);
    dispatch(postAnswer(questionId, userAnswers, testName, userId));
  };

  const handleScore = (testName) => {
    dispatch(score_individual_test(testName, userId));
  };

  const handleOverallScore = (testName) => {
    //console.log('in handleOverallScore');

    dispatch(overall_score_test(getOnlyName(testName)));
  };

  const cleanName = (testName) => {
    // Split the input string by hyphens ("-")
    const parts = testName.split('-');

    // Extract the desired portion (from the first character to the last hyphen)
    //const extractedString = parts.slice(0, -1).join(' ');

    //console.log(extractedString); // Output: "Paul Fleischer-Djoleto"
    return parts.slice(0, -1).join(' ');
  };

  const getOnlyName = () => {
    // Use the split method to split the string by the hyphen character
    const parts = testName.split('-');

    // The part before the hyphen is at index 0
    return parts[0];
  };

  const deleteCandidate = (testname) => {
    if (testname) {
      const newTestName = getOnlyName(testName);
      const result = window.confirm(
        'Are you sure you want to delete this item?'
      );
      if (result) {
        dispatch(deleteCandidateTests(newTestName));
        dispatch(setAlert('Deletion successful!', 'success'));
        dispatch(loadTestsUserid(userId));
      } else {
        dispatch(setAlert('Deletion aborted!', 'danger'));
      }
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <ul>
          <li
            style={{
              color: 'black',
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
          >
            <div className="form-group">
              Select a test:
              <select
                name="testName"
                value={testName}
                onChange={handleInputChange}
                className="select-element"
              >
                <option key="default" value=""></option>
                {tests.map((test, index) => (
                  <option key={index} value={test}>
                    {test}
                  </option>
                ))}
              </select>
              {isAdmin === 'true' && (
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCandidate(testName)}
                >
                  Delete Old Candidate
                </button>
              )}
            </div>
          </li>

          <li
            style={{
              color: 'black',
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
          >
          </li>
        </ul>

        <div>
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => handleScore(testName)}
            >
              Show Individual Correct Statistics
            </button>
          </div>
          <div style={{ color: 'black', backgroundColor: 'white' }}>
            {/*Topics:{' '}*/}
            {topics.map((topic, index) => (
              <span key={index}>
                {topic} {/* Add a space character here */}
              </span>
            ))}{' '}
            <br />
            <br />
          </div>
        </div>
        <ul>
          {eachTopic.map((topicItem, index) => (
            <li key={index}>
              <PieChartCorrectTopics
                key={topicItem.topic} // Unique key based on topic
                topic={topicItem.topic}
                correct={topicItem.trueAnswers}
                used={topicItem.totalQuestions}
                totQuestions = {totalQuestionsSum}
              />
            </li>
          ))}
        </ul>
      </div>
      <br />
    </div>
  );
};

export default ProfileTestResult;
