import React from 'react';
import { useSelector } from 'react-redux';

function ProgressBar({ used, questionCount }) {
  console.log('ProgressBar questionCount: ', questionCount);
  console.log('ProgressBar correct: ', used);

  const percentage = (used / questionCount) * 100;

  const progressBarStyle = {
    width: '100%', // Reduce the width by 50%
    height: '30%', // Reduce the height by 50%,
    textAlign: 'center', // Center-align text
    margin: 'auto', // Center horizontally
  };
  const h2Style = {
    fontSize: '20px', // Adjust the font size as needed
    color: 'black',
  };

  return (
    <div className="progress-bar-container" style={progressBarStyle}>
      {/*<h2 style={{ color: 'black' }}>Progress Bar for {topic}</h2>*/}
      {/*{topic && <h2 style={h2Style}>Piechart for {topic}</h2>}*/}
      <div className="progress">
        <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
      </div>
      <p style={{ color: 'black' }}>
        {used} Attempted Questions out of {questionCount}
      </p>
    </div>
  );
}

export default ProgressBar;
