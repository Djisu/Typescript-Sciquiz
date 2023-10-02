import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

function PieChart() {
  const scoreCandidateData = useSelector(
    (state) => state.scoreCandidate.scoreCandidate
  );

  // Extract data from the scoreCandidate array
  const topics = scoreCandidateData.map((item) => item.topic);
  const topicCounts = scoreCandidateData.map((item) => item.topicCount);

  const data = {
    labels: topics,
    datasets: [
      {
        data: topicCounts,
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          // Add more colors as needed for additional topics
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          // Add corresponding border colors for each topic
        ],
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

export default PieChart;
