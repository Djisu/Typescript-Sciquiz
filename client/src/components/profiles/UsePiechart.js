// App.js
import React from 'react';
import PieChart from './PieChartCorrect';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../actions/alert';

const UsePiechart = () => {
  const topicsData = useSelector((state) => state.topics.topicsData);

  const dispatch = useDispatch();

  if (topicsData.length === 0) {
    dispatch(setAlert('No data found for the pie chart', 'danger'));
    return;
  }

  // Sample data for two topics
  const topics = [
    {
      topic: 'Topic 1',
      answeredByCount: 60,
      flagTrueCount: 40,
      flagFalseCount: 20,
    },
    {
      topic: 'Topic 2',
      answeredByCount: 80,
      flagTrueCount: 70,
      flagFalseCount: 10,
    },
  ];

  return (
    <div>
      {topicsData.map((topic, index) => (
        <div key={index}>
          <h2>{topic.topic}</h2>
          <PieChart
            answeredByCount={topic.answeredByCount}
            flagTrueCount={topic.flagTrueCount}
            flagFalseCount={topic.flagFalseCount}
          />
        </div>
      ))}
    </div>
  );
};

export default UsePiechart;
