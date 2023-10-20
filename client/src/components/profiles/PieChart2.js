import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

function PieChart2() {
  const scoreCandidateData = useSelector(
    (state) => state.scoreCandidate.scoreCandidate
  );

  console.log('scoreCandidateData[0]: ', scoreCandidateData[0]);

  // Check if the array is not empty and has at least one element before accessing topicCount
  let topicCount;
  if (scoreCandidateData.length > 0) {
    topicCount = scoreCandidateData[0].topicCount;
  } else {
    console.log('scoreCandidateData not fetched');
    return;
  }

  // Now you can use the topicCount variable safely

  console.log('topicCount: ', topicCount);

  const correctCounts = scoreCandidateData.reduce(
    (accumulator, data) => accumulator + data.correct,
    0
  );

  const usedCounts = scoreCandidateData.reduce(
    (accumulator, data) => accumulator + data.used,
    0
  );

  // Create an array of labels   //topicCount
  const labels = ['Used Questions', 'Total Topics'];

  const data = {
    labels: labels, // Set the labels to the 'labels' array
    datasets: [
      {
        data: [usedCounts, topicCount], // Use the correct and wrong counts
        backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(0, 0, 255, 1)'],
        borderColor: ['rgba(255, 0, 0, 0.5)', 'rgba(0, 0, 255, 0.75)'],
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

  return (
    <div className="pie-chart-container">
      <h2>Pie Chart</h2>
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart2;
