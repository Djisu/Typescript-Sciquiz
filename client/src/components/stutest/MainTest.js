import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { selectQuestionsTopicsDifficultylevels } from '../../actions/question.js';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setAlert } from '../../actions/alert.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCallback } from 'react';

const MainTest = () => {
  const dispatch = useDispatch();
  const [showAnswer, setShowAnswer] = useState(false);

  const {
    checkedTopics,
    checkedDifficultylevels,
    checkedSubjects,
    userId,
    noofquestions,
  } = useParams();

  const selectedQuestions = useSelector((state) => state.selectedQuestions);

  console.log('selectedQuestions:: ', selectedQuestions);

  const name = localStorage.getItem('name');
  const isAdmin = localStorage.getItem('isAdmin');

  let test_name = '';

  const dispatchSelectQuestions = useCallback(() => {
    if (checkedTopics.length > 0 && checkedDifficultylevels.length > 0) {
      console.log('I AM IN');

      test_name =
        name +
        '-' +
        checkedSubjects +
        '-' +
        Math.floor(Math.random() * 1000000);

      console.log('test_name=== ', test_name);

      dispatch(
        selectQuestionsTopicsDifficultylevels(
          checkedTopics,
          checkedDifficultylevels,
          checkedSubjects,
          userId,
          parseInt(noofquestions),
          test_name
        )
      );
    } else {
      setAlert('No questions found', danger);
    }
  }, [
    dispatch,
    checkedTopics,
    checkedDifficultylevels,
    checkedSubjects,
    userId,
    noofquestions,
    test_name,
  ]);

  useEffect(() => {
    console.log('in useEffect MainTest.js');
    dispatchSelectQuestions();
  }, []);

  const handleClick = () => {
    setShowAnswer(true);
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        {isAdmin === 'true' && (
          <button className="btn btn-primary" onClick={handleClick}>
            See Answers
          </button>
        )}
        Test name: {test_name}
        <ul>
          <li
            style={{
              color: 'black',
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
          >
            {Array.isArray(selectedQuestions.selectedQuestions) ? (
              selectedQuestions.selectedQuestions.map((question, index) => (
                <div key={question._id}>
                  <p>
                    Question {index + 1}: {question.question}
                  </p>

                  <div>
                    {isAdmin === 'true' && (
                      <div style={{ color: 'red', backgroundColor: 'white' }}>
                        Topic: {question.topic}
                        Difficulty Level: {question.difficulty_level}
                      </div>
                    )}
                  </div>
                  {showAnswer && (
                    <div style={{ color: 'red', backgroundColor: 'white' }}>
                      <p>Answer: {question.answer}</p>
                    </div>
                  )}
                  <br />
                  <ToastContainer position="top-right" autoClose={3000} />
                </div>
              ))
            ) : (
              <p>No questions to display</p>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainTest;
