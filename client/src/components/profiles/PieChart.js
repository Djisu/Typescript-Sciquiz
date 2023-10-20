import React from 'react';
import { Pie } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

function PieChart({ topic, correct, used }) {
  console.log('PieChart topic: ', topic);
  console.log('PieChart correct: ', correct);
  console.log('PieChart used: ', used);
  //  const scoreCandidateData = useSelector(
  //    (state) => state.scoreCandidate.scoreCandidate
  //  );

  //  <PieChart topic={score.topic} correct={score.correct} used={score.used} />;
  // Check if the array is not empty and has at least one element before accessing topicCount
  //  let topicCount;
  //  if (scoreCandidateData.length > 0) {
  //    topicCount = scoreCandidateData[0].topicCount;
  //  } else {
  //    console.log('scoreCandidateData not fetched');
  //    return null;
  //  }

  //  const topicLabel = scoreCandidateData[0].topic;
  const topicLabel = topic;

  //  const correctCounts = scoreCandidateData.reduce(
  //    (accumulator, data) => accumulator + data.correct,
  //    0
  //  );
  const correctCounts = correct;

  //  const usedCounts = scoreCandidateData.reduce(
  //    (accumulator, data) => accumulator + data.used,
  //    0
  //  );
  const usedCounts = used;

  const labels = ['Correct', 'Used'];

  const data = {
    labels: labels,
    datasets: [
      {
        data: [topic, correctCounts, usedCounts],
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

  const chartStyle = {
    width: '30%', // Reduce the width by 50%
    height: '30%', // Reduce the height by 50%,
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

export default PieChart;
