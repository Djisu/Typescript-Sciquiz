import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';

import {
  loadTests,
  getTest,
  postAnswer,
  score_test,
  overall_score_test,
} from '../../actions/tests.ts';
import 'react-toastify/dist/ReactToastify.css';
import BarChart from './BarChart.tsx';
import BarChartOverall from './BarChartOverall.tsx';
import { RootState } from '../../reducers/index.ts';
import { ThunkDispatch } from 'redux-thunk';
import PieChart2 from './PieChart2.tsx';
import { Test } from '../../reducers/tests.ts';
import { SelectedQuestion } from '../../reducers/selectedQuestions.ts';

interface OverAllScoreCandidateItem {
  topic: string;
  topicCount: number;
  correct: number;
  used: number;
  wrong: number;
  userId: string;
}

interface ITestName {
  testName: string
}

const GeneralStats: React.FC = () => {
 
  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();

  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [selectedTest, setSelectedTest] = useState<string>('');
  const [testName, setTestName] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [userId, setUserId] = useState<string>('');


  const tests = useSelector((state: RootState) => state.tests.tests);

  const questions = useSelector((state: RootState) => state.selectedQuestions) as SelectedQuestion[]

  const overAllScoreCandidateData = useSelector(
    (state: RootState) => state.overAllScoreCandidate
  ) as OverAllScoreCandidateItem[];

  const topics = overAllScoreCandidateData.map(item => item.topic);
  const topicCounts = overAllScoreCandidateData.map(item => item.topicCount);
  const correctCounts = overAllScoreCandidateData.map(item => item.correct);
  const usedCounts = overAllScoreCandidateData.map(item => item.used);
  const wrongCounts = overAllScoreCandidateData.map(item => item.wrong);

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

  const handleInputChange = (e: React.FormEvent<HTMLSelectElement>) => {
    //console.log('in handleInputChange: ', e.target.value);

    e.preventDefault();
    const inputElement = e.target as HTMLInputElement;
    setTestName(inputElement.value);

    //console.log('testName: ', testName);

    dispatch(getTest(inputElement.value));
    if (tests.length === 0) {
      dispatch(loadTests());
    }
    //
    //setIsDisabled(true);
  };

  // Event handler to handle option selection
  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputElement = event.target as HTMLInputElement
    setSelectedOption(inputElement.value);
  };

  const handleAnswer = (userAnswers: string, questionId: string, testName: string) => {
    //console.log('in handleAnswer: ', userAnswers, questionId, testName);
    dispatch(postAnswer(questionId, userAnswers, testName, userId));
  };

  const handleScore = (testName: string) => {
    dispatch(score_test(testName, userId));
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

  const cleanName = (testName: string) => {
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
                {tests.map((test: Test) => (
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
            {Array.isArray(questions) ? (
              questions.map((question: SelectedQuestion, index: number) => (
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
        <PieChart2 />
        <BarChartOverall />
      </div>
      <br />
    </div>
  );
};

export default GeneralStats;
