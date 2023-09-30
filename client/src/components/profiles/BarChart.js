import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

function BarChart() {
  const scoreCandidateData = useSelector(
    (state) => state.scoreCandidate.scoreCandidate
  );

  // Extract data from the scoreCandidate array
  const topics = scoreCandidateData.map((item) => item.topic);
  const topicCounts = scoreCandidateData.map((item) => item.topicCount);
  const correctCounts = scoreCandidateData.map((item) => item.correct);
  const usedCounts = scoreCandidateData.map((item) => item.used);

  const data = {
    labels: topics,
    datasets: [
      {
        label: 'Total Questions',
        data: topicCounts,
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Adjust the colors as needed
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Correctly Answered',
        data: correctCounts,
        backgroundColor: 'rgba(255, 99, 132, 0.2)', // Adjust the colors as needed
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Used',
        data: usedCounts,
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Adjust the colors as needed
        borderColor: 'rgba(54, 162, 235, 1)',
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
    <div>
      <h2>Bar Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
