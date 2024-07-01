import React from 'react';
import { Pie } from 'react-chartjs-2';

interface IProps {
  correct: number
  testCount: number
}

const PieChartCorrect: React.FC<IProps> = ({ correct, testCount })=> {
  console.log('in PieChartCorrect correct, testCount');

  const incorrect = testCount - correct;

  const labels = ['Correct', 'testCount'];

  const data = {
    labels: labels,
    datasets: [
      {
        data: [correct, testCount],
        backgroundColor: ['rgba(0, 0, 255, 1)', 'rgba(255, 0, 0, 1)'],
        borderColor: ['rgba(0, 0, 255, 0.75)', 'rgba(255, 0, 0, 0.5)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  const chartStyle: React.CSSProperties = {
    width: '30%',
    height: '30%',
    textAlign: 'center',
    margin: 'auto',
  };

  const h2Style = {
    fontSize: '20px',
    color: 'black',
  };

  return (
    <div className="pie-chart-container" style={chartStyle}>
      <h4 style={h2Style}>
        Current Test Results:
        <br /> Correct&nbsp; <span>{correct}</span>
        <br /> testCount&nbsp;<span>{testCount}</span>
        <Pie data={data} options={options} />
      </h4>
    </div>
  );
}

export default PieChartCorrect;
