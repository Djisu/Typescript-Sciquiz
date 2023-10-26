import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

function PieChartCorrect({ topic, correct, topicCount }) {
  console.log('PieChart topic: ', topic);
  console.log('PieChart correct: ', correct);

  const topicLabel = topic;
  const correctPercentage = (correct / topicCount) * 100;

  const labels = ['Correct Percentage'];

  const data = {
    labels: labels,
    datasets: [
      {
        data: [correctPercentage, 100 - correctPercentage], // Calculate incorrect percentage as 100 - correctPercentage
        backgroundColor: ['rgba(0, 0, 255, 1)', 'rgba(255, 0, 0, 1)'], // Swapped colors to represent correct and incorrect
        borderColor: ['rgba(0, 0, 255, 0.75)', 'rgba(255, 0, 0, 0.5)'], // Swapped border colors
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
  };

  const chartStyle = {
    width: '30%', // Reduce the width by 50%
    height: '30%', // Reduce the height by 50%
    textAlign: 'center', // Center-align text
    margin: 'auto', // Center horizontally
  };

  const h2Style = {
    fontSize: '20px', // Adjust the font size as needed
    color: 'black',
  };

  return (
    <div className="pie-chart-container" style={chartStyle}>
      {topic && <h2 style={h2Style}>Pie Chart for {topic}</h2>}

      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChartCorrect;
