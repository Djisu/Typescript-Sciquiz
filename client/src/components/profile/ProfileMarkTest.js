import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  loadTests,
  loadTestsUserid,
  getTest,
  postAnswer,
  score_test,
  overall_score_test,
  deleteCandidateTests,
} from '../../actions/tests.js';
import { setAlert } from '../../actions/alert.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCallback } from 'react';
import { Chart as ChartJS } from 'chart.js/auto';

import PieChartCorrect from '../profiles/PieChartCorrect.js';
import PieChartUsed from '../profiles/PieChartUsed.js';
import ProgressBar from '../profiles/Progressbar.js';
import PieChartOverall from '../profiles/PieChartOverall.js';
import PieChartOverallCorrect from '../profiles/PieChartOverallCorrect.js';
import { useParams } from 'react-router-dom';

const ProfileMarkTest = (id) => {
  const isAdmin = localStorage.getItem('isAdmin');

  const myId = useParams();

  console.log('myId===== ', myId);

  const userId = String(myId.id);

  console.log('userId=', userId);

  const dispatch = useDispatch();

  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedTest, setSelectedTest] = useState('');
  const [testName, setTestName] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const tests = useSelector((state) => state.tests.tests);

  const scoreCandidate = useSelector((state) => state.scoreCandidate);
  const testScore = scoreCandidate;

  const questionCount = scoreCandidate.scoreCandidate[0];
  const correct = scoreCandidate.scoreCandidate[1];
  const usedValue = scoreCandidate.scoreCandidate[2];
  const testCount = scoreCandidate.scoreCandidate[3];

  useEffect(() => {
    const fetchTestDetails = async () => {
      console.log('in XXXXXXXXX useEffect fetchTestDetails');
      console.log('tests[0]:', tests[0], userId);

      if (!tests[0]) {
        console.log('empty userId!!!!');
      }

      dispatch(score_test(tests[0], userId));

      console.log('correct, usedValue, questionCount',correct,usedValue,questionCount)
    };

    const delay = setTimeout(fetchTestDetails, 10000); // Introduce a 1-second delay

    return () => clearTimeout(delay); // Clean up the timeout on component unmount
  }, [tests[0], userId]); // Include tests[0] as a dependency

  

  const fetchedTest = useSelector((state) => state.selectedTest.selectedTest);

  //  if (fetchedTest) {
  dispatch(setAlert('Tests obtained', 'success'));
  console.log('fetchedTest== ', fetchedTest);
  //  }

  const overAllScoreCandidateData = useSelector(
    (state) => state.overAllScoreCandidate.overAllScoreCandidate
  );

  // const scoreCandidate = useSelector((state) => state.scoreCandidate);
  // const testScore = scoreCandidate;



  // Extract data from the scoreCandidate array
  const topics = overAllScoreCandidateData.map((item) => item.topic);
  const topicCounts = overAllScoreCandidateData.map((item) => item.topicCount);
  const correctCounts = overAllScoreCandidateData.map((item) => item.correct);
  const usedCounts = overAllScoreCandidateData.map((item) => item.used);
  const wrongCounts = overAllScoreCandidateData.map((item) => item.wrong);



  // Initialize userAnswers inside a useEffect that depends on tests
  useEffect(() => {
    if (Array.isArray(tests)) {
      setUserAnswers(Array(tests.length).fill(''));
    }
  }, [tests]);

   useEffect(() => {
     const fetchedData = async () => {
       if (userId) {
         console.log('in useEffect dispatch(loadTestsUserid(userId)); ', userId);
         dispatch(loadTestsUserid(userId));
         dispatch(setAlert('Tests obtained', 'success')); // Move this line outside the if statement
       } else {
         console.log('No user id provided', 'danger');
         setAlert('No user id provided', 'danger');
         return;
       }
     };
  
     // Call fetchData function on component mount
     fetchedData();
   }, [dispatch, userId]);

  useEffect(() => {
    // Fetch tests based on the userId when the component mounts
    const fetchData = async () => {
      if (userId) {
        try {
          dispatch(loadTestsUserid(userId));
        } catch (error) {
          console.error('Error fetching tests:', error);
          dispatch(setAlert('Error fetching tests', 'danger'));
        }
      } else {
        console.log('No user id provided', 'danger');
        dispatch(setAlert('No user id provided', 'danger'));
      }
    };

    fetchData(); // Call the fetchData function

    // Cleanup function to cancel the effect when the component is unmounted
    return () => {
      // Perform any cleanup here, if necessary
    };
  }, [dispatch, userId]); // Empty dependency array ensures the effect runs only once

 

  ///////////////////////////////////////////////////////////////
  const handleInputChange = (e) => {
    console.log('in handleInputChange', e.target.value);

    
    e.preventDefault();
    setTestName(e.target.value);

    dispatch(getTest(e.target.value));

    //if (tests.length === 0) {
    //  dispatch(loadTestsUserid(userId));
    //}
  };
  /////////////////////////////////////////////////////////

  // Event handler to handle option selection
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleAnswer = (userAnswers, questionId, testName) => {
    dispatch(postAnswer(questionId, userAnswers, testName, userId));
  };

  const handleScore = (testName) => {
    console.log('in handleScore testName===', testName)

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
        dispatch(loadTestsUserid(userId));
      } else {
        dispatch(setAlert('Deletion aborted!', 'danger'));
      }
    }
  };

  return (
    <div>
      {/* <br />
      <br />
      <br />
      <br />
      <br /> */}
      <div>
        <ul>
          <li
            style={{
              color: 'black',
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
          >
            {/* <div className="form-group">
              Select a test:
              <select
                name="testName"
                value={testName}
                onChange={handleInputChange}
                className="select-element"
              >
                <option value="">Select a test</option>

                {!tests && (
                  <p
                    style={{
                      color: 'red',
                      backgroundColor: 'white',
                      fontWeight: 'bold',
                    }}
                  >
                    No tests found
                  </p>
                )}

                {Array.isArray(tests) ? (
                  tests.map((test, index) => (
                    <option key={index} value={test}>
                      {test}
                    </option>
                  ))
                ) : (
                  <p>No questions to display</p>
                )}
              </select>
              {isAdmin === 'true' && (
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCandidate(testName)}
                >
                  Delete Old Candidate
                </button>
              )}
            </div> */}
          </li>

          {/* <li
            style={{
              color: 'black',
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
          >
          </li> */}
        </ul>

        <div>
          <div>
          {/*   <button
              type="submit"
              className="btn btn-primary"
              onClick={() => handleScore(testName)}
            >
              Show Overall Correct Statistics
            </button> */}
            {/*<button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => handleOverallScore(testName)}
            >
              Show candidate overall statistics
            </button>*/}
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
            <PieChartOverallCorrect correct={correct} used={usedValue} />
            <ProgressBar used={usedValue} questionCount={questionCount} />
          </li>
        </ul>
      </div>
      <br />
    </div>
  );
};

export default ProfileMarkTest;