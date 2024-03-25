import React from 'react';
import { VictoryPie } from 'victory';

function PieChartCorrectTopics({ correct, used }) {
   console.log('UUUUUUUUUU', correct, used )


  let incorrect = used - correct;
  let correctPercentage = (correct / used) * 100;
  let incorrectPercentage = (incorrect / used) * 100;

  let data = [
    { x: 'Correct', y: correctPercentage },
    { x: 'Incorrect', y: incorrectPercentage },
  ];

  let options = {
    legend: { 
      visible: true 
    }
  };

  let chartStyle = {
    width: '60%',
    height: '60%',
    textAlign: 'center',
    margin: 'auto',
  };

  let h2Style = {
    fontSize: '10px',
    color: 'black',
  };

  return (
    <div className="doughnut-chart-container" style={chartStyle}>
      <h4 style={h2Style}>
        <br /> Correct&nbsp; <span>{correctPercentage.toFixed(2)}%</span>
        <br /> Incorrect&nbsp;<span>{incorrectPercentage.toFixed(2)}%</span>
      </h4>
      <svg viewBox="0 0 400 400" style={{ width: '100%', height: '100%' }}>
        <VictoryPie
          data={data}
          colorScale={['rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)']}
          style={{ labels: { fontSize: 10, fill: 'black' } }}
          standalone={false}
          innerRadius={100}
          padAngle={3}
        />
      </svg>
    </div>
  );
}

export default PieChartCorrectTopics;



























// import React, { useRef, useEffect } from 'react';
// import { Doughnut } from 'react-chartjs-2';

// function PieChartCorrectTopics({ correct, used }) {

//   console.log('correct, used===', correct, used )

//   let incorrect = used - correct;
//   let correctPercentage = (correct / used) * 100;
//   let incorrectPercentage = (incorrect / used) * 100;

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

//   let labels = ['Correct', 'Incorrect'];

//   data = {
//     labels: labels,
//     datasets: [
//       {
//         data: [correctPercentage, incorrectPercentage],
//         backgroundColor: ['rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
//         borderColor: ['rgba(0, 255, 0, 1)', 'rgba(255, 0, 0, 1)'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   let options = {
//     plugins: {
//       legend: {
//         display: true,
//       },
//     },
//   };

//   let chartStyle = {
//     width: '60%',
//     height: '60%',
//     textAlign: 'center',
//     margin: 'auto',
//   };

//   let h2Style = {
//     fontSize: '10px',
//     color: 'black',
//   };

//   console.log('datasets.data::::', data.datasets)

//   return (
//     <div className="doughnut-chart-container" style={chartStyle}>
//       <h4 style={h2Style}>
//         <br /> Correct&nbsp; <span>{correctPercentage.toFixed(2)}%</span>
//         <br /> Incorrect&nbsp;<span>{incorrectPercentage.toFixed(2)}%</span>
//         {data && (<Doughnut data={data} options={options} />)}
//       </h4>
//     </div>
//   );
// }

// export default PieChartCorrectTopics;
