import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  getTest,
  postAnswer,
  score_test,
  overall_score_test,
  deleteCandidateTests,
  loadTestsUnmarked,
} from '../../actions/tests.js';
import { setAlert } from '../../actions/alert.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCallback } from 'react';
import Barchart from '../profiles/BarChart.js';
import { Chart as ChartJS } from 'chart.js/auto';

import PieChartCorrect from '../profiles/PieChartCorrect.js';
import PieChartUsed from '../profiles/PieChartUsed.js';
import ProgressBar from '../profiles/Progressbar.js';
import PieChartOverall from '../profiles/PieChartOverall.js';
import PieChartOverallCorrect from '../profiles/PieChartOverallCorrect.js';

const MarkTest = () => {
  const dispatch = useDispatch();

  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedTest, setSelectedTest] = useState('');
  const [testName, setTestName] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const testsUnmarked = useSelector(
    (state) => state.testsUnmarked.testsUnmarked
  );

  if (testsUnmarked.length == 0) {
    dispatch(setAlert('No unmarked tests', 'danger'));
  }

  console.log('testsUnmarked== ', testsUnmarked);

  const uniqueTestnames = [];

  for (let i = 0; i < testsUnmarked.length; i++) {
    if (!uniqueTestnames.includes(testsUnmarked[i].test_name)) {
      uniqueTestnames.push(testsUnmarked[i].test_name);
    }
  }
  console.log('uniqueTestnames== ', uniqueTestnames);

  let questionsTest = useSelector((state) => state.selectedTest.selectedTest);

  console.log('questionsTest:: ', questionsTest);

  const filteredQuestionsTest =
    questionsTest?.filter((question) => {
      return question.answer_flag === '' || question.answer_flag === ' ';
    }) || [];

  // Now `filteredQuestionsTest` contains only the items where answer_flag is an empty string or a space.

  console.log('filteredQuestionsTest== ', filteredQuestionsTest);

  const selectedQuestions = useSelector((state) => state.selectedQuestions);

  if (selectedQuestions.length > 0) {
    console.log('selectedQuestions== ', selectedQuestions);
  } else {
    console.log('No questions found!!!');
  }

  const overAllScoreCandidateData = useSelector(
    (state) => state.overAllScoreCandidate.overAllScoreCandidate
  );

  const scoreCandidate = useSelector((state) => state.scoreCandidate);
  const testScore = scoreCandidate;

  const questionCount = scoreCandidate.scoreCandidate[0];
  const correct = scoreCandidate.scoreCandidate[1];
  const usedValue = scoreCandidate.scoreCandidate[2];
  const testCount = scoreCandidate.scoreCandidate[3];

  // Extract data from the scoreCandidate array
  const topics = overAllScoreCandidateData.map((item) => item.topic);
  const topicCounts = overAllScoreCandidateData.map((item) => item.topicCount);
  const correctCounts = overAllScoreCandidateData.map((item) => item.correct);
  const usedCounts = overAllScoreCandidateData.map((item) => item.used);
  const wrongCounts = overAllScoreCandidateData.map((item) => item.wrong);

  const isAdmin = localStorage.getItem('isAdmin');
  const userId = localStorage.getItem('id');

  console.log('isAdmin is ', isAdmin);

  // Initialize userAnswers inside a useEffect that depends on tests
  useEffect(() => {
    if (Array.isArray(testsUnmarked)) {
      setUserAnswers(Array(testsUnmarked.length).fill(''));
    }
  }, [testsUnmarked]);

  useEffect(() => {
    console.log('in useEffect dispatch(loadTestsUnmarked())');

    dispatch(loadTestsUnmarked());
  }, [dispatch]);

  const handleInputChangeUnmarked = (e) => {
    console.log('in handleInputChangeUnmarked ', e.target.value);

    e.preventDefault();
    setTestName(e.target.value);

    dispatch(getTest(e.target.value));

    if (testsUnmarked.length === 0) {
      dispatch(loadTestsUnmarked());
    }
  };

  // Event handler to handle option selection
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAnswer = (userAnswers, questionId, testName) => {
    dispatch(postAnswer(questionId, userAnswers, testName, userId));
  };

  const handleScore = (testName) => {
    dispatch(score_test(testName, userId));
  };

  const handleOverallScore = (testName) => {
    dispatch(overall_score_test(getOnlyName(testName)));
  };

  const cleanName = (testName) => {
    // Split the input string by hyphens ("-")
    const parts = testName.split('-');

    // Extract the desired portion (from the first character to the last hyphen)
    const extractedString = parts.slice(0, -1).join(' ');

    //console.log(extractedString); // Output: "Paul Fleischer-Djoleto"
    return extractedString;
  };

  const getOnlyName = () => {
    // Use the split method to split the string by the hyphen character
    const parts = testName.split('-');

    // The part before the hyphen is at index 0
    const extractedPart = parts[0];
    return extractedPart;
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
        dispatch(loadTestsUnmarked());
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
              Select a test to mark:
              <select
                name="testName"
                value={testName}
                onChange={(e) => handleInputChangeUnmarked(e)}
                className="select-element"
              >
                <option key="default" value=""></option>
                {uniqueTestnames.map((test, index) => (
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
            {Array.isArray(filteredQuestionsTest) ? (
              filteredQuestionsTest.map((question, index) => (
                <div key={question._id}>
                  <p>
                    Question {index + 1}: {question.question}
                  </p>

                  {isAdmin === 'true' && (
                    <div style={{ color: 'black', backgroundColor: 'white' }}>
                      <p style={{ color: 'red', backgroundColor: 'white' }}>
                        Answer: {question.answer}
                      </p>

                      <div>
                        Topic: {question.topic} <br />
                        Difficulty Level: {question.difficulty_level}
                        <br />
                        Question Id: {question.questionId}
                        <br />
                        Test Name: {question.test_name}
                        <br />
                        Answer_flag: {question.answer_flag}
                      </div>

                      <div>
                        <label htmlFor="optionSelect">Select an option:</label>
                        <select
                          id="optionSelect"
                          value={userAnswers[index] || ''}
                          onChange={(e) => {
                            const updatedAnswers = [...userAnswers]; // Create a copy of the state array
                            updatedAnswers[index] = e.target.value; // Update the corresponding value
                            setUserAnswers(updatedAnswers); // Set the new state
                          }}
                          className="select-element"
                        >
                          <option value="">Select an option</option>
                          <option value="true">true</option>
                          <option value="false">false</option>
                        </select>

                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={() =>
                            handleAnswer(
                              userAnswers[index],
                              question.questionId,
                              question.test_name
                            )
                          }
                        >
                          Post Answer
                        </button>
                      </div>
                      <br />
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No questions to display</p>
            )}
          </li>
        </ul>

        <div>
          <div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => handleScore(testName)}
            >
              Show individual statistics
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
          <li>
            <PieChartOverall correct={correct} used={usedValue} />
            <ProgressBar used={usedValue} questionCount={questionCount} />
          </li>
        </ul>
      </div>
      <br />
    </div>
  );
};

export default MarkTest;
