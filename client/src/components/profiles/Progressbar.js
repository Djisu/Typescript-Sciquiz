import React from 'react';

function ProgressBar({ used, questionCount }) {
//  console.log('in ProgressBar used, questionCount =', used, questionCount);

  const progressBarStyle = {
    width: '100%',
    height: '30px',
    backgroundColor: 'lightgrey', // Background color of the progress bar
  };

  const usedStyle = {
    width: (used / questionCount) * 100 + '%', // Width based on the used/questionCount ratio
    height: '100%',
    backgroundColor: 'green', // Color for the "used" segment
  };

  return (
    <div className="progress-bar-container">
      <div className="progress" style={progressBarStyle}>
        <div className="used-segment" style={usedStyle}></div>
      </div>
      <p style={{ color: 'black' }}>
        {used} Used Questions out of {questionCount}
      </p>
    </div>
  );
}

export default ProgressBar;

