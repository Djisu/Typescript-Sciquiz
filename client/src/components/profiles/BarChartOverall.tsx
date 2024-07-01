import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';

interface OverAllScoreCandidateItem {
  topic: string;
  topicCount: number;
  correct: number;
  used: number;
  wrong: number;
  userId: string;
}

const BarChartOverall: React.FC = () => {
  const overAllScoreCandidateData = useSelector(
    (state: RootState) => state.overAllScoreCandidate.overAllScoreCandidate
  )   as unknown as OverAllScoreCandidateItem[];

  // Extract data from the scoreCandidate array
  const topics = overAllScoreCandidateData.map((item) => item.topic);
  const topicCounts = overAllScoreCandidateData.map((item) => item.topicCount);
  const correctCounts = overAllScoreCandidateData.map((item) => item.correct);
  const usedCounts = overAllScoreCandidateData.map((item) => item.used);
  const wrongCounts = overAllScoreCandidateData.map((item) => item.wrong);

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
        label: 'Wrongly Answered',
        data: wrongCounts,
        backgroundColor: 'rgba(25, 99, 132, 0.2)', // Adjust the colors as needed
        borderColor: 'rgba(25, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Used',
        data: usedCounts,
        backgroundColor: 'rgba(45, 162, 235, 0.2)', // Adjust the colors as needed
        borderColor: 'rgba(45, 162, 235, 1)',
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

export default BarChartOverall;
