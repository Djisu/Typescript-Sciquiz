import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectQuestionsTopics } from '../../actions/question.js';

const MainTestTopics = () => {
  const dispatch = useDispatch();

  const [showAnswer, setShowAnswer] = useState(false);
  let [questions, setQuestions] = useState([]);
  const isAdmin = localStorage.getItem('isAdmin');

  console.log('isAdmin: ', isAdmin);

  const { checkedTopics, checkedSubjects, userId, noofquestions } = useParams();

  //  console.log('MainTestTopics checkedTopics==', checkedTopics);

  const selectedQuestions = useSelector((state) => state.selectedQuestions);

  useEffect(() => {
    console.log('in useEffect');

    if (checkedTopics) {
      dispatch(
        selectQuestionsTopics(
          checkedTopics,
          checkedSubjects,
          userId,
          noofquestions
        )
      );
    }
  }, []);

  // Update selectedQuestions after API call
  useEffect(() => {
    //console.log('in useEffect setQuestions(selectedQuestions);');

    if (selectedQuestions) {
      // Replace with actual variable name
      setQuestions(selectedQuestions.selectedQuestions);
      //  console.log('questions==', questions);
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
        {isAdmin == true && (
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
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default MainTestTopics;
