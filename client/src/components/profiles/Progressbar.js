import React from 'react';
import { useSelector } from 'react-redux';

function ProgressBar({ topic, used, topicCount }) {
  console.log('ProgressBar topic: ', topic);
  console.log('ProgressBar used: ', used);
  console.log('ProgressBar topicCount: ', topicCount);
  //  const scoreCandidateData = useSelector(
  //    (state) => state.scoreCandidate.scoreCandidate
  //  );

  // Check if the array is not empty and has at least one element before accessing topicCount
  //  let topicCount;
  //  if (scoreCandidateData.length > 0) {
  //    topicCount = scoreCandidateData[0].topicCount;
  //  } else {
  //    console.log('scoreCandidateData not fetched');
  //    return null;
  //  }

  //  const topicLabel = scoreCandidateData[0].topic;
  //  const topicLabel = topic;

  //  const correctCounts = scoreCandidateData.reduce(
  //    (accumulator, data) => accumulator + data.correct,
  //    0
  //  );

  //  const usedCounts = scoreCandidateData.reduce(
  //    (accumulator, data) => accumulator + data.used,
  //    0
  //  );
  const usedCounts = used;

  const percentage = (usedCounts / topicCount) * 100;

  //  const progressBarStyle = {
  //    width: '100%', // Reduce the width by 50%
  //  };

  const progressBarStyle = {
    width: '100%', // Reduce the width by 50%
    height: '30%', // Reduce the height by 50%,
    textAlign: 'center', // Center-align text
    margin: 'auto', // Center horizontally
  };

  return (
    <div className="progress-bar-container" style={progressBarStyle}>
      <h2 style={{ color: 'black' }}>Progress Bar for {topic}</h2>
      <div className="progress">
        <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      </div>
      <p style={{ color: 'black' }}>
        {usedCounts} Used Questions out of {topicCount} Total Topics
      </p>
    </div>
  );
}

export default ProgressBar;
