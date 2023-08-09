import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
//import { selectQuestions } from '../../actions/question';
//import { selectQuestionsTopics } from '../../actions/question';
import { selectQuestionsDifficultylevels } from '../../actions/question';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const MainTestDifficultyLevels = () => {
  const dispatch = useDispatch();

  //  const [showAnswer, setShowAnswer] = useState(false);
  const [questions, setQuestions] = useState([]);

  const { checkedDifficultylevels, userId } = useParams();

  console.log(
    'MainTestTopics checkedDifficultylevels==',
    checkedDifficultylevels
  );

  const selectedQuestions = useSelector((state) => state.selectedQuestions);

  console.log('selectedQuestions:::', selectedQuestions);

  useEffect(() => {
    console.log('in useEffect');

    if (checkedDifficultylevels) {
      dispatch(
        selectQuestionsDifficultylevels(checkedDifficultylevels, userId)
      );
    }
  }, []);

  return (
    <div>
      <ul>
        {selectedQuestions.map((question) => (
          <div key={question.id}>{question.text}</div>
        ))}
      </ul>
      <button className="btn btn-primary">See Answers</button>
    </div>
  );
};

export default MainTestDifficultyLevels;
