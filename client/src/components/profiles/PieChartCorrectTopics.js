import React from 'react';
import { Pie } from 'react-chartjs-2';

function PieChartCorrectTopics({ topic, correct, used }) {
  console.log('in PieChartCorrectTopics topic, correct, used');

  const incorrect = used - correct;

  const labels = ['Correct', 'Used'];

  const data = {
    labels: labels,
    datasets: [
      {
        data: [correct, used],
        backgroundColor: ['rgba(0, 0, 255, 1)', 'rgba(255, 0, 0, 1)'],
        borderColor: ['rgba(0, 0, 255, 0.75)', 'rgba(255, 0, 0, 0.5)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
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
    fontSize: '10px',
    color: 'black',
  };

  return (
    <div className="pie-chart-container" style={chartStyle}>
      <p style={{ fontColor: 'black' }}> Current Test Results:</p>
      <h5 style={h2Style}>
        <span>{topic}</span>
        <br /> Correct&nbsp; <span>{correct}</span>
        <br /> Used&nbsp;<span>{used}</span>
        <Pie data={data} options={options} />
      </h5>
    </div>
  );
}

export default PieChartCorrectTopics;
