import React from 'react';

function ProgressBar({ used, questionCount }) {
//  console.log('in ProgressBar used, questionCount =', used, questionCount);

  const progressBarStyle = {
    width: '100%',
    height: '30px',
    backgroundColor: 'lightgray', // Background color of the progress bar
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

//import React from 'react';
//
//function ProgressBar({ used, questionCount }) {
//
//console.log('used== ', used)
//console.log('questionCount== ', questionCount);
//
//  const percentage = (used / questionCount) * 100;
//  const unusedPercentage = 100 - percentage;
//
//  const progressBarStyle = {
//    width: '100%',
//    height: '30px',
//    backgroundColor: 'lightgray', // Background color of the progress bar
//  };
//
//  const usedStyle = {
//    width: `${percentage}%`,
//    height: '100%',
//    backgroundColor: 'green', // Color for the "used" segment
//  };
//
//  const unusedStyle = {
//    width: `${unusedPercentage}%`,
//    height: '100%',
//    backgroundColor: 'lightgray', // Color for the "unused" segment
//  };
//
//  return (
//    <div className="progress-bar-container">
//      <div className="progress" style={progressBarStyle}>
//        <div className="used-segment" style={usedStyle}></div>
//        <div className="unused-segment" style={unusedStyle}></div>
//      </div>
//      <p style={{ color: 'black' }}>
//        {used} Attempted Questions out of {questionCount}
//      </p>
//    </div>
//  );
//}
//
//export default ProgressBar;
