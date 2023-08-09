import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { selectQuestions } from '../../actions/question';
import { selectQuestionsTopics } from '../../actions/question';
import { selectQuestionsDifficultylevels } from '../../actions/question';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const MainTest = () => {
  const dispatch = useDispatch();

  //  const [showAnswer, setShowAnswer] = useState(false);
  const [questions, setQuestions] = useState([]);

  const { checkedTopics, checkedDifficultylevels, userId } = useParams();

  const selectedQuestions = useSelector((state) => state.selectedQuestions);
  //
  console.log('selectedQuestions:::', selectedQuestions);
  //
  //  setQuestions(selectedQuestions);
  //  console.log('in MainTest 1', checkedTopics, checkedDifficultylevels, userId);

  useEffect(() => {
    console.log('in useEffect');

    if (checkedTopics.lenght > 0 && checkedDifficultylevels.lenght > 0) {
      dispatch(selectQuestions(checkedTopics, checkedDifficultylevels, userId));
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

export default MainTest;
