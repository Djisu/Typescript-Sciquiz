import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

function PieChartOverall({ questionCount, topicCountAnsweredBy }) {
  console.log('PieChartOverall questionCount: ', questionCount);
  console.log('PieChartOverall topicCountAnsweredBy: ', topicCountAnsweredBy);

  //  const overAll = topicCounts.reduce((accum, num) => accum + num, 0);
  //  const usedSum = used.reduce((accum, num) => accum + num, 0);

  const topicLabel = 'Overall PieChart';
  const usedPercentage = (topicCountAnsweredBy / questionCount) * 100;

  const labels = ['Attempted', 'Total Questions'];

  const data = {
    labels: labels,
    datasets: [
      {
        data: [usedPercentage, 100 - usedPercentage], // Calculate incorrect percentage as 100 - correctPercentage
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
        display: true, // Display labels by default
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
    margin: '10px', // Center horizontally
  };

  return (
    <div className="pie-chart-container" style={chartStyle}>
      <h2 style={h2Style}>
        Overall Piechart <br /> Attempted&nbsp;
        <span>{topicCountAnsweredBy}</span> <br /> Total Questions&nbsp;
        <span>{questionCount}</span>
      </h2>
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChartOverall;
