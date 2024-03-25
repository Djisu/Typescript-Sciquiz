import React from 'react';
import { VictoryPie } from 'victory';

function PieChartCorrectTopics({ topic, correct, totQuestions }) {
  const correctPercentage = (correct / totQuestions) * 100;
  const incorrect = totQuestions - correct;
  const incorrectPercentage = (incorrect / totQuestions) * 100;

  const data = [
    { x: 'Correct', y: correctPercentage },
    { x: 'Used', y: incorrectPercentage },
  ];

  const chartStyle = {
    width: '60%',
    height: '60%',
    textAlign: 'center',
    margin: 'auto',
  };

  return (
    <div className="doughnut-chart-container" style={chartStyle}>
      <p style={{ color: 'black' }}>Current Test Results:</p>
      <h5 style={{ fontSize: '20px', color: 'black' }}>
        <span>{topic}</span>
        <div>
          Correct: <span>{correctPercentage.toFixed(2)}%</span> ({correct})
        </div>
        <div>
          Used: <span>{incorrectPercentage.toFixed(2)}%</span> ({totQuestions})
        </div>
        <VictoryPie
          data={data}
          colorScale={['rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)']}
          style={{ labels: { fontSize: 10, fill: 'black' } }}
          innerRadius={100}
          padAngle={3}
        />
      </h5>
    </div>
  );
}

export default PieChartCorrectTopics;


// import React from 'react';
// import { Doughnut } from 'react-chartjs-2';

// function PieChartCorrectTopics({ topic, correct, used,totQuestions}) {
//   console.log(topic, correct, totQuestions);

//   const oldUsed = totQuestions

//   console.log(topic, correct, totQuestions )
//  /*  useEffect(() => {
//     console.log(`PieChartCorrectTopics mounted or props changed: ${topic}, ${correct}, ${used}`);
//   }, [topic, correct, used]); */

//   // Calculate percentages
//   //used = 100

//   let correctPercentage = (correct / totQuestions) * 100
//   let incorrect = totQuestions - correct;
//   let incorrectPercentage = (incorrect / totQuestions) * 100

//   let data = {
//     labels: [],
//     datasets: [
//       {
//         data: [],
//         backgroundColor: [],
//         borderColor: [],
//         borderWidth: 1,
//       },
//     ],
//   };

//   data = {
//     labels: ['correct', 'used'],
//     datasets: [
//       {
//         data: [correctPercentage, incorrectPercentage],
//         fill: true,
//         backgroundColor: ['rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
//         borderColor: ['rgba(0, 255, 0, 1)', 'rgba(255, 0, 0, 1)'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     plugins: {
//       legend: {
//         display: true,
//       },
//     },
//   };

//   const chartStyle = {
//     width: '60%',
//     height: '60%',
//     textAlign: 'center',
//     margin: 'auto',
//   };

//   return (
//     <div className="doughnut-chart-container" style={chartStyle}>
//       <p style={{ color: 'black' }}> Current Test Results111:</p>
//       <h5 style={{ fontSize: '20px', color: 'black' }}>
//         <span>{topic}</span>
//         <div>
//           {/* Correct: <span>{correctPercentage}%</span> ({correct}) */}
//           Correct: <span>{correctPercentage}%</span>  ({correct})
//         </div>
//         <div>
//           {/* Incorrect: <span>{incorrectPercentage}%</span> ({used - correct}) */}
//           Used: <span>{incorrectPercentage}%</span> ({totQuestions})
//         </div>
//         <Doughnut  data={data} options={options} />
//       </h5>
//     </div>
//   );
// }

// export default PieChartCorrectTopics;












// // import React from 'react';
// // import { Doughnut } from 'react-chartjs-2';

// // function PieChartCorrectTopics({ topic, correct, totQuestions }) {
// //   const correctPercentage = (correct / totQuestions) * 100;
// //   const incorrect = totQuestions - correct;
// //   const incorrectPercentage = (incorrect / totQuestions) * 100;

// //   const data = {
// //     labels: ['correct', 'used'],
// //     datasets: [
// //       {
// //         data: [correctPercentage, incorrectPercentage],
// //         fill: true,
// //         backgroundColor: ['rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
// //         borderColor: ['rgba(0, 255, 0, 1)', 'rgba(255, 0, 0, 1)'],
// //         borderWidth: 1,
// //       },
// //     ],
// //   };

// //   const options = {
// //     plugins: {
// //       legend: {
// //         display: true,
// //       },
// //     },
// //   };

// //   const chartStyle = {
// //     width: '60%',
// //     height: '60%',
// //     textAlign: 'center',
// //     margin: 'auto',
// //   };

// //   return (
// //     <div className="doughnut-chart-container" style={chartStyle}>
// //       <p style={{ color: 'black' }}> Current Test Results111:</p>
// //       <h5 style={{ fontSize: '20px', color: 'black' }}>
// //         <span>{topic}</span>
// //         <div>
// //           Correct: <span>{correctPercentage}%</span> ({correct})
// //         </div>
// //         <div>
// //           Used: <span>{incorrectPercentage}%</span> ({totQuestions})
// //         </div>
// //         {data.labels.length > 0 && (
// //           <Doughnut data={data} options={options} />
// //         )}
// //       </h5>
// //     </div>
// //   );
// // }

// // export default PieChartCorrectTopics;




































































// // // import React, { useEffect } from 'react';
// // // import { Pie } from 'react-chartjs-2';

// // // function PieChartCorrectTopics({ topic, correct, used}) {
// // //   console.log(topic, correct, used);

// // //   const oldUsed = used

// // //   console.log(topic, correct, used )
// // //  /*  useEffect(() => {
// // //     console.log(`PieChartCorrectTopics mounted or props changed: ${topic}, ${correct}, ${used}`);
// // //   }, [topic, correct, used]); */

// // //   // Calculate percentages
// // //   //used = 100

// // //   const correctPercentage = (correct / used) * 100

// // //   const incorrect = used - correct;
// // //   const incorrectPercentage = (incorrect / used) * 100

// // //   const data = {
// // //     labels: ['correct', 'used', 'totQuestions'],
// // //     datasets: [
// // //       {
// // //         data: [correctPercentage, incorrectPercentage],
// // //         fill: true,
// // //         backgroundColor: ['rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
// // //         borderColor: ['rgba(0, 255, 0, 1)', 'rgba(255, 0, 0, 1)'],
// // //         borderWidth: 1,
// // //       },
// // //     ],
// // //   };

// // //   const options = {
// // //     plugins: {
// // //       legend: {
// // //         display: true,
// // //       },
// // //     },
// // //   };

// // //   const chartStyle = {
// // //     width: '100%',
// // //     height: '100%',
// // //     textAlign: 'center',
// // //     margin: 'auto',
// // //   };

// // //   return (
// // //     <div className="pie-chart-container" style={chartStyle}>
// // //       <p style={{ color: 'black' }}> Current Test Results:</p>
// // //       <h5 style={{ fontSize: '20px', color: 'black' }}>
// // //         <span>{topic}</span>
// // //         <div>
// // //           {/* Correct: <span>{correctPercentage}%</span> ({correct}) */}
// // //           Correct: <span>{correctPercentage}%</span>  ({correct})
// // //         </div>
// // //         <div>
// // //           {/* Incorrect: <span>{incorrectPercentage}%</span> ({used - correct}) */}
// // //           Used: <span>{incorrectPercentage}%</span> ({used})
// // //         </div>
// // //         <Pie data={data} options={options} />
// // //       </h5>
// // //     </div>
// // //   );
// // // }

// // // export default PieChartCorrectTopics;
