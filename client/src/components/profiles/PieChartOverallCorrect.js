import React from 'react';
import { Pie } from 'react-chartjs-2';

function PieChartOverallCorrect({ topicCountWithFlagTrue, questionCount }) {
  console.log('PieChart  questionCount: ', questionCount);
  console.log('PieChart topicCountWithFlagTrue: ', topicCountWithFlagTrue);

  const correctPercentage = (topicCountWithFlagTrue / questionCount) * 100;

  const labels = ['Correct', 'Question Count']; // You can label them as you prefer

  const data = {
    labels: labels,
    datasets: [
      {
        data: [correctPercentage, 100 - correctPercentage], // The correct percentage and the remaining as 'Incorrect'
        backgroundColor: ['rgba(0, 0, 255, 1)', 'rgba(255, 0, 0, 1)'],
        borderColor: ['rgba(0, 0, 255, 0.75)', 'rgba(255, 0, 0, 0.5)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  const chartStyle = {
    width: '30%',
    height: '30%',
    textAlign: 'center',
    margin: 'auto',
  };

  const h2Style = {
    fontSize: '20px',
    color: 'black',
  };

  return (
    <div className="pie-chart-container" style={chartStyle}>
      <h4 style={h2Style}>
        Piechart <br /> Correct&nbsp;
        <span>{topicCountWithFlagTrue}</span> <br /> Question Count&nbsp;
        <span>{questionCount}</span>
        <Pie data={data} options={options} />
      </h4>
    </div>
  );
}

export default PieChartOverallCorrect;
