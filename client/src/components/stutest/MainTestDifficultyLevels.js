import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  postAnswer,
  selectQuestionsDifficultylevels,
} from '../../actions/question.js';
import { setAlert } from '../../actions/alert.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainTestDifficultyLevels = () => {
  const dispatch = useDispatch();

  const [showAnswer, setShowAnswer] = useState(false);
  let [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill('')
  );

  const isAdmin = localStorage.getItem('isAdmin');

  const { checkedDifficultylevels, checkedSubjects, userId, noofquestions } =
    useParams();

  console.log(
    'MainTestTopics checkedDifficultylevels==',
    checkedDifficultylevels
  );

  const selectedQuestions = useSelector((state) => state.selectedQuestions);

  console.log('Array.isArray(questions):::', Array.isArray([questions]));
  console.log(
    'selectedQuestions.selectedQuestions)==',
    selectedQuestions.selectedQuestions
  );

  console.log('typeof questions ==', typeof questions);

  useEffect(() => {
    console.log('in useEffect');

    if (checkedDifficultylevels) {
      dispatch(
        selectQuestionsDifficultylevels(
          checkedDifficultylevels,
          checkedSubjects,
          userId,
          noofquestions
        )
      );
    }
  }, []);

  // Update selectedQuestions after API call
  useEffect(() => {
    console.log('in useEffect setQuestions(selectedQuestions);');
    if (selectedQuestions) {
      // Replace with actual variable name
      setQuestions(selectedQuestions.selectedQuestions);
      console.log('questions==', questions);
    } else {
      setAlert('No question found', danger);
    }
  }, [selectedQuestions]);

  const handleClick = () => {
    setShowAnswer(true);
  };

  const handleAnswer = (userAnswer, questionId) => {
    console.log('in handleAnswer');

    // Example using Axios:
    dispatch(postAnswer(questionId, userAnswer));
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        {isAdmin && (
          <button className="btn btn-primary" onClick={handleClick}>
            See Answers
          </button>
        )}
        <ul>
          <li
            style={{
              color: 'black',
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
          >
            {questions.map((question, index) => (
              <div key={question._id}>
                <div>
                  <p>
                    Question {index}: {question.question}
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    name="user_answer"
                    placeholder="Type answer"
                    value={userAnswers[index] || ''}
                    onChange={(e) => {
                      const updatedAnswers = [...userAnswers]; // Create a copy of the state array
                      updatedAnswers[index] = e.target.value; // Update the corresponding value
                      setUserAnswers(updatedAnswers); // Set the new state
                    }}
                    style={{
                      width: '100%', // Set the input width to 100%
                      padding: '8px', // Add some padding for spacing
                      border: '1px solid #ccc', // Add a border for styling
                      borderRadius: '4px', // Add rounded corners
                    }}
                  />
                  {isAdmin === 'true' && (
                    <div style={{ color: 'red', backgroundColor: 'white' }}>
                      Topic: {question.topic}
                      Difficulty Level: {question.difficulty_level}
                    </div>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={() =>
                      handleAnswer(userAnswers[index], question._id)
                    }
                  >
                    Post Answer
                  </button>
                </div>
                {showAnswer && (
                  <div style={{ color: 'red', backgroundColor: 'white' }}>
                    <p>Answer: {question.answer}</p>
                  </div>
                )}
                <br />
                <ToastContainer position="top-right" autoClose={3000} />
              </div>
            ))}
          </li>
        </ul>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MainTestDifficultyLevels;
