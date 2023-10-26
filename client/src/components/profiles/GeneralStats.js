import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { Link, Navigate } from 'react-router-dom';
import {
  loadTests,
  getTest,
  postAnswer,
  score_test,
  overall_score_test,
} from '../../actions/tests.js';
import { setAlert } from '../../actions/alert.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCallback } from 'react';
import Barchart from '../profiles/BarChart.js';
import { Chart as ChartJS } from 'chart.js/auto';
import BarChart from '../profiles/BarChart.js';
import BarChartOverall from '../profiles/BarChartOverall.js';
import PieChart from './PieChartCorrect.js';

const GeneralStats = () => {
  const dispatch = useDispatch();

  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedTest, setSelectedTest] = useState('');
  const [testName, setTestName] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [userId, setUserId] = useState('');

  const overAllScoreCandidateData = useSelector(
    (state) => state.overAllScoreCandidate.overAllScoreCandidate
  );

  const tests = useSelector((state) => state.tests.tests);

  const selectedQuestions = useSelector((state) => state.selectedQuestions);

  //  const topicsData = useSelector((state) => state.scoreCandidate);

  const { scoreCandidate, loading } = useSelector(
    (state) => state.scoreCandidate
  );

  console.log('scoreCandidate:: ', scoreCandidate);

  //  if (scoreCandidate.length > 0) {
  const topics = scoreCandidate.map((item) => item.topic);
  const topicCounts = scoreCandidate.map((item) => item.topicCount);
  const correctCounts = scoreCandidate.map((item) => item.correct);
  const usedCounts = scoreCandidate.map((item) => item.used);
  const wrongCounts = scoreCandidate.map((item) => item.wrong);
  //  }

  // Check if topicsData is empty
  const isScoreCandidateDataEmpty = scoreCandidate.length === 0;

  const isAdmin = localStorage.getItem('isAdmin');

  // Initialize userId from localStorage when the component mounts
  useEffect(() => {
    const userIdFromLocalStorage = localStorage.getItem('id');
    if (userIdFromLocalStorage) {
      // Update the userId state with the value from localStorage
      setUserId(userIdFromLocalStorage);
    }
  }, []);

  // Initialize userAnswers inside a useEffect that depends on tests
  useEffect(() => {
    if (Array.isArray(tests)) {
      setUserAnswers(Array(tests.length).fill(''));
    }
  }, [tests]);

  useEffect(() => {
    console.log(' in useEffect dispatch(loadTests());');
    dispatch(loadTests());
  }, [dispatch]);

  const handleInputChange = (e) => {
    //console.log('in handleInputChange: ', e.target.value);

    e.preventDefault();
    setTestName(e.target.value);

    //console.log('testName: ', testName);

    dispatch(getTest(e.target.value));
    if (tests.length === 0) {
      dispatch(loadTests());
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
    dispatch(score_test(testName));
  };

  const handleOverallScore = () => {
    //    console.log('in handleOverallScore', userId);
    //
    //    if (!userId) {
    //      dispatch(setAlert('Kindly login again', 'danger'));
    //      return <Navigate to="/login" />;
    //    }

    dispatch(overall_score_test(cleanName(testName)));
  };

  const cleanName = (testName) => {
    //const inputString = 'Jesu Djoleto-Biology-565535';
    const hyphenIndex = testName.indexOf('-');

    if (hyphenIndex !== -1) {
      const extractedString = testName.substring(0, hyphenIndex);
      return extractedString; // Output: "Jesu Djoleto"
    } else {
      console.log('Hyphen not found in the string.');
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
              {/*<label htmlFor="optionTest">Select a test:</label>*/}
              Select a test:
              <select
                name="testName"
                value={testName}
                onChange={handleInputChange}
                //disabled={isDisabled}
                className="select-element"
              >
                <option key="default" value=""></option>
                {tests.map((test) => (
                  <option key={test._id} value={test.test_name}>
                    {test.test_name}
                  </option>
                ))}
              </select>
            </div>
          </li>

          <li
            style={{
              color: 'black',
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
          >
            {Array.isArray(tests) ? (
              tests.map((question, index) => (
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
              Click to Finished
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => handleOverallScore()}
            >
              Show candidate overall statistics
            </button>
          </div>
          <div style={{ color: 'black', backgroundColor: 'white' }}>
            Topics:{' '}
            {topics.map((topic, index) => (
              <span key={index}>{topic}, </span>
            ))}{' '}
            <br />
            Count of Topics:{' '}
            {topicCounts.map((topicCount, index) => (
              <span key={index}>{topicCount}, </span>
            ))}{' '}
            <br />
            Count of Correct Answers:{' '}
            {correctCounts.map((correctCount, index) => (
              <span key={index}>{correctCount}, </span>
            ))}{' '}
            <br />
            Count of Used Questions:{' '}
            {usedCounts.map((usedCount, index) => (
              <span key={index}>{usedCount}, </span>
            ))}{' '}
            <br />
            Count of Wrong Answers:{' '}
            {wrongCounts.map((wrongCount, index) => (
              <span key={index}>{wrongCount}, </span>
            ))}{' '}
          </div>
        </div>
        <BarChart />
        <PieChart />
        <BarChartOverall />
      </div>
      <br />
    </div>
  );
};

export default GeneralStats;
