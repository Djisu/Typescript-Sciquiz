import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { selectQuestions } from '../../actions/question.js';
import { selectQuestionsTopics } from '../../actions/question.js';
import { selectQuestionsTopicsDifficultylevels } from '../../actions/question.js';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const MainTest = () => {
  const dispatch = useDispatch();

  const [showAnswer, setShowAnswer] = useState(false);
  const [questions, setQuestions] = useState([]);

  const {
    checkedTopics,
    checkedDifficultylevels,
    checkedSubjects,
    userId,
    noofquestions,
  } = useParams();

  const selectedQuestions = useSelector((state) => state.selectedQuestions);

  const isAdmin = localStorage.getItem('isAdmin');

  console.log('typeof isAdmin===', typeof isAdmin);

  console.log(
    checkedTopics,
    checkedDifficultylevels,
    checkedSubjects,
    userId,
    noofquestions
  );
  //
  //  setQuestions(selectedQuestions);
  console.log(
    'in MainTest 1',
    checkedTopics,
    checkedDifficultylevels,
    checkedSubjects,
    userId,
    parseInt(noofquestions)
  );

  useEffect(() => {
    console.log('in useEffect MainTest.js');

    if (checkedTopics.length > 0 && checkedDifficultylevels.length > 0) {
      dispatch(
        selectQuestionsTopicsDifficultylevels(
          checkedTopics,
          checkedDifficultylevels,
          checkedSubjects,
          userId,
          parseInt(noofquestions)
        )
      );
    }
  }, [dispatch]);

  // Update selectedQuestions after API call
  useEffect(() => {
    console.log(
      'in useEffect setQuestions(selectedQuestions): ',
      selectedQuestions
    );
    if (selectedQuestions) {
      // Replace with actual variable name
      setQuestions(selectedQuestions.selectedQuestions);
      console.log('questions==', questions);
    }
  }, [selectedQuestions]);

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
        <ul>
          <li
            style={{
              color: 'black',
              backgroundColor: 'white',
              fontWeight: 'bold',
            }}
          >
            {questions.map((question, index) => (
              <div key={index}>
                <div>
                  Question:{index} <span> </span>
                  {question.question}
                </div>

                {showAnswer && (
                  <p style={{ color: 'red', backgroundColor: 'white' }}>
                    Answer: {question.answer}
                  </p>
                )}
                <br />
              </div>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainTest;
